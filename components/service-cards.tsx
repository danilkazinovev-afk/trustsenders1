"use client"

import { useState } from "react"
import { useScreenSize } from "@/hooks/use-screen-size"

const CARDS = [
  {
    label: "CONSULTING",
    title: "Deliverability consulting that goes beyond generic advice.",
    preview: "Many teams do not need more dashboards. They need clear answers.",
    cta: { label: "Book a Consultation", href: "#final-cta" },
    glow: {
      boxShadow: "0 0 32px rgba(139, 92, 246, 0.22)",
      borderColor: "rgba(139, 92, 246, 0.35)",
    },
    bgActive: "rgba(139, 92, 246, 0.05)",
    items: [
      "Deliverability audits",
      "Inbox placement analysis",
      "Domain and IP reputation review",
      "SPF, DKIM, DMARC, and DNS diagnostics",
      "Cold outreach architecture recommendations",
      "Google Workspace and Microsoft 365 review",
      "Tool and workflow recommendations",
      "Limits, delays, ramp-up, and sending strategy",
    ],
  },
  {
    label: "PRIVATE INFRASTRUCTURE",
    title: "Private infrastructure built for real email operations.",
    preview: "Not every business should rely on the same standard setup.",
    cta: { label: "Request an Architecture Review", href: "#final-cta" },
    glow: {
      boxShadow: "0 0 32px rgba(59, 184, 168, 0.25)",
      borderColor: "rgba(59, 184, 168, 0.4)",
    },
    bgActive: "rgba(59, 184, 168, 0.06)",
    items: [
      "Private sending environments",
      "Dedicated IP infrastructure",
      "Custom SMTP architecture",
      "Domain and IP reputation strategy",
      "DNS and authentication setup",
      "Warm-up and ramp-up planning",
      "Routing and sending logic",
      "Safe volume scaling",
      "Infrastructure built around your actual use case",
    ],
  },
  {
    label: "MONTHLY SUPPORT",
    title: "Ongoing support for teams that need more than a one-time fix.",
    preview: "Deliverability is not something you set once and forget.",
    cta: { label: "Get Monthly Support", href: "#pricing" },
    glow: {
      boxShadow: "0 0 32px rgba(6, 182, 212, 0.22)",
      borderColor: "rgba(6, 182, 212, 0.35)",
    },
    bgActive: "rgba(6, 182, 212, 0.05)",
    items: [
      "Deliverability troubleshooting",
      "Domain and IP health monitoring",
      "Sending strategy adjustments",
      "Warm-up and ramp-up guidance",
      "Blacklist and reputation response",
      "Tool configuration support",
      "DNS and authentication review",
      "Ongoing strategic recommendations",
    ],
  },
]

export default function ServiceCards() {
  const [active, setActive] = useState<number | null>(null)
  const screenSize = useScreenSize()
  const isMobile = screenSize.lessThan("md")

  const toggle = (i: number) => setActive((prev) => (prev === i ? null : i))

  return (
    <section id="service-cards" aria-labelledby="svc-cards-h" className="svc-cards-sec relative z-10">
      <div className="container">
        <h2 className="sr-only" id="svc-cards-h">Our Services</h2>

        <div className="svc-cards-grid">
          {CARDS.map((card, i) => {
            const isActive = active === i
            const isDimmed = active !== null && !isActive
            let cls = "svc-card"
            if (isActive) cls += " svc-card--active"
            if (isDimmed) cls += " svc-card--dimmed"

            return (
              <div
                key={card.label}
                role="button"
                tabIndex={0}
                aria-expanded={isActive}
                className={cls}
                style={{
                  ["--svc-color" as string]: card.glow.borderColor,
                  ...(isActive ? { ...card.glow, background: card.bgActive } : undefined),
                } as React.CSSProperties}
                {...(!isMobile
                  ? {
                      onMouseEnter: () => setActive(i),
                      onMouseLeave: () => setActive(null),
                    }
                  : {
                      onClick: () => toggle(i),
                    })}
                onFocus={() => setActive(i)}
                onBlur={() => setActive(null)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault()
                    toggle(i)
                  }
                }}
              >
                <div className="svc-card-num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</div>
                <div className="svc-card-label">{card.label}</div>
                <h3 className="svc-card-title">{card.title}</h3>
                <p className="svc-card-preview">{card.preview}</p>

                <div className="svc-card-body">
                  <ul className="svc-card-list" aria-hidden={!isActive}>
                    {card.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <a
                    href={card.cta.href}
                    className="svc-card-cta"
                    tabIndex={isActive ? 0 : -1}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {card.cta.label}
                  </a>
                </div>

                <div className="svc-card-hint" aria-hidden="true">
                  Learn more →
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
