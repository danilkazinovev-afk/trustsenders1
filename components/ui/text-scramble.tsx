"use client"

import { useCallback, useEffect, useRef, useState } from "react"

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*"

export function TextScramble({ text, className = "" }: { text: string; className?: string }) {
  const [displayText, setDisplayText] = useState(text)
  const [isScrambling, setIsScrambling] = useState(false)

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const frameRef = useRef(0)

  const scramble = useCallback(() => {
    setIsScrambling(true)
    frameRef.current = 0

    const duration = text.length * 6

    if (intervalRef.current) clearInterval(intervalRef.current)

    intervalRef.current = setInterval(() => {
      frameRef.current++

      const revealedLength = Math.floor((frameRef.current / duration) * text.length)

      setDisplayText(
        text
          .split("")
          .map((char, i) =>
            char === " " || i < revealedLength
              ? text[i]
              : CHARS[Math.floor(Math.random() * CHARS.length)]
          )
          .join("")
      )

      if (frameRef.current >= duration) {
        if (intervalRef.current) clearInterval(intervalRef.current)
        intervalRef.current = null
        setDisplayText(text)
        setIsScrambling(false)
      }
    }, 55)
  }, [text])

  useEffect(() => {
    scramble()
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [scramble])

  return (
    <div
      className={`relative inline-flex flex-col cursor-pointer select-none ${className}`}
      onMouseEnter={scramble}
    >
      <span className="relative whitespace-nowrap leading-none">
        {displayText.split("").map((char, i) => (
          // Fixed-width slot: reserve the final letter's width so swapping in
          // wider/narrower scramble glyphs can't shift neighbouring letters.
          <span key={i} className="relative inline-block">
            <span aria-hidden="true" className="invisible">
              {text[i] === " " ? " " : text[i]}
            </span>
            <span
              className={`absolute inset-0 flex items-center justify-center transition-all duration-150 ${
                isScrambling && char !== text[i] ? "scale-110" : ""
              }`}
              style={{ transitionDelay: `${i * 10}ms` }}
            >
              {char === " " ? " " : char}
            </span>
          </span>
        ))}
      </span>
    </div>
  )
}
