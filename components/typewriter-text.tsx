"use client";

import { useEffect, useRef, useState } from "react";

export default function TypewriterText({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const indexRef = useRef(0);

  useEffect(() => {
    const delay = setTimeout(() => {
      const interval = setInterval(() => {
        if (indexRef.current <= text.length) {
          setDisplayed(text.slice(0, indexRef.current));
          indexRef.current++;
        } else {
          clearInterval(interval);
          setTimeout(() => setShowCursor(false), 2000);
        }
      }, 80);
      return () => clearInterval(interval);
    }, 600);
    return () => clearTimeout(delay);
  }, [text]);

  return (
    <>
      <span className="typewriter-text">{displayed}</span>
      {showCursor && <span className="typewriter-cursor">|</span>}
    </>
  );
}
