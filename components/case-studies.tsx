"use client"

import { useState, useRef, useCallback } from "react"

interface Metric {
  label: string
  change: string
  from: string
  to?: string
}

interface CaseStudy {
  industry: string
  client: string
  title: string
  challenge: string
  solution: string
  timeline: string
  metrics: [Metric, Metric, Metric]
  selectorMetric: string
  selectorLabel: string
}

const CASES: CaseStudy[] = [
  {
    industry: "AI Platform",
    client: "TensorApp.ai",
    title: "AI Platform Achieves 99% Inbox Rate with Infrastructure Overhaul",
    challenge: "Complex AI platform needed reliable email infrastructure for user notifications and marketing",
    solution: "Complete email infrastructure deployment with advanced authentication and monitoring",
    timeline: "2 months",
    metrics: [
      { label: "Deliverability", change: "+34%", from: "65%", to: "99%" },
      { label: "Revenue Growth", change: "+300%", from: "$45K/mo", to: "$180K/mo" },
      { label: "Engagement", change: "+22.3%", from: "12.4%", to: "34.7%" },
    ],
    selectorMetric: "99%",
    selectorLabel: "Inbox rate",
  },
  {
    industry: "AI / Meetings",
    client: "Cogram",
    title: "AI Meeting Assistant Achieves Seamless Communication",
    challenge: "Meeting summaries and notifications frequently blocked or filtered by enterprise mail servers",
    solution: "B2B-focused email infrastructure with compliance-first approach and enhanced authentication",
    timeline: "5 weeks",
    metrics: [
      { label: "Deliverability", change: "+52%", from: "42%", to: "94%" },
      { label: "Revenue Growth", change: "+272%", from: "$18K/mo", to: "$67K/mo" },
      { label: "Engagement", change: "+20.5%", from: "18.7%", to: "39.2%" },
    ],
    selectorMetric: "+52%",
    selectorLabel: "Deliverability",
  },
  {
    industry: "VR / AR",
    client: "ServReality",
    title: "VR/AR Company Enables 120K+ Monthly Email Volume",
    challenge: "Existing infrastructure couldn't handle growing email volume needs, capping growth potential",
    solution: "Scalable email infrastructure setup with high-volume sending capabilities and dedicated routing",
    timeline: "3 months",
    metrics: [
      { label: "Volume Growth", change: "+2400%", from: "5K/mo", to: "120K+/mo" },
      { label: "Revenue Growth", change: "+280%", from: "$25K/mo", to: "$95K/mo" },
      { label: "Engagement", change: "+16.5%", from: "15.3%", to: "31.8%" },
    ],
    selectorMetric: "+2400%",
    selectorLabel: "Volume growth",
  },
  {
    industry: "macOS Software",
    client: "MacPaw",
    title: "MacOS Software Giant Optimizes User Communication at Scale",
    challenge: "Large user base receiving inconsistent email delivery for product updates and notifications",
    solution: "Enterprise-grade infrastructure with automated reputation monitoring and region-aware routing",
    timeline: "4 months",
    metrics: [
      { label: "Deliverability", change: "+18%", from: "78%", to: "96%" },
      { label: "User Retention", change: "+35%", from: "Satisfaction score" },
      { label: "Engagement", change: "+19.2%", from: "22.1%", to: "41.3%" },
    ],
    selectorMetric: "+35%",
    selectorLabel: "Retention",
  },
  {
    industry: "Software / Global",
    client: "CleanMyMac",
    title: "Mac Cleaning Software Scales Global Email Operations",
    challenge: "International user base experiencing poor email delivery across regions and ISPs",
    solution: "Global infrastructure deployment with region-specific optimization and localized sending paths",
    timeline: "8 weeks",
    metrics: [
      { label: "Deliverability", change: "+24%", from: "69%", to: "93%" },
      { label: "Global Reach", change: "+60%", from: "Satisfaction score" },
      { label: "Engagement", change: "+16.6%", from: "16.8%", to: "33.4%" },
    ],
    selectorMetric: "+24%",
    selectorLabel: "Global reach",
  },
  {
    industry: "3D Visualization",
    client: "CGI Kite",
    title: "3D Visualization Studio Scales Client Outreach by 400%",
    challenge: "Studio needed reliable email infrastructure to reach architects and real estate clients with portfolio work",
    solution: "Professional email setup with portfolio delivery system and optimized client communication workflows",
    timeline: "4 weeks",
    metrics: [
      { label: "Deliverability", change: "+47%", from: "45%", to: "92%" },
      { label: "Revenue Growth", change: "+300%", from: "8 proj/mo", to: "32 proj/mo" },
      { label: "Engagement", change: "+18.6%", from: "11.2%", to: "29.8%" },
    ],
    selectorMetric: "+300%",
    selectorLabel: "Revenue growth",
  },
]

