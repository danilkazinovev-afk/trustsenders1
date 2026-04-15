"use client"

import { useState, FormEvent } from "react"

const BUSINESS_TYPES = [
  "B2B Cold Outreach Team",
  "B2C Marketing Team",
  "Agency or Consultancy",
  "Enterprise / IT Team",
  "SaaS / Product Company",
  "Other",
]

const VOLUMES = [
  "Under 10K / month",
  "10K – 100K / month",
  "100K – 500K / month",
  "500K+ / month",
  "Not sure yet",
]

const EmailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect x="1.5" y="3.5" width="13" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M1.5 5.5l6.5 4.5 6.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 5v3.2l2.2 1.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const GlobeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M1.5 8h13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M8 1.5c-2 2-2.5 3.5-2.5 6.5s.5 4.5 2.5 6.5M8 1.5c2 2 2.5 3.5 2.5 6.5s-.5 4.5-2.5 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const ShieldIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M8 1.5L2.5 4v4.5C2.5 11.5 5 13.5 8 14.5c3-1 5.5-3 5.5-6V4L8 1.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M5.5 8l2 2 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const CheckCircleIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="14" r="13" stroke="currentColor" strokeWidth="2" />
    <path d="M8.5 14l4 4 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

function ContactCard({
  icon,
  title,
  value,
  note,
  valueHref,
}: {
  icon: React.ReactNode
  title: string
  value: string
  note: string
  valueHref?: string
}) {
  return (
    <div className="demo-contact-card">
      <div className="demo-contact-icon">{icon}</div>
      <div className="demo-contact-title">{title}</div>
      <div className="demo-contact-value">
        {valueHref ? <a href={valueHref}>{value}</a> : value}
      </div>
      <div className="demo-contact-note">{note}</div>
    </div>
  )
}

function SuccessState() {
  return (
    <div className="demo-success">
      <div className="demo-success-icon">
        <CheckCircleIcon />
      </div>
      <h2>We got it.</h2>
      <p>
        We'll be in touch within 24 hours to schedule your free deliverability
        review. Check your inbox — it'll come from{" "}
        <strong>hello@trustsenders.com</strong>.
      </p>
      <a href="/" className="btn btn-ghost btn-sm" style={{ marginTop: 8 }}>
        ← Back to Trust Senders
      </a>
    </div>
  )
}

export default function DemoForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 900))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <div className="demo-layout">

      {/* ── Left: Form ──────────────────────────────────── */}
      <div className="demo-form-col">
        <div className="demo-card">
          {submitted ? (
            <SuccessState />
          ) : (
            <>
              <div className="section-tag">Free Consultation</div>
              <h1 className="demo-heading">
                Book Your Free<br />Deliverability Review
              </h1>
              <p className="demo-sub">
                Tell us about your sending setup. We'll identify the real issues
                and show you exactly what needs to be fixed — no commitment
                required.
              </p>

              <form className="demo-form" onSubmit={handleSubmit} noValidate>
                <div className="demo-row">
                  <div className="demo-field">
                    <label htmlFor="name">Full Name</label>
                    <input
                      id="name" name="name" type="text"
                      className="demo-input"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="demo-field">
                    <label htmlFor="email">Work Email</label>
                    <input
                      id="email" name="email" type="email"
                      className="demo-input"
                      placeholder="you@company.com"
                      required
                    />
                  </div>
                </div>

                <div className="demo-field">
                  <label htmlFor="company">
                    Company / Website
                    <span className="demo-opt">(optional)</span>
                  </label>
                  <input
                    id="company" name="company" type="text"
                    className="demo-input"
                    placeholder="yourcompany.com"
                  />
                </div>

                <div className="demo-row">
                  <div className="demo-field">
                    <label htmlFor="type">What best describes you?</label>
                    <select
                      id="type" name="type"
                      className="demo-select"
                      required
                      defaultValue=""
                    >
                      <option value="" disabled>Select your situation</option>
                      {BUSINESS_TYPES.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div className="demo-field">
                    <label htmlFor="volume">Monthly Send Volume</label>
                    <select
                      id="volume" name="volume"
                      className="demo-select"
                      required
                      defaultValue=""
                    >
                      <option value="" disabled>Select volume</option>
                      {VOLUMES.map((v) => (
                        <option key={v} value={v}>{v}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="demo-field">
                  <label htmlFor="message">
                    What's your main deliverability issue?
                    <span className="demo-opt">(optional)</span>
                  </label>
                  <textarea
                    id="message" name="message"
                    className="demo-textarea"
                    placeholder="e.g. Emails landing in spam, domain reputation dropping after scaling, need private infrastructure for cold outreach…"
                  />
                </div>

                <div className="demo-submit-wrap">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    disabled={loading}
                    style={{ justifyContent: "center", width: "100%", opacity: loading ? 0.7 : 1 }}
                  >
                    {loading ? "Sending…" : "Book My Free Review"}
                  </button>
                  <p className="demo-disclaimer">
                    No commitment required. We'll respond within 24 hours.
                  </p>
                </div>
              </form>
            </>
          )}
        </div>
      </div>

      {/* ── Right: Info ─────────────────────────────────── */}
      <div className="demo-info-col">
        <div className="section-tag">Other Ways to Reach Us</div>
        <h2 className="demo-info-heading">Prefer to talk directly?</h2>
        <p className="demo-info-sub">
          We're here however works best for you. No automated responses — real
          answers from the team behind the work.
        </p>

        <div className="demo-contact-grid">
          <ContactCard
            icon={<EmailIcon />}
            title="Email"
            value="hello@trustsenders.com"
            note="We respond within 24 hours"
            valueHref="mailto:hello@trustsenders.com"
          />
          <ContactCard
            icon={<ClockIcon />}
            title="Response Time"
            value="< 24 hours"
            note="Usually much faster"
          />
          <ContactCard
            icon={<GlobeIcon />}
            title="Coverage"
            value="Remote-first"
            note="Serving US & Europe"
          />
          <ContactCard
            icon={<ShieldIcon />}
            title="No Commitment"
            value="Free review"
            note="Honest advice, no pressure"
          />
        </div>

        <div className="demo-steps">
          <h3>What Happens Next?</h3>
          <div className="demo-steps-list">
            {[
              "We review your submission and current setup details",
              "We reach out within 24 hours to schedule a short call",
              "30-minute call to diagnose the real deliverability issue",
              "You get a clear, honest action plan — no fluff, no pressure",
            ].map((step, i) => (
              <div className="demo-step" key={i}>
                <div className="demo-step-num">{i + 1}</div>
                <p className="demo-step-text">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="demo-info-footer">
          Have questions? Check our{" "}
          <a href="/#faq">FAQ</a> or email us at{" "}
          <a href="mailto:hello@trustsenders.com">hello@trustsenders.com</a>
          {" "}— we're always happy to help.
        </p>
      </div>

    </div>
  )
}
