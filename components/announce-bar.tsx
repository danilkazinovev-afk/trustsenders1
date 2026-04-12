"use client";

import { useState } from "react";

export default function AnnounceBar() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div id="announce-bar" role="banner">
      <div className="container">
        Struggling with spam placement or unstable outreach?&nbsp;
        <a href="#final-cta">Book a free deliverability review →</a>
      </div>
      <button
        className="dismiss-bar"
        onClick={() => setVisible(false)}
        aria-label="Dismiss"
      >
        ×
      </button>
    </div>
  );
}
