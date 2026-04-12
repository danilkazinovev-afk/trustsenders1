"use client"

import { useState, useEffect, useRef, useCallback } from "react"

export function useDebouncedDimensions(delay = 200) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const ref = useRef<HTMLDivElement>(null)

  const updateDimensions = useCallback(() => {
    if (ref.current) {
      setDimensions({
        width: ref.current.offsetWidth,
        height: ref.current.offsetHeight,
      })
    }
  }, [])

  useEffect(() => {
    updateDimensions()
    let timer: ReturnType<typeof setTimeout>
    const observer = new ResizeObserver(() => {
      clearTimeout(timer)
      timer = setTimeout(updateDimensions, delay)
    })
    if (ref.current) observer.observe(ref.current)
    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [updateDimensions, delay])

  return { ref, dimensions }
}
