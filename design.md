# TrustSenders Design System

> Source of truth: [app/globals.css](app/globals.css), [app/layout.tsx](app/layout.tsx), and [tailwind.config.ts](tailwind.config.ts).
> TrustSenders is an email-deliverability / cold-email-infrastructure agency site. The design language is clean, confident, and "operational" — a white, data-dense surface with a calm **teal** brand and a high-energy **orange** action accent. The signature interaction is a split-fill "sweep" that wipes a button from orange into near-black on hover.

---

## 1. Visual Theme & Atmosphere

A luminous white (`#ffffff`) canvas with near-black (`#0d0d0d`) text. The personality comes from two opposing accents:

- **Teal (`#3BB8A8`)** — the brand. Trust, deliverability, "after" states, links, focus rings, check marks, success.
- **Orange (`#F97316`)** — the action / problem accent. Primary CTAs, "before/problem" states, the sweep animation, warning shimmers.

The page alternates white sections separated by hairline `rgba(0,0,0,0.05)` borders. Headlines are set in **Clash Display** (bold, condensed-feeling display type), body in **DM Sans**, and all technical labels / numerals in **Space Mono** (uppercase, tracked-out — the "terminal" voice that signals data and precision).

There is an **aurora** gradient system (teal radial washes behind the hero and nav) that is currently **disabled** in CSS but left in place — see `.aurora-1`, `.aurora-2`, `#nav::before` (all `display: none !important`).

**Key characteristics**
- Three-font system: Clash Display (headings) · DM Sans (body) · Space Mono (labels/numbers)
- Dual-accent palette: teal brand + orange action — never used interchangeably
- Signature CTA: split-gradient "sweep" button (orange → `#1a1a1a`) driven by `background-position`
- Soft radii: 8px / 16px / 24px, full pill (`9999px`) only for badges/pills/chips
- Hairline borders (5–12% black) carry separation; shadows stay whisper-light
- Generous section rhythm: 88px desktop → 48–56px mobile
- Motion: scroll-reveal staggers, ticker marquee, conic-gradient hover borders, glow pulses

---

## 2. Color Palette & Roles

