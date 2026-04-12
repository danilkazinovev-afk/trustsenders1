"use client";

import { useRef, useState } from "react";

const col1 = [
  {
    q: "Do you only work with cold email?",
    a: "No. We work with B2B cold outreach, B2C email operations, and warm audience campaigns. Our experience covers the full spectrum of email sending environments.",
  },
  {
    q: "Can you help if our emails are already going to spam?",
    a: "Yes. We can review the setup, identify likely causes, and recommend the best path to stabilize and improve performance. In suitable cases, B2B domain reputation can be stabilized in as little as 48 hours.",
  },
  {
    q: "Do you build Google Workspace and Microsoft 365 setups?",
    a: "Yes. We work with both, as well as SMTP providers and private infrastructure. Our setup work goes beyond provisioning — we configure, optimize, and monitor for long-term performance.",
  },
  {
    q: "Do you offer private infrastructure with dedicated IPs?",
    a: "Yes. We help design and build custom sending environments for teams that need more flexibility, volume, and control than standard platform setups provide.",
  },
  {
    q: "Do you support our existing tools?",
    a: "In most cases, yes. We can review your current tool stack and advise how to configure it properly for better deliverability and safer sending patterns.",
  },
];

const col2 = [
  {
    q: "Do you provide one-time consulting or ongoing support?",
    a: "Both. Some clients need a one-time audit or strategy session. Others need monthly support as their sending operations grow. We scope the right engagement for your situation.",
  },
  {
    q: "Can you help with domain and IP reputation issues?",
    a: "Yes. Reputation analysis and recovery strategy are a core part of our work. We identify the root cause, stabilize sending, and help you build back reputation safely.",
  },
  {
    q: "Do you guarantee inbox placement?",
    a: "No serious deliverability expert should guarantee inbox placement — mailbox provider behavior is not fully controllable. What we provide is expert analysis, better infrastructure, safer sending strategy, and practical steps to improve performance.",
  },
  {
    q: "How quickly can you stabilize a domain landing in spam?",
    a: "In suitable cases, we can stabilize B2B domain reputation in as little as 48 hours. More complex cases involving IP reputation or blacklists may take longer. We assess timeline during the initial review — never overpromise, always give you a realistic picture.",
  },
  {
    q: "What industries do you work with?",
    a: "We have worked across 15+ industries including SaaS, fintech, real estate, professional services, e-commerce, agencies, and high-volume outbound sales teams. Deliverability challenges are consistent across sectors.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  const toggle = () => {
    const el = bodyRef.current;
    if (!el) return;
    if (!open) {
      el.style.height = "0px";
      el.style.display = "block";
      const h = el.scrollHeight;
      requestAnimationFrame(() => {
        el.style.height = h + "px";
      });
    } else {
      el.style.height = el.scrollHeight + "px";
      requestAnimationFrame(() => {
        el.style.height = "0px";
      });
    }
    setOpen((v) => !v);
  };

  return (
    <div className={`faq-item${open ? " open" : ""}`}>
      <button className="faq-btn" onClick={toggle} aria-expanded={open}>
        {q}
        <span className="faq-ico" aria-hidden="true">+</span>
      </button>
      <div
        ref={bodyRef}
        className="faq-ans"
        style={{
          height: 0,
          overflow: "hidden",
          display: "block",
          transition: "height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.35s ease",
          opacity: open ? 1 : 0,
          paddingBottom: open ? 18 : 0,
        }}
      >
        {a}
      </div>
    </div>
  );
}

export default function FaqSection() {
  return (
    <section id="faq" aria-labelledby="faq-h">
      <div className="container">
        <div className="section-tag">Questions</div>
        <h2 className="section-title" id="faq-h">
          Frequently asked questions.
        </h2>

        <div className="faq-layout">
          <div className="faq-col">
            {col1.map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
          <div className="faq-col">
            {col2.map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
