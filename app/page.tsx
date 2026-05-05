import Nav from "@/components/nav";
import StatsSection from "@/components/stats-section";
import BelowHeroSection from "@/components/below-hero-section";
import ScrollProgress from "@/components/scroll-progress";
import { TextScramble } from "@/components/ui/text-scramble";

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
              <span className="hero-h1-line1">
                Deliverability &amp;{" "}
                <TextScramble
                  text="beyond"
                  className="hero-h1-accent"
                  autoStart
                  inheritTypography
                  showUnderline={false}
                  showGlow={false}
                />
              </span>
              <br />
              <span className="hero-h1-line2">We deliver. <span className="hero-h1-accent">You grow</span></span>
            </h1>

            <p className="hero-sub">
              Premium email infrastructure provider, consulting, and white-glove support for teams that send at scale.
            </p>

            <div className="hero-ctas">
              <a href="/demo" className="btn btn-primary btn-lg">Book a Free Deliverability Review</a>
            </div>

            <p className="hero-proof">
              Trusted across 1,000+ engagements - B2B cold outreach &amp; B2C warm audience campaigns
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
              <img src="/logos/cgikite.svg"           alt="CGI Kite" />
              <img src="/logos/codeit.svg"            alt="Codeit" />
              <img src="/logos/cogram.svg"            alt="Cogram" />
              <img src="/logos/keralds.svg"           alt="Keralds" />
              <img src="/logos/macpaw.svg"            alt="MacPaw" />
              <img src="/logos/newscatcherapi.svg"    alt="NewsCatcher API" />
              <img src="/logos/nsbm.svg"              alt="NSBM" />
              <img src="/logos/otherland.svg"         alt="Otherland" />
              <img src="/logos/pitchmonster.svg"      alt="PitchMonster" />
              <img src="/logos/springbolt-group.svg"  alt="Springbolt Group" />
              <img src="/logos/stackbooster.svg"      alt="StackBooster" />
              <img src="/logos/temy.svg"              alt="Temy" />
              <img src="/logos/vagivital.svg"         alt="Vagivital" />
              <img src="/logos/wiseboard.svg"         alt="Wiseboard" />
              <img src="/logos/cleanmymac.svg"        alt="CleanMyMac" />
            </div>
            <div className="ticker-set" aria-hidden="true">
              <img src="/logos/cgikite.svg"           alt="" />
              <img src="/logos/codeit.svg"            alt="" />
              <img src="/logos/cogram.svg"            alt="" />
              <img src="/logos/keralds.svg"           alt="" />
              <img src="/logos/macpaw.svg"            alt="" />
              <img src="/logos/newscatcherapi.svg"    alt="" />
              <img src="/logos/nsbm.svg"              alt="" />
              <img src="/logos/otherland.svg"         alt="" />
              <img src="/logos/pitchmonster.svg"      alt="" />
              <img src="/logos/springbolt-group.svg"  alt="" />
              <img src="/logos/stackbooster.svg"      alt="" />
              <img src="/logos/temy.svg"              alt="" />
              <img src="/logos/vagivital.svg"         alt="" />
              <img src="/logos/wiseboard.svg"         alt="" />
              <img src="/logos/cleanmymac.svg"        alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* ── EVERYTHING FROM "THE REAL PROBLEM" DOWN ──────── */}
      <BelowHeroSection />
    </>
  );
}
