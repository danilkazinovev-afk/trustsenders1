"use client";

import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav id="nav" role="navigation" aria-label="Main navigation">
      <div className="container">
        <div className="nav-inner">
          <a href="#" className="nav-logo">
            Trust<span className="accent">Senders</span>
          </a>

          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#service-cards">Infrastructure</a>
            <a href="#service-cards">Consulting</a>
            <a href="#pricing">Support</a>
            <a href="#audience">Who We Help</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </div>

          <div className="nav-actions">
            <a href="/demo" className="btn btn-primary btn-sm">
              Book a Review
            </a>
          </div>

          <button
            className="hamburger"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div className={`mobile-menu${open ? " open" : ""}`} role="menu">
          <a href="#services" onClick={close}>Services</a>
          <a href="#service-cards" onClick={close}>Infrastructure</a>
          <a href="#service-cards" onClick={close}>Consulting</a>
          <a href="#pricing" onClick={close}>Support</a>
          <a href="#audience" onClick={close}>Who We Help</a>
          <a href="#pricing" onClick={close}>Pricing</a>
          <a href="#faq" onClick={close}>FAQ</a>
          <a href="/demo" className="btn btn-primary" onClick={close}>
            Book a Free Deliverability Review
          </a>
        </div>
      </div>
    </nav>
  );
}
