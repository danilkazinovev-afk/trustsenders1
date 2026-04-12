import Nav from "@/components/nav";
import StatsSection from "@/components/stats-section";
import BelowHeroSection from "@/components/below-hero-section";
import ScrollProgress from "@/components/scroll-progress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section id="hero" aria-labelledby="hero-h1">
        <div className="aurora-1" aria-hidden="true" />
        <div className="aurora-2" aria-hidden="true" />
        <div className="container">
          <div className="hero-inner">
            <h1 className="hero-h1" id="hero-h1">
              <span className="hero-h1-line1">Deliverability &amp; <span className="hero-h1-accent">beyond</span></span><br />
              <span className="hero-h1-line2">We deliver, you <span className="hero-h1-accent">grow</span></span>
            </h1>

            <p className="hero-sub">
              Trust Senders is a premium email infrastructure provider, consulting, and white-glove support for teams that send at scale.
            </p>

            <div className="hero-ctas">
              <a href="#final-cta" className="btn btn-primary btn-lg">Book a Free Deliverability Review</a>
              <a href="#consulting" className="btn btn-ghost btn-lg">Discuss Your Setup</a>
            </div>

            <p className="hero-proof">
              Trusted across 1,000+ engagements — B2B cold outreach &amp; B2C warm audience campaigns
            </p>
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────── */}
      <StatsSection />

      {/* ── CLIENTS TICKER ───────────────────────────────── */}
      <section id="clients" aria-label="Trusted by">
        <div className="ticker-label">Trusted by</div>
        <div className="ticker-wrap">
          <div className="ticker-track">
            <div className="ticker-set">
              <img src="/logos/6937eea1bed9853c18f0970c_newscatcherlogo.svg" alt="NewsCatcher" />
              <img src="/logos/Vector-1-removebg-pr.png" alt="Client logo" />
              <img src="/logos/cleanmymac-x4x.png" alt="CleanMyMac" />
              <img src="/logos/logo.svg" alt="Client logo" />
              <img src="/logos/macpaw-logo-png_seeklogo-451807.png" alt="MacPaw" className="ticker-logo-lg" />
            </div>
            <div className="ticker-set" aria-hidden="true">
              <img src="/logos/6937eea1bed9853c18f0970c_newscatcherlogo.svg" alt="" />
              <img src="/logos/Vector-1-removebg-pr.png" alt="" />
              <img src="/logos/cleanmymac-x4x.png" alt="" />
              <img src="/logos/logo.svg" alt="" />
              <img src="/logos/macpaw-logo-png_seeklogo-451807.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* ── EVERYTHING FROM "THE REAL PROBLEM" DOWN ──────── */}
      <BelowHeroSection />
    </>
  );
}
