"use client"

import { useEffect } from "react"
import { useScreenSize } from "@/hooks/use-screen-size"
import { PixelTrail } from "@/components/ui/pixel-trail"
import { GooeyFilter } from "@/components/ui/gooey-filter"
import FaqSection from "@/components/faq-section"
import ServiceCards from "@/components/service-cards"
import CaseStudies from "@/components/case-studies"

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 10 10" fill="none" className="why-check-svg">
    <path className="why-check-path" d="M2 5l2.5 2.5L8 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function BelowHeroSection() {
  const screenSize = useScreenSize()

  useEffect(() => {
    const btns = document.querySelectorAll<HTMLElement>(".btn-primary")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in-view")
        })
      },
      { threshold: 0.5 }
    )
    btns.forEach((btn) => observer.observe(btn))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") return
    const isTouch = window.matchMedia?.("(hover: none) and (pointer: coarse)")?.matches
    if (!isTouch) return

    const ctas = Array.from(document.querySelectorAll<HTMLElement>(".btn.btn-primary"))

    if (ctas.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return
          e.target.classList.add("ts-sweep-once")
          observer.unobserve(e.target)
        })
      },
      { threshold: 0.35 }
    )

    ctas.forEach((cta) => observer.observe(cta))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const rows = document.querySelectorAll<HTMLElement>("[data-outcome-row]")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("outcome-row--visible")
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    rows.forEach((row) => observer.observe(row))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const wrap = document.querySelector<HTMLElement>("[data-tools-wrap]")
    if (!wrap) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          wrap.classList.add("tools-wrap--visible")
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(wrap)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const list = document.querySelector<HTMLElement>(".why-list")
    if (!list) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          list.classList.add("why-list--visible")
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(list)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const isTouch = window.matchMedia("(hover: none)").matches
    if (prefersReduced || isTouch) return

    const list = document.querySelector<HTMLElement>(".why-list")
    if (!list) return

    const handleMouseMove = (e: MouseEvent) => {
      const card = (e.target as HTMLElement).closest<HTMLElement>(".tilt-card")
      if (!card) return
      const rect = card.getBoundingClientRect()
      const nx = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2)
      const ny = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2)
      card.style.transition = "box-shadow 0.2s ease"
      card.style.transform = `perspective(800px) rotateY(${nx * 5}deg) rotateX(${-ny * 5}deg) scale(1.01)`
    }

    const handleMouseOut = (e: MouseEvent) => {
      const card = (e.target as HTMLElement).closest<HTMLElement>(".tilt-card")
      if (!card) return
      const rel = e.relatedTarget as HTMLElement | null
      if (rel && card.contains(rel)) return
      card.style.transition = "transform 0.15s ease, box-shadow 0.2s ease"
      card.style.transform = ""
    }

    list.addEventListener("mousemove", handleMouseMove)
    list.addEventListener("mouseout", handleMouseOut)

    return () => {
      list.removeEventListener("mousemove", handleMouseMove)
      list.removeEventListener("mouseout", handleMouseOut)
    }
  }, [])

  return (
    <div>
      {/* ── PIXEL TRAIL ZONE (trust → service cards) ─────── */}
      <div className="relative">
      <GooeyFilter id="gooey-filter-pixel-trail" strength={5} />
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ filter: "url(#gooey-filter-pixel-trail)" }}
      >
        <PixelTrail
          pixelSize={screenSize.lessThan("md") ? 28 : 37}
          fadeDuration={1200}
          delay={500}
          pixelClassName="bg-[#8ED8CE]/80 rounded-xl"
        />
      </div>

      {/* ── TRUST & POSITIONING ──────────────────────────── */}
      <section id="trust" aria-labelledby="trust-h" className="relative z-10">
        <div className="container">
          <div className="trust-layout">
            <div>
              <div className="section-tag">The Real Problem</div>
              <h2 className="trust-heading" id="trust-h">
                Deliverability is not just SPF, DKIM, and DMARC.
              </h2>
            </div>
            <div className="trust-body">
              <p>
                It is about <strong>reputation, sending behavior, infrastructure quality, mailbox provider trust</strong>, and the ability to scale without breaking what already works.
              </p>
              <p>Trust Senders helps businesses take control of that entire system.</p>
              <p>
                We work with companies that need more than basic mailbox setup. We help build, fix, recover, and support sending environments that are <strong>stable, scalable, and built for long-term performance</strong>.
              </p>
              <p>
                This is not &ldquo;buy inboxes and hope for the best.&rdquo; This is expert-led infrastructure, deliverability strategy, and ongoing operational support.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ── PROBLEMS WE SOLVE ────────────────────────────── */}
      <section id="problems" aria-labelledby="problems-h" className="relative z-10">
        <div className="container">
          <div className="section-tag">Common Issues</div>
          <h2 className="section-title" id="problems-h">Problems we fix.</h2>
          <p className="problems-intro">If any of these sound familiar, you are in the right place.</p>

          <div className="problems-mask">
          <div className="problems-grid">
            {[
              "Your emails land in spam even though the setup looks \u201ccorrect\u201d",
              "Your domain reputation drops as soon as volume increases",
              "Your outreach tools are running, but results are unstable",
              "You do not know which limits, delays, or sending patterns are safe",
              "Your team depends on generic mailbox setups that do not scale",
              "You have no clear visibility into domain or IP health",
              "You need private infrastructure but do not know how to design it",
              "Your sending worked before, and then suddenly performance collapsed",
              "You want to scale email, but not at the cost of reputation",
            ].map((problem) => (
              <div className="problem-card" key={problem}>
                <span className="problem-dash">✕</span>
                {problem}
              </div>
            ))}
          </div>
          </div>

          <div className="problems-cta">
            <a href="#final-cta" className="btn btn-primary btn-lg">
              Get a Free Deliverability Check
            </a>
          </div>
        </div>
      </section>

      </div>{/* end pixel trail zone */}

      {/* ── NO PIXEL TRAIL BELOW ─────────────────────────── */}

      {/* ── FLEXIBLE APPROACH ────────────────────────────── */}
      <section id="services" aria-labelledby="flexible-h" className="relative z-10">
        <div className="container">
          <div className="section-tag">What We Do</div>
          <h2 className="section-title" id="flexible-h">Flexible Approach.</h2>
          <p className="section-sub">We work based on client situation, not generic approach.</p>
        </div>
      </section>

      <ServiceCards />

      {/* ── WHY TRUST SENDERS ────────────────────────────── */}
      <section id="why" aria-labelledby="why-h" className="relative z-10">
        <div className="container">
          <div className="section-tag">Why Us</div>
          <h2 className="section-title" id="why-h" style={{ maxWidth: 580 }}>
            Why teams trust us with deliverability.
          </h2>

          <div className="why-layout">
            <div className="why-text">
              <p>
                Thousands of client cases have shown the same thing: most email problems are not random. They come from weak infrastructure, unstable sending patterns, poor domain strategy, bad tool configuration, or a lack of visibility into what mailbox providers are actually seeing.
              </p>
              <p>
                Trust Senders brings together technical expertise, real operational experience, and practical strategy to fix those problems properly.
              </p>
            </div>
            <div>
              <div className="section-tag" style={{ marginBottom: 18 }}>What makes our approach different</div>
              <ul className="why-list">
                {[
                  "Experience across B2B cold outreach, B2C email, and warm audience campaigns",
                  "Deep knowledge of Google Workspace, Microsoft 365, SMTP platforms, and private infrastructure",
                  "Custom setups built around your business — not generic mailbox bundles",
                  "Fast diagnosis of spam and inbox placement issues",
                  "Practical guidance on tools, sending limits, delays, warm-up, and scaling",
                  "Strategic and technical support in one place",
                ].map((item) => (
                  <li key={item}>
                    <div className="card-inner tilt-card">
                      <span className="why-check"><CheckIcon /></span>
                      {item}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── TOOLS ────────────────────────────────────────── */}
      <section id="tools" aria-labelledby="tools-h" className="relative z-10">
        <div className="container">
          <div className="section-tag">Compatibility</div>
          <h2 className="section-title" id="tools-h" style={{ maxWidth: 560 }}>
            We work with the tools you already use.
          </h2>
          <p className="tools-sub">Configured, optimized, and monitored — not just compatible.</p>

          <div className="tools-wrap" data-tools-wrap>
            {[
              { name: "Google Workspace", color: "#4285f4" },
              { name: "Microsoft 365",   color: "#0078d4" },
              { name: "AWS SES",         color: "#ff9900" },
              { name: "SendGrid",        color: "#1a82e2" },
              { name: "Mailgun",         color: "#f02347" },
              { name: "Private Mail Servers", color: "#555" },
              { name: "Instantly",       color: "#3BB8A8" },
              { name: "Smartlead",       color: "#7c3aed" },
              { name: "Reply.io",        color: "#0052ef" },
              { name: "Apollo.io",       color: "#f97316" },
              { name: "Outreach.io",     color: "#5c4ee5" },
              { name: "SalesLoft",       color: "#00b4d8" },
              { name: "Lemlist",         color: "#ff6b35" },
              { name: "Snov.io",         color: "#00c07f" },
              { name: "PlusVibe",        color: "#ef4444" },
              { name: "AI SDRs",         color: "#888"    },
              { name: "Custom SMTP",     color: "#888"    },
              { name: "Custom Automation", color: "#aaa"  },
              { name: "CRM Workflows",   color: "#aaa"    },
            ].map(({ name, color }, i) => (
              <div className="tool-chip" key={name} style={{ "--i": i, "--dot-color": color } as React.CSSProperties}>
                <span className="tool-dot" style={{ background: color }} />
                {name}
              </div>
            ))}
          </div>

          <div className="tools-note">
            <span>If your setup involves multiple tools, custom routing, or mixed infrastructure, we can help make it work properly.</span>
            <a href="#final-cta" className="btn btn-ghost btn-sm">Discuss Your Setup →</a>
          </div>
        </div>
      </section>

      {/* ── WHO WE WORK WITH ─────────────────────────────── */}
      <section id="audience" aria-labelledby="audience-h" className="relative z-10">
        <div className="container">
          <div className="section-tag">Who We Help</div>
          <h2 className="section-title" id="audience-h" style={{ maxWidth: 560 }}>
            Built for teams that take email seriously.
          </h2>

          <div className="audience-grid">
            <div className="audience-card" style={{ "--aud-color": "59,184,168", "--aud-hex": "#29877a" } as React.CSSProperties}>
              <div className="aud-hdr">
                <h3>Outbound Sales Teams</h3>
                <div className="aud-tag">Segment 01</div>
              </div>
              <p>Scale cold outreach safely, protect domain reputation, and build infrastructure that keeps up with your pipeline targets — without landing in spam.</p>
            </div>
            <div className="audience-card" style={{ "--aud-color": "29,78,216", "--aud-hex": "#1d4ed8" } as React.CSSProperties}>
              <div className="aud-hdr">
                <h3>B2C Marketing Teams</h3>
                <div className="aud-tag">Segment 02</div>
              </div>
              <p>Improve inbox placement for newsletters, transactional emails, and promotional campaigns across large subscriber bases where every percent of deliverability matters.</p>
            </div>
            <div className="audience-card" style={{ "--aud-color": "99,102,241", "--aud-hex": "#4f46e5" } as React.CSSProperties}>
              <div className="aud-hdr">
                <h3>Agencies &amp; Consultancies</h3>
                <div className="aud-tag">Segment 03</div>
              </div>
              <p>Manage deliverability across multiple client accounts with expert support, multi-domain strategy, and infrastructure that properly separates risk between clients.</p>
            </div>
            <div className="audience-card" style={{ "--aud-color": "255,80,0", "--aud-hex": "#e05000" } as React.CSSProperties}>
              <div className="aud-hdr">
                <h3>Enterprise &amp; IT Teams</h3>
                <div className="aud-tag">Segment 04</div>
              </div>
              <p>Build compliant, private sending environments with dedicated IPs, custom SMTP architecture, full infrastructure control, and the visibility your compliance team requires.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOUNDER ──────────────────────────────────────── */}
      <section id="founder" aria-labelledby="founder-h" className="relative z-10">
        <div className="container">
          <div className="section-tag">The Operator Behind the Work</div>
          <h2
            className="section-title"
            id="founder-h"
            style={{ maxWidth: 580, fontSize: "clamp(22px, 2.8vw, 34px)" }}
          >
            Built by a deliverability operator, not just a marketer.
          </h2>

          <div className="founder-layout">
            <div className="founder-photo">
              <img src="/logos/alex.jpg" alt="Alex — Founder" />
            </div>
            <div>
              <div className="founder-name">Alex Grabovskyi</div>
              <div className="founder-role">Email Deliverability Consultant &amp; Infrastructure Architect</div>
              <p className="founder-bio">
                Alex Hrabovskyi is an email deliverability expert and infrastructure architect who has reduced spam placement from 70% to 3% across 500+ organizations and managed deliverability operations for 200 B2B clients across the US and Europe.
              </p>
              <p className="founder-bio">
                Through Trust Senders, Alex helps businesses fix deliverability issues and scale email safely, covering Google Workspace, Microsoft 365, SMTP, DNS authentication, dedicated IPs, and private sending infrastructure.
              </p>
              <div className="founder-quote">
                <em>&ldquo;This is not generic email advice.&rdquo;</em>
                <br />
                This is practical deliverability strategy built on real-world experience. Trust Senders brings that perspective into every engagement.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────── */}
      <section id="process" aria-labelledby="process-h" className="relative z-10">
        <div className="container">
          <div className="section-tag">How We Work</div>
          <h2 className="section-title" id="process-h" style={{ maxWidth: 500 }}>
            A structured approach to every engagement.
          </h2>

          <div className="process-grid">
            {[
              {
                num: "Step 01", title: "Review",
                body: "We assess your current setup, identify risk areas, and understand your sending goals before recommending changes.",
                bg: "rgba(185,28,28,0.04)",
                glow: "rgba(185,28,28,0.08)",
                border: "rgba(185,28,28,0.1)",
                numColor: "#c45050",
              },
              {
                num: "Step 02", title: "Diagnose",
                body: "We look at infrastructure, reputation, authentication, sending patterns, and workflow logic to find the real bottlenecks.",
                bg: "rgba(234,88,12,0.04)",
                glow: "rgba(234,88,12,0.09)",
                border: "rgba(234,88,12,0.12)",
                numColor: "#c4681a",
              },
              {
                num: "Step 03", title: "Build or Fix",
                body: "Depending on your case, we either improve the current setup or design a better one from the ground up.",
                bg: "rgba(234,179,8,0.05)",
                glow: "rgba(234,179,8,0.11)",
                border: "rgba(234,179,8,0.15)",
                numColor: "#b89a20",
              },
              {
                num: "Step 04", title: "Stabilize",
                body: "We define safe sending behavior, warm-up logic, volume control, and operational best practices.",
                bg: "rgba(29,78,216,0.04)",
                glow: "rgba(29,78,216,0.08)",
                border: "rgba(29,78,216,0.1)",
                numColor: "#4a6bb5",
              },
              {
                num: "Step 05", title: "Support",
                body: "If needed, we stay involved through ongoing monitoring, troubleshooting, and monthly support as you grow.",
                bg: "rgba(21,128,61,0.04)",
                glow: "rgba(21,128,61,0.08)",
                border: "rgba(21,128,61,0.1)",
                numColor: "#3a8f5e",
              },
            ].map(({ num, title, body, bg, glow, border, numColor }) => (
              <div
                className="step-card"
                key={num}
                style={{ background: bg, borderColor: border, ["--step-glow" as string]: glow }}
              >
                <div className="step-num" style={{ color: numColor }}>{num}</div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>

          <div className="process-cta">
            <a href="#final-cta" className="btn btn-primary btn-lg">Start With a Free Review</a>
          </div>
        </div>
      </section>

      {/* ── RESULTS ──────────────────────────────────────── */}
      <section id="results" aria-labelledby="results-h" className="relative z-10">
        <div className="container">
          <div className="section-tag">Client Outcomes</div>
          <h2 className="section-title" id="results-h" style={{ maxWidth: 500 }}>
            Results our clients see.
          </h2>

          <div className="outcomes-list">
            {[
              {
                before: "Emails landing in spam with no clear path to recovery",
                after:  "Primary inbox in as little as 48 hours for B2B domain reputation issues",
              },
              {
                before: "Capped at 200 emails/day, afraid to increase volume",
                after:  "5,000+ emails/day with stable reputation and consistent inbox placement",
              },
              {
                before: "Single domain, shared IP, no separation of risk",
                after:  "Multi-domain cold outreach infrastructure supporting 6-figure monthly send volume",
              },
              {
                before: "Weeks of back-and-forth setting up DNS and authentication",
                after:  "Full authentication and DNS setup completed in under 24 hours",
              },
              {
                before: "Finding out about reputation drops after deliverability already tanked",
                after:  "Ongoing monitoring that catches reputation drops before they impact performance",
              },
              {
                before: "Advice from vendors who only understand tools, not operations",
                after:  "A deliverability partner who understands both strategy and operations",
              },
            ].map(({ before, after }, i) => (
              <div
                className="outcome-row"
                key={i}
                style={{ transitionDelay: `${i * 80}ms` }}
                data-outcome-row
              >
                <div className="outcome-side">
                  <span className="outcome-label outcome-label--before">Before</span>
                  <p className="outcome-text">{before}</p>
                </div>
                <div className="outcome-arrow" aria-hidden="true">→</div>
                <div className="outcome-side">
                  <span className="outcome-label outcome-label--after">After</span>
                  <p className="outcome-text">{after}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ─────────────────────────────────── */}
      <CaseStudies />

      {/* ── PRICING ──────────────────────────────────────── */}
      <section id="pricing" aria-labelledby="pricing-h" className="relative z-10">
        <div className="container">
          <div className="section-tag">Engagement Options</div>
          <h2 className="section-title" id="pricing-h">Find the right engagement.</h2>
          <p className="pricing-intro">Enough information to self-qualify. Exact scope discussed during your free review.</p>

          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="p-type">One-Time</div>
              <div className="p-name">Consulting</div>
              <div className="p-price-block">
                <div className="p-price">Starting from $[X]</div>
                <div className="p-price-note">Per engagement, scoped to your audit needs</div>
              </div>
              <p className="p-desc">Deliverability audits, inbox placement analysis, and infrastructure recommendations. Ideal for teams that need a clear diagnosis and action plan.</p>
              <div className="p-action"><a href="#final-cta">Book a Consultation</a></div>
            </div>

            <div className="pricing-card featured">
              <div className="p-type">Infrastructure Build</div>
              <div className="p-name">Private Infrastructure</div>
              <div className="p-price-block">
                <div className="p-price">Custom pricing based on scope</div>
                <div className="p-price-note">Volume, domains, IP requirements, and use case</div>
              </div>
              <p className="p-desc">Custom sending architecture with dedicated IPs, SMTP configuration, DNS setup, warm-up planning, and deployment. Scoped to your volume and use case.</p>
              <div className="p-action"><a href="#final-cta">Request an Architecture Review</a></div>
            </div>

            <div className="pricing-card">
              <div className="p-type">Ongoing</div>
              <div className="p-name">Monthly Support</div>
              <div className="p-price-block">
                <div className="p-price">From $[X] / month</div>
                <div className="p-price-note">Your external deliverability team</div>
              </div>
              <p className="p-desc">Ongoing deliverability monitoring, troubleshooting, strategy adjustments, and infrastructure support. Scales with your operation.</p>
              <div className="p-action"><a href="#final-cta">Get Monthly Support</a></div>
            </div>
          </div>

          <p className="pricing-footer">
            Not sure which option fits?{" "}
            <a href="#final-cta">Start with a free deliverability review →</a>
          </p>
        </div>
      </section>

      {/* ── LEAD MAGNET ──────────────────────────────────── */}
      <section id="lead-magnet" aria-label="Free resource" className="relative z-10">
        <div className="container">
          <div className="lead-inner">
            <div className="lead-text">
              <div className="lead-badge">Free Resource</div>
              <h3>The Email Deliverability Checklist</h3>
              <p>12 things to verify before you scale — find out if your setup is at risk.</p>
            </div>
            <div className="lead-actions">
              <a href="#final-cta" className="btn btn-primary">Download Free Checklist</a>
              <a href="#final-cta" className="btn btn-ghost btn-sm">5-Minute Inbox Self-Audit →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <div className="relative z-10">
        <FaqSection />
      </div>

      {/* ── FINAL CTA ────────────────────────────────────── */}
      <section id="final-cta" aria-labelledby="cta-h" className="relative z-10">
        <div className="container">
          <div className="cta-box">
          <div className="cta-inner">
            <div className="cta-tag">Ready to fix deliverability?</div>
            <h2 className="cta-h2" id="cta-h">Build a better sending setup.</h2>
            <p className="cta-sub">
              Whether you need a deliverability audit, private infrastructure, spam recovery, or ongoing support — Trust Senders can help you build a more stable and scalable sending system.
            </p>
            <div className="cta-btns">
              <a href="/demo" className="btn btn-primary btn-lg">
                Book a Free Deliverability Review
              </a>
              <a href="#service-cards" className="btn btn-ghost btn-lg">
                Request an Architecture Review
              </a>
            </div>
            <div className="cta-slogan">
              <span className="accent">We Deliver.</span>&nbsp;&nbsp;You Grow.
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────── */}
      <footer id="footer" role="contentinfo" className="relative z-10">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="logo">Trust<span className="accent">Senders</span></div>
              <p className="footer-tagline">
                Expert email deliverability consulting and infrastructure. We deliver. You grow.
              </p>
              <a href="/demo" className="btn btn-primary btn-sm">Book a Free Review</a>
            </div>

            <div className="footer-col">
              <h4>Services</h4>
              <ul className="footer-links">
                <li><a href="#services">Deliverability Consulting</a></li>
                <li><a href="#service-cards">Private Infrastructure</a></li>
                <li><a href="#pricing">Monthly Support</a></li>
                <li><a href="#services">Spam Recovery</a></li>
                <li><a href="#pricing">View Pricing</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Company</h4>
              <ul className="footer-links">
                <li><a href="#founder">About</a></li>
                <li><a href="#why">Our Approach</a></li>
                <li><a href="#results">Results</a></li>
                <li><a href="#audience">Who We Help</a></li>
                <li><a href="#process">How We Work</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Resources</h4>
              <ul className="footer-links">
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#lead-magnet">Deliverability Checklist</a></li>
                <li><a href="#tools">Platform Compatibility</a></li>
                <li><a href="#final-cta">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2026 Trust Senders. All rights reserved.</span>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms</a>
              <a href="mailto:hello@trustsenders.com">hello@trustsenders.com</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
