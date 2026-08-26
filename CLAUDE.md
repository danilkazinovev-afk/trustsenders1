# TrustSenders — working notes

Marketing site for an **email-deliverability / cold-email-infrastructure
agency**. Next.js 16 (App Router) + React 19 + TypeScript. One long homepage,
a lead form, and two legal pages. ~3,900 lines total.

Live at **https://trustsenders.com** (Vercel). Repo:
`danilkazinovev-afk/trustsenders1`, branch `main`, no CI — Vercel deploys on
push.

## Run it

```bash
npm install
npm run dev      # :3000, turbopack
npm run build    # the only real typecheck — do this before claiming anything works
node app/api/submit-consultation/message.test.ts   # the one unit test
```

⚠️ **`npm run dev` without `.env.local` is fine**, but the demo form will 500 on
submit. See *Form → Telegram* below.

## Layout

```
app/
  page.tsx                  hero (scrambling word + logo ticker) → StatsSection → BelowHeroSection
  layout.tsx                fonts, metadata, <Analytics />
  globals.css               1,398 lines — the real substance. Hand-written, tokens at :root
  demo/page.tsx + DemoForm.tsx   the lead form
  privacy/ terms/           legal pages
  api/submit-consultation/
    route.ts                validates, POSTs to Telegram
    message.ts              builds + escapes the message (pure, testable)
    message.test.ts         run with plain `node`, no framework
components/
  below-hero-section.tsx    591 lines — EVERY homepage section below the hero
  nav.tsx  stats-section.tsx  count-up.tsx
  service-cards.tsx  case-studies.tsx  faq-section.tsx
  ui/text-scramble.tsx      the hero's "beyond" effect
hooks/use-is-mobile.ts
design.md                   design-system doc — see the staleness warning below
```

**Section order on the homepage** (all inside `below-hero-section.tsx` except
where noted): hero → stats → trust → problems → **why** → **services
(Flexible Approach) + ServiceCards** → tools → audience → founder → process →
results → case-studies → pricing → lead-magnet → faq → final-cta → footer.

⚠️ `#services` is only a heading + subtitle; **`<ServiceCards />` is its
content**. Move them together.

## Stack decisions worth not re-litigating

- **Almost no dependencies.** Runtime deps are `next`, `react`, `react-dom`,
  `@vercel/analytics`. An audit removed 11 packages (framer-motion, three,
  uuid, clsx, tailwind-merge, next-themes, lucide-react, radix-slot, cva,
  Supabase, + types). Don't add one back for something CSS or the platform
  already does.
- **Tailwind is installed but barely used.** The design lives in `globals.css`
  as hand-written CSS with `:root` tokens. Follow that, don't Tailwind-ify.
- **No shadcn.** `components.json`, the `.dark` block and the `--primary` /
  `--twc-*` compat tokens were deleted — nothing used them. (They were also
  broken: `.text-primary` compiled to a nested `oklch(oklch(…))` the browser
  discards.)
- **Platform features over JS.** The FAQ is `<details>`, the scroll bar is
  `animation-timeline: scroll()`, the pixel-trail fade is a CSS transition.

## Form → Telegram

The demo form POSTs JSON to `/api/submit-consultation`, which sends a message
to a Telegram group. **There is no database** (Supabase was removed).

Two env vars, read **inside the handler** so a missing one can't break the
build:

```
TELEGRAM_BOT_TOKEN=<from @BotFather>
TELEGRAM_CHAT_ID=<negative number for a group>
```

Local: `.env.local` (gitignored). Production: Vercel → Settings → Environment
Variables.

⚠️ **Vercel binds env vars at build time — adding one does NOT redeploy.** A
deployment created before the vars exist will never see them. This already
caused a live outage: the form returned 500 with valid credentials because the
deployment predated them. **Redeploy after any change to these.**

⚠️ Neither var is `NEXT_PUBLIC_`, deliberately — that prefix would bake the bot
token into the browser bundle.

⚠️ **Telegram caps a message at 4,096 chars** and rejects longer ones with
`Bad Request: message is too long`. Fields are capped in `message.ts` (2,400
for the free-text field, 250 for the rest) and the textarea has a matching
`maxLength`. Truncation happens **after** HTML-escaping and strips a trailing
partial entity — cutting mid-`&amp;` produces markup Telegram rejects.

**Diagnosing a 500 from outside**, without log access: the route returns the
same message whether env vars are missing or Telegram rejected the call, but
**timing separates them**. Missing vars return before any network call (~same
speed as a 400); a real Telegram call adds ~100–150ms. Measure medians over
~10 requests, not one.

## Testing style

- **`message.test.ts` is plain `node` + `assert`** — no framework, no config.
  Node strips the types natively. Extend it rather than adding a test runner.
- ⚠️ **Verify a test fails when you break the thing it guards.** Both existing
  guards (HTML escaping, length capping) were confirmed to fail on purpose
  before being trusted. A green run you've never seen fail is not evidence.
- **Drive the browser for anything visual.** Playwright is available via the
  npx cache:
  `/Users/dan/.npm/_npx/e41f203b7505f1fb/node_modules/playwright/index.mjs`.
  A green `npm run build` says nothing about layout — several real bugs here
  built cleanly.

## Traps this codebase has already sprung

Each of these was a real bug; the fix is in place and the reason is here so it
isn't undone.

