"use client"

import { useCallback, useEffect, useRef, useState } from "react"

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*"

interface TextScrambleProps {
  text: string
  className?: string

  autoStart?: boolean
  inheritTypography?: boolean

  showUnderline?: boolean
  showGlow?: boolean
}

export function TextScramble({
  text,
  className = "",
  autoStart = false,
  inheritTypography = false,
  showUnderline = true,
  showGlow = true,
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(text)
  const [isHovering, setIsHovering] = useState(false)
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

      const progress = frameRef.current / duration
      const revealedLength = Math.floor(progress * text.length)

      const newText = text
        .split("")
        .map((char, i) => {
          if (char === " ") return " "
          if (i < revealedLength) return text[i]
          return CHARS[Math.floor(Math.random() * CHARS.length)]
        })
        .join("")

      setDisplayText(newText)

      if (frameRef.current >= duration) {
        if (intervalRef.current) clearInterval(intervalRef.current)
        intervalRef.current = null
        setDisplayText(text)
        setIsScrambling(false)
      }
    }, 55)
  }, [text])

  useEffect(() => {
    if (autoStart) scramble()

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [autoStart, scramble])

  return (
    <div
      className={`group relative inline-flex flex-col cursor-pointer select-none ${className}`}
      onMouseEnter={() => {
        setIsHovering(true)
        scramble()
      }}
      onMouseLeave={() => setIsHovering(false)}
      style={{ width: `${text.length}ch` }}
    >
      <span
        className={
          inheritTypography
            ? "relative whitespace-nowrap leading-none"
            : "relative font-mono text-lg tracking-widest uppercase"
        }
      >
        {displayText.split("").map((char, i) => (
          <span
            key={i}
            className={`inline-block transition-all duration-150 ${
              isScrambling && char !== text[i]
                ? "text-primary scale-110"
                : "text-current"
            }`}
            style={{ transitionDelay: `${i * 10}ms` }}
          >
            {char}
          </span>
        ))}
      </span>

      {showUnderline && (
        <span className="relative h-px w-full mt-2 overflow-hidden">
          <span
            className={`absolute inset-0 bg-foreground transition-transform duration-500 ease-out origin-left ${
              isHovering ? "scale-x-100" : "scale-x-0"
            }`}
          />
          <span className="absolute inset-0 bg-border" />
        </span>
      )}

      {showGlow && (
        <span
          className={`absolute -inset-4 rounded-lg bg-primary/5 transition-opacity duration-300 -z-10 ${
            isHovering ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </div>
  )
}
