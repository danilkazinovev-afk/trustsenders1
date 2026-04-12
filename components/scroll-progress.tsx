"use client"

import { useEffect, useState } from "react"

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
    }
    window.addEventListener("scroll", update, { passive: true })
    return () => window.removeEventListener("scroll", update)
  }, [])

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "4px",
      zIndex: 9999,
      background: "transparent",
      pointerEvents: "none",
    }}>
      <div style={{
        height: "100%",
        width: `${progress}%`,
        background: "var(--brand-deep)",
        boxShadow: "0 0 8px rgba(41, 135, 122, 0.7), 0 0 16px rgba(41, 135, 122, 0.35)",
        transition: "width 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
      }} />
    </div>
  )
}