All colors are defined as CSS variables in `:root` ([app/globals.css:8-34](app/globals.css#L8-L34)).

### Brand (Teal)
| Token | Value | Role |
|-------|-------|------|
| `--brand` | `#3BB8A8` | Core brand teal — buttons, accents, borders, check fills |
| `--brand-light` | `#d1f0ec` | Tinted teal surface — badges, icon chips, quote blocks, pills |
| `--brand-deep` | `#14B8A6` | Deeper teal for text on light surfaces, links, hover |

> Note: Tailwind ([tailwind.config.ts](tailwind.config.ts)) defines `brand-deep` as `#29877a` (a more muted, accessible teal for text utility classes). The CSS variable (`#14B8A6`) and the Tailwind token (`#29877a`) coexist — CSS-variable styles use `#14B8A6`; `text-brand-deep` Tailwind utilities resolve to `#29877a`.

### Action / Problem (Orange)
| Value | Role |
|-------|------|
| `#F97316` | Primary CTA fill, "before/problem" labels, problem-card accents, dash markers |
| `#1a1a1a` | The dark half of the sweep gradient; dark-teal button base |
| `rgba(217,79,59,…)` (`#D94F3B`) | Warm red-orange used in problem-card shimmer sweeps and "before" outcome gradients |

### Text / Neutrals
| Token | Value | Role |
|-------|-------|------|
| `--text-primary` | `#0d0d0d` | Headings, primary text, dark CTA-box background |
| `--text-body` | `#333333` | Body copy, list text |
| `--text-muted` | `#666666` | Descriptions, sub-text, captions |
| `--text-faint` | `#888888` | Mono labels, placeholders, watermark numerals |
| `--surface` | `#fafafa` | Footer, lead-magnet, info cards, form sub-surfaces |
| `--bg` | `#ffffff` | Page + card background |

### Borders
| Token | Value | Role |
|-------|-------|------|
| `--border` | `rgba(0,0,0,0.05)` | Default section/card dividers |
| `--border-md` | `rgba(0,0,0,0.08)` | Interactive / hover borders, inputs |
| `--border-strong` | `rgba(0,0,0,0.12)` | Demo form inputs, demo card |

### Shadows
| Token | Value | Role |
|-------|-------|------|
| `--shadow-card` | `rgba(0,0,0,0.03) 0px 2px 4px` | Ambient card lift |
| `--shadow-btn` | `rgba(0,0,0,0.06) 0px 1px 2px` | Button micro-depth |

Colored glow shadows appear on hover, e.g. `0 0 24px rgba(59,184,168,0.4)` (teal) and `0 0 24px rgba(249,115,22,0.5)` (orange).

### shadcn / Tailwind compatibility
`--primary: oklch(0.85 0.15 55)`, plus `--foreground`, `--border-color`, and `--twc-*` aliases exist only so `components/ui/*` (shadcn) primitives render against the same tokens. Not part of the human-facing palette.

---

## 3. Typography

### Font families ([app/layout.tsx](app/layout.tsx))
| Variable | Font | Loaded via | Weights | Used for |
|----------|------|-----------|---------|----------|
| `--font-heading` | **Clash Display** | Fontshare `<link>` | 700 | All `h1–h4`, hero, section titles |
| `--font-sans` → `--font-karla` | **DM Sans** | `next/font/google` | 400 | Body, buttons, nav, paragraphs |
| `--font-mono` | **Space Mono** | `next/font/google` | 400, 700 (+italic) | Labels, tags, numerals, badges |

> The body-font CSS variable is named `--font-karla` for legacy reasons but **DM Sans** is what's actually loaded. `--font-sans` references it. (Tailwind's `font-sans` points at a non-existent `--font-inter` and is effectively unused — DM Sans wins via the global `body` rule.)

`h1, h2, h3, h4` are globally set to `font-family: var(--font-heading); font-weight: 700` ([app/globals.css:76](app/globals.css#L76)).

### Scale & hierarchy
| Role | Font | Size | Weight | Tracking | Notes |
|------|------|------|--------|----------|-------|
| Hero H1 | Clash Display | `clamp(42–78px)` | 700 | `-0.015em` | `.hero-h1`; line1 larger, line2 ~0.85 opacity |
| Hero accent | Clash Display | inherit | 700 | — | `.hero-h1-accent` colored `--brand-deep` |
| Section title | Clash Display | `clamp(26–40px)` | 700 | `-0.02em` | `.section-title`, line-height 1.1 |
| CTA-box H2 | Clash Display | `clamp(30–60px)` | 700 | `-0.022em` | `.cta-h2`, white on dark |
| Feature heading | Clash Display | `clamp(22–34px)` | 700 | `-0.018em` | `.feature-heading` |
| Card title | DM Sans | 16–22px | 600–700 | `-0.2px` | service / audience / pricing cards |
| Hero sub | DM Sans | `clamp(17–19px)` | 700 | — | `.hero-sub`, color `#444` |
| Body | DM Sans | 15–17px | 400 | normal | line-height 1.6–1.7 |
| Section sub | DM Sans | 17–18px | 400 | normal | `.section-sub`, `--text-muted` |
| Button | DM Sans | 15–16px | 500–700 | normal | `.btn` |
| Mono label | Space Mono | 12px | 700 | `0.6–0.65px` | UPPERCASE — `.mono-label`, `.section-tag`, `.ticker-label` |
| Mono badge | Space Mono | 10–11px | 700 | `0.6–0.7px` | UPPERCASE — tags, eyebrows, step nums |
| Stat number | DM Sans | `clamp(28–44px)` | 650 | `-1px` | `.stat-num`, accent span teal |

### Principles
- **Three voices, strict boundaries**: Clash Display announces, DM Sans reads, Space Mono labels/quantifies. Never mix roles.
- **Negative tracking scales with size** on Clash Display headings (`-0.015em` to `-0.022em`).
- **Uppercase + Space Mono = "data/technical"** — every eyebrow, tag, step number, and metric label uses it.
- **`overflow-wrap: anywhere`** on `p, h1–h4` for safe mobile wrapping.

---

## 4. Components

### Buttons ([app/globals.css:120-181](app/globals.css#L120-L181))
Base `.btn`: inline-flex, `gap 7px`, `padding 9px 22px`, `radius 8px` (`--radius-sm`), DM Sans 15px, `--shadow-btn`.

| Variant | Look | Behavior |
|---------|------|----------|
| `.btn-primary` | **Split-fill sweep**: `linear-gradient(to right, #F97316 50%, #1a1a1a 50%)` at `200%` width, weight 700, 16px, white | Hover slides `background-position` right→left over 0.8s (orange wipes to black) + orange glow. On touch devices runs once via `cta-sweep-mobile` keyframe |
| `.btn-ghost` | White, `--text-primary`, `1px solid --border-md`, no shadow | Hover `opacity .85` |
| `.btn-dark-teal` | `#1a1a1a` bg, white, 700 | Hover → teal bg + teal glow |
| `.btn-brand` | `--brand` bg, dark text | Hover `opacity .88` |

Sizes: `.btn-sm` (6px 16px / 13px), `.btn-lg` (12px 28px / 15px). The sweep is re-asserted for nav, hero, problems, process, and lead CTAs.

> Pricing & demo CTAs reuse the sweep but with a **teal→`#0d0d0d`** gradient instead of orange (`.p-action a`, `.demo-submit-wrap .btn-primary`), pairing the sweep mechanic with the brand color in conversion contexts.

### Pills & badges
`.pill` (full-round, 4px 12px, 13px): `.pill-green` (teal-light bg, deep-teal text), `.pill-neutral` (surface bg, muted, bordered). Mono eyebrow badges (`.lead-badge`, `.aud-tag`, `.cta-tag`) use Space Mono uppercase on `--brand-light` or transparent.

### Cards
- **Service card** (`.service-card`): white, `--border`, radius 24px, 32px pad, watermark mono numeral top-right, teal icon chip (`.svc-icon`, `--brand-light`), hover lifts border + shadow.
- **Expandable service card** (`.svc-card`): colored ring/glow via `--svc-color`, `max-height` accordion body, `→` teal bullets, sweep CTA, "Learn more →" hint that fades when active.
- **Audience card** (`.audience-card`): left accent border `rgba(var(--aud-color),…)`, skew-shimmer `::after` on hover.
- **Problem card** (`.problem-card`): orange-tinted (`rgba(249,115,22,0.05)` bg, orange border), mono dash marker, red-orange skew shimmer on hover.
- **Pricing card** (`.pricing-card`): white, radius 24px; hover → teal border + faint teal top-gradient + teal glow.
- **Case-study hero card** (`.cs-hero-card`): 16px radius, 40px pad, slide in/out transitions; teal metric tiles, challenge label orange / solution label teal.
- **Why-list item** (`.why-list li`): gradient-border wrapper that, on hover, runs a **conic-gradient spin** (`spin-ba`, `--ba` angle `@property`) around the card; teal check-draw SVG animation on reveal.

### Inputs (demo form, [app/globals.css:1291-1321](app/globals.css#L1291-L1321))
White, `1px solid --border-strong`, radius 8px, 10×14px pad, DM Sans 15px. Focus → teal border + `0 0 0 3px rgba(59,184,168,0.13)` ring. Custom SVG chevron on `.demo-select`.

### Navigation ([app/globals.css:211-264](app/globals.css#L211-L264))
Sticky white bar, hairline bottom border, 58px tall (54/50 on mobile). Center links DM Sans 15px/700, hover → teal-tinted bg. Right side: ghost + primary-sweep CTA. Hamburger + slide-down `.mobile-menu` below 900px. (Disabled aurora wash lives in `#nav::before`.)

### Footer
`--surface` bg, 4-col grid (`1.6fr 1fr 1fr 1fr`), mono uppercase column headings, muted links → teal on hover, stacked single-column under 600px.

---

## 5. Layout & Spacing

- **Container**: `max-width 1200px`, padding `0 32px` → 20px (≤768) → 16px (≤480).
- **Sections**: `.section` 88px · `.section-sm` 56px · `.section-lg` 112px vertical; most `#id` sections use 88px, collapsing to 48–56px at ≤480px (see the mobile-polish block, [app/globals.css:1445-1523](app/globals.css#L1445-L1523)).
- **Section header** pattern: mono `.section-tag` eyebrow → `.section-title` → `.section-sub`.
- **Grids**: services 2-col, problems 3→2→1, process 5→3→1, pricing 3→1, stats 4→2, audience 2→1, feature/why/trust/faq two-column (`1fr 1fr` or `1fr 1.1fr`) → single column at 900px. `.feature-layout.flip` uses `direction: rtl` to swap column order.
- **Hero**: `min-height: calc(100svh - navHeight)`, CSS-grid `1fr auto` so the client ticker always pins above the fold; centered content.

### Radius scale
| Token | Value | Use |
|-------|-------|-----|
| `--radius-sm` | 8px | Buttons, inputs, small chips |
| `--radius-md` | 16px | Cards, list items, contact tiles |
| `--radius-lg` | 24px | Feature cards, pricing, demo card, CTA box |
| `--radius-pill` | 9999px | Pills, badges, tool chips, ticker label |

---

## 6. Motion & Interaction

- **Button sweep**: `background-position` transition over 0.8s `cubic-bezier(0.4,0,0.2,1)`; auto-runs once on touch.
- **Client ticker** (`.ticker-track`): 40s linear marquee with edge mask-fade; pauses under `prefers-reduced-motion`.
- **Scroll reveals**: `.why-list`, `.tool-chip`, `.outcome-row` fade/translate in with staggered `transition-delay`; `--visible` class toggled by intersection.
- **Conic hover border**: `.why-list li:hover` spins a `--ba` angle conic-gradient (`@property --ba`).
- **Check draw**: teal check marks stroke-dash animate in (`check-draw`).
- **Glow pulses**: `.cta-box::before/::after` radial teal glows breathe (`cta-glow-pulse`).
- **Skew shimmers**: `.problem-card::after`, `.audience-card::after` sweep a light bar across on hover.
- **Case-study slides**: `cs-enter` / `--exit` translate-X transitions between cases.
- **Accessibility**: global `:focus-visible` = `2px solid --brand`; `prefers-reduced-motion` near-zeroes all animation/transition durations ([app/globals.css:1413-1416](app/globals.css#L1413-L1416)).

---

## 7. Responsive Breakpoints

| Width | Key changes |
|-------|-------------|
| ≤1024px | Process grid 5→3 |
| ≤960px | Footer 4→2 col; demo layout single column |
| ≤900px | Nav links → hamburger; feature/why/trust/pricing/faq → single column; problems 3→2 |
| ≤768px | Sections 88→56px; services/audience/stats → 1–2 col; many `clamp` headings shrink |
| ≤600px | Footer → single column; final CTA repadded |
| ≤480px | Container 16px; dedicated mobile-polish overrides for nearly every section's padding & type |

---

## 8. Agent Quick Reference

**Palette**
- Brand teal `#3BB8A8` · teal-light `#d1f0ec` · teal-deep `#14B8A6` (text util `#29877a`)
- Action orange `#F97316` · sweep-dark `#1a1a1a` · warn red-orange `#D94F3B`
- Text `#0d0d0d` / `#333` / `#666` / `#888` · surface `#fafafa` · bg `#fff`
- Borders `rgba(0,0,0,0.05 / 0.08 / 0.12)`

**Type**
- Headings → Clash Display 700, negative tracking
- Body/UI → DM Sans (400 body, 500–700 UI)
- Labels/numbers → Space Mono, UPPERCASE, tracked `0.6px`

**Defaults**
- Radius 8 (buttons) / 16 (cards) / 24 (feature) / pill (badges)
- Primary CTA = orange→`#1a1a1a` split-sweep; teal→`#0d0d0d` sweep for pricing/demo
- Teal = trust / "after" / success; Orange = action / "before" / problem
- Section padding 88px desktop, 48–56px mobile; container 1200px
- Hairline borders over shadows; colored glows only on hover

**Example prompt**
> "TrustSenders card: white bg, `1px solid rgba(0,0,0,0.05)`, 24px radius, 32px pad, `rgba(0,0,0,0.03) 0 2px 4px` shadow. Title Clash Display 18px/700 `-0.2px`, body DM Sans 15px `#666` line-height 1.65. Mono uppercase eyebrow `#888` Space Mono 12px tracked 0.65px. Teal `#3BB8A8` icon chip on `#d1f0ec`. Primary button: split gradient `to right, #F97316 50%, #1a1a1a 50%` at 200% width, white DM Sans 700, 8px radius, sweep position right→left on hover with orange glow."