export default function CaseStudies() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [contentClass, setContentClass] = useState("")
  const animating = useRef(false)
  const activeIdxRef = useRef(0)
  const touchStartX = useRef(0)
  const selRefs = useRef<(HTMLButtonElement | null)[]>([])

  const go = useCallback((newIdx: number) => {
    if (animating.current || newIdx === activeIdxRef.current) return
    animating.current = true
    setContentClass("cs-content--exit")
    setTimeout(() => {
      activeIdxRef.current = newIdx
      setActiveIdx(newIdx)
      setContentClass("cs-content--enter")
      setTimeout(() => {
        setContentClass("")
        animating.current = false
      }, 500)
    }, 280)
  }, [])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(dx) > 50) {
      const n = CASES.length
      go(dx < 0
        ? (activeIdxRef.current + 1) % n
        : (activeIdxRef.current - 1 + n) % n)
    }
  }

  const handleSelectorKey = (e: React.KeyboardEvent, selIdx: number) => {
    const n = selectorCases.length
    if (e.key === "ArrowRight") {
      e.preventDefault()
      selRefs.current[(selIdx + 1) % n]?.focus()
    } else if (e.key === "ArrowLeft") {
      e.preventDefault()
      selRefs.current[(selIdx - 1 + n) % n]?.focus()
    }
  }

  const cs = CASES[activeIdx]
  const selectorCases = CASES
    .map((c, i) => ({ ...c, origIdx: i }))
    .filter((_, i) => i !== activeIdx)

  return (
    <section id="case-studies" aria-labelledby="cs-h" className="relative z-10">
      <div className="container cs-container">
        <div className="section-tag">Case Studies</div>
        <h2 className="section-title" id="cs-h">What we&rsquo;ve delivered.</h2>

        {/* ── Hero card ──────────────────────────────── */}
        <div
          className="cs-hero-card"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className={`cs-content${contentClass ? ` ${contentClass}` : ""}`}>

            {/* Top bar */}
            <div className="cs-top">
              <div className="cs-industry">{cs.industry}</div>
              <div className="cs-client-meta">
                <span className="cs-client-name">{cs.client}</span>
                <a href="#final-cta" className="cs-visit">Visit Website</a>
              </div>
            </div>

            {/* Title */}
            <h3 className="cs-title">{cs.title}</h3>

            {/* Challenge + Solution */}
            <div className="cs-body">
              <div className="cs-field">
                <span className="cs-field-label cs-field-label--challenge">Challenge</span>
                <p className="cs-field-text">{cs.challenge}</p>
              </div>
              <div className="cs-field">
                <span className="cs-field-label cs-field-label--solution">Solution</span>
                <p className="cs-field-text">{cs.solution}</p>
              </div>
            </div>

            {/* Footer: timeline left, metrics right */}
            <div className="cs-footer">
              <div className="cs-timeline">Timeline:&nbsp;&nbsp;{cs.timeline}</div>
              <div className="cs-metrics">
                {cs.metrics.map((m) => (
                  <div className="cs-metric" key={m.label}>
                    <div className="cs-metric-change">{m.change}</div>
                    <div className="cs-metric-label">{m.label}</div>
                    <div className="cs-metric-range">
                      {m.to ? `${m.from} → ${m.to}` : m.from}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ── Selector row ───────────────────────────── */}
        <div className="cs-selector" role="group" aria-label="Select case study">
          {selectorCases.map(({ origIdx, client, selectorMetric, selectorLabel }, selIdx) => (
            <button
              key={client}
              ref={(el) => { selRefs.current[selIdx] = el }}
              className="cs-sel"
              onClick={() => go(origIdx)}
              onKeyDown={(e) => handleSelectorKey(e, selIdx)}
              aria-label={`View ${client} case study`}
            >
              <div className="cs-sel-num">{selectorMetric}</div>
              <div className="cs-sel-client">{client}</div>
              <div className="cs-sel-label">{selectorLabel}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
