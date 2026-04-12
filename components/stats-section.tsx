"use client"

import { CountUp } from "@/components/count-up"

export default function StatsSection() {
  return (
    <section id="stats" aria-label="Key metrics">
      <div className="container">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-num">
              <CountUp to={1000} duration={2800} />
              <span className="accent">+</span>
            </div>
            <div className="stat-desc">Client Engagements</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">
              <CountUp to={48} duration={2200} />
              <span className="accent">hr</span>
            </div>
            <div className="stat-desc">Reputation Stabilized</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">
              <CountUp to={500} duration={3000} />
              <span className="accent">K+</span>
            </div>
            <div className="stat-desc">Emails / Month Supported</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">
              <CountUp to={15} duration={2000} />
              <span className="accent">+</span>
            </div>
            <div className="stat-desc">Industries Served</div>
          </div>
        </div>
      </div>
    </section>
  )
}
