"use client"

import { useEffect, useRef, useCallback, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { v4 as uuidv4 } from "uuid"
import { useDebouncedDimensions } from "@/components/hooks/use-debounced-dimensions"

interface Pixel {
  id: string
  x: number
  y: number
  fadeDuration: number
}

interface PixelTrailProps {
  pixelSize?: number
  fadeDuration?: number
  delay?: number
  pixelClassName?: string
}

const TEXT_TAGS = new Set([
  "P", "H1", "H2", "H3", "H4", "H5", "H6",
  "A", "BUTTON", "SPAN", "STRONG", "EM", "B", "I",
  "LI", "UL", "OL", "LABEL", "SMALL", "BLOCKQUOTE",
])

const LAYOUT_TAGS = new Set(["DIV", "SECTION", "MAIN", "ARTICLE", "ASIDE", "HEADER", "FOOTER", "NAV"])

// Returns true if the element has any non-empty text node as a direct child.
// This catches bare text inside divs that aren't wrapped in a text tag.
function hasDirectText(el: Element): boolean {
  for (const node of el.childNodes) {
    if (node.nodeType === Node.TEXT_NODE && (node.textContent?.trim().length ?? 0) > 0) return true
  }
  return false
}

function isOverText(target: Element | null): boolean {
  let el = target
  while (el && el !== document.body) {
    const tag = el.tagName.toUpperCase()
    if (TEXT_TAGS.has(tag)) return true
    if (hasDirectText(el)) return true
    if (LAYOUT_TAGS.has(tag)) return false
    el = el.parentElement
  }
  return false
}

// Returns every grid cell on the line from (c0,r0) to (c1,r1) via Bresenham
function getLineCells(c0: number, r0: number, c1: number, r1: number) {
  const cells: { col: number; row: number }[] = []
  let x = c0, y = r0
  const dx = Math.abs(c1 - c0), dy = Math.abs(r1 - r0)
  const sx = c0 < c1 ? 1 : -1, sy = r0 < r1 ? 1 : -1
  let err = dx - dy
  while (true) {
    cells.push({ col: x, row: y })
    if (x === c1 && y === r1) break
    const e2 = 2 * err
    if (e2 > -dy) { err -= dy; x += sx }
    if (e2 < dx) { err += dx; y += sy }
  }
  return cells
}

export function PixelTrail({
  pixelSize = 32,
  fadeDuration = 1200,
  delay = 500,
  pixelClassName = "bg-white",
}: PixelTrailProps) {
  const { ref, dimensions } = useDebouncedDimensions()
  const [pixels, setPixels] = useState<Pixel[]>([])
  const lastCellRef = useRef<{ col: number; row: number } | null>(null)
  const isActiveRef = useRef(false)

  const cols = dimensions.width > 0 ? Math.ceil(dimensions.width / pixelSize) : 0
  const rows = dimensions.height > 0 ? Math.ceil(dimensions.height / pixelSize) : 0

  useEffect(() => {
    const timer = setTimeout(() => { isActiveRef.current = true }, delay)
    return () => clearTimeout(timer)
  }, [delay])

  // Check if a grid cell's screen position is over any text content.
  // Uses elementsFromPoint (all layers) and skips our own container so we
  // can see through the pixel trail to the actual page content underneath.
  const isCellOverText = useCallback((col: number, row: number): boolean => {
    if (!ref.current) return false
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + col * pixelSize + pixelSize / 2
    const cy = rect.top + row * pixelSize + pixelSize / 2
    const els = document.elementsFromPoint(cx, cy)
    for (const el of els) {
      if (ref.current === el || ref.current.contains(el)) continue
      if (isOverText(el)) return true
    }
    return false
  }, [ref, pixelSize])

  const spawnPixel = useCallback((col: number, row: number) => {
    if (isCellOverText(col, row)) return
    const id = uuidv4()
    const pxFadeDuration = fadeDuration * (0.6 + Math.random() * 0.9)
    const lingerMs = 60 + Math.random() * 600
    setPixels((prev) => [...prev, { id, x: col * pixelSize, y: row * pixelSize, fadeDuration: pxFadeDuration }])
    setTimeout(() => {
      setPixels((prev) => prev.filter((p) => p.id !== id))
    }, lingerMs)
  }, [fadeDuration, pixelSize, isCellOverText])

  // Spawns a pixel with slight jitter, plus an occasional satellite nearby
  const spawnScattered = useCallback((col: number, row: number) => {
    const jc = col + Math.round((Math.random() - 0.5) * 1.5)
    const jr = row + Math.round((Math.random() - 0.5) * 1.5)
    if (jc >= 0 && jc < cols && jr >= 0 && jr < rows) spawnPixel(jc, jr)

    if (Math.random() < 0.38) {
      const ec = col + Math.round((Math.random() - 0.5) * 2)
      const er = row + Math.round((Math.random() - 0.5) * 2)
      if (ec >= 0 && ec < cols && er >= 0 && er < rows) spawnPixel(ec, er)
    }
  }, [cols, rows, spawnPixel])

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isActiveRef.current || !ref.current) return

      if (isOverText(e.target as Element)) return

      const rect = ref.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const col = Math.floor(x / pixelSize)
      const row = Math.floor(y / pixelSize)
      if (col < 0 || col >= cols || row < 0 || row >= rows) return

      const last = lastCellRef.current
      lastCellRef.current = { col, row }

      if (last === null) {
        spawnScattered(col, row)
        return
      }
      if (last.col === col && last.row === row) return

      const cells = getLineCells(last.col, last.row, col, row)
      cells.slice(1).forEach(({ col: c, row: r }) => {
        if (c >= 0 && c < cols && r >= 0 && r < rows) spawnScattered(c, r)
      })
    },
    [pixelSize, cols, rows, ref, spawnScattered]
  )

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [handleMouseMove])

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      <AnimatePresence>
        {pixels.map((pixel) => (
          <motion.div
            key={pixel.id}
            className={`absolute ${pixelClassName}`}
            style={{ left: pixel.x, top: pixel.y, width: pixelSize, height: pixelSize }}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: pixel.fadeDuration / 1000, ease: "easeIn" }}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}