- ⚠️ **`white-space: nowrap` on a wide button inflates a whole grid.**
  `.svc-card-cta` ("Request an Architecture Review", 276px) pinned the shared
  `1fr` track to 342px, making the page wider than any viewport under ~1080px.
  On a 320px phone the browser then zooms the whole page out to compensate.
  Fixed by letting it wrap. Watch for this with any long nowrap text in a grid.
- ⚠️ **A sticky nav needs `scroll-padding-top`.** Without it every in-page
  anchor lands its target underneath the header. `html { scroll-padding-top:
  72px }` covers the 59px desktop / 51px mobile nav.
- ⚠️ **iOS Safari zooms the page when a focused input is under 16px.** Form
  controls are bumped to 16px below 768px for exactly this reason. Don't
  "tidy" them back to 15px.
- ⚠️ **`<details>` will not animate via `grid-template-rows`.** It looks right
  and does nothing — the element snaps. The FAQ uses `::details-content` +
  `interpolate-size: allow-keywords` (declared on `:root`), which animates both
  directions.
- ⚠️ **JSX eats a space between a tag and an HTML entity.**
  `</strong> &mdash; text` renders as `text—text`. Use `{" — "}`.
- ⚠️ **Tapping fires `focus` before `click`.** A card with both
  `onFocus={setActive}` and `onClick={toggle}` can never open on touch — focus
  opens it, click closes it. `service-cards.tsx` attaches focus/blur only on
  non-touch.
- ⚠️ **An SVG loaded via `<img>` cannot use the page's webfonts.**
  `trustsenders-logo.svg` sets its wordmark in live `<text>` with DM Sans, so
  it renders in Helvetica/Arial for visitors. The `textLength` keeps the width
  stable so nothing shifts. **The proper fix is an outlined version of the
  logo** from whoever made the brand files; inlining the SVG would also work.

## Design system

`design.md` is a thorough reference for colour, type and components — teal
`#3BB8A8` brand, orange `#F97316` action, three fonts (Clash Display headings /
DM Sans body / Space Mono labels), signature orange→black sweep button.

⚠️ **`design.md` is partly stale** — it still documents the aurora gradient
system (deleted) and the `.dark` / shadcn tokens (deleted). Treat
`globals.css` as the source of truth and fix `design.md` when you touch a
section it describes.

Conventions that are live:
- **Hover never moves anything** — border and shadow only, no `translateY`.
  The 1px press on `.btn:active` is deliberate.
- **Nav type scale**: logo 24px tall, links 15px/500, CTA 14px/700. Links were
  700 and shouted as loudly as the CTA; the order should read
  **logo → action → navigation**.
- **Audience cards** carry a per-card hue via `--aud-color` (an `r,g,b`
  triplet) driving border, corner wash, hover glow and the shimmer sweep.
  Contrast was measured over the painted background where the text actually
  sits: body copy 5.0–5.3:1, above AA. If you strengthen the tint further,
  re-measure — the two numbers are the border alpha and the gradient peak.

## Mobile

Verified clean (no horizontal overflow) across **4 pages × 10 widths, 320px →
1440px**. `body { overflow-x: hidden }` means a user can never actually scroll
sideways, so overflow shows up as the page rendering zoomed out rather than as
a scrollbar — check `document.documentElement.scrollWidth` against the
viewport, don't trust your eyes.

Known limit: at **280px** (Galaxy Fold cover screen) the layout is ~6px wide
because the hero headline can't fit "Deliverability" at its 42px minimum.
Every mainstream phone from 320px is exact.

Not fixed, your call: several inline/footer tap targets are under the 24×24
WCAG minimum ("Visit Website" 79×13, footer "FAQ" 24×17). Fixing means adding
vertical padding, which changes footer density.

## Content notes

- **Four nav items point at two destinations** — "Infrastructure" and
  "Consulting" both go to `#service-cards`; "Support" and "Pricing" both go to
  `#pricing`. Probably unintended, left alone.
- **Eight unused logo files** sit in `public/logos/` (`trustsenders_logo.png`,
  `trustsenders.png`, `trustsenders_logo.svg`, `trustsenders_footer.svg`,
  `Vector-1-removebg-pr.png`, `cleanmymac-x4x.png`,
  `macpaw-logo-png_seeklogo-451807.png`,
  `6937eea1bed9853c18f0970c_newscatcherlogo.svg`). Brand assets, not code —
  ask before deleting.
- The favicon still points at `public/favicon.png`; `brand 2/` on the user's
  Desktop has a `trustsenders-mark.svg` that would suit it.

## Analytics

`@vercel/analytics` v2, `<Analytics />` in `app/layout.tsx` inside `<body>`.
Route changes are tracked automatically (that's the reason for the component
over a raw script tag). **It also needs enabling in the Vercel dashboard** —
the package alone does nothing. Privacy policy should mention it.

## Working style that fits this user

They review visually and report symptoms in plain terms ("too transparent",
"kinda messy", "sticking out"). Translate that into a measurement before
changing anything — nearly every report in this project had a specific,
measurable cause, and twice the obvious reading was wrong:

- "The research is attached to the wrong company" → it was the CSV. *(other project)*
- "Logo is too large" → the new SVG's aspect ratio is 6.25:1 against the old
  PNG's 4.4:1, so the same CSS height rendered 41% wider.
- "Cards are too transparent" → removing the Segment pills had removed each
  card's only colour element.

Measure, state the number, then change one thing. And check your own
measurement before trusting it — a naive contrast sample read pure white, and
a "failing" one turned out to be the Next.js dev badge overlapping the card.
