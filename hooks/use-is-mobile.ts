"use client"

import { useSyncExternalStore } from "react"

const QUERY = "(max-width: 767px)" // Tailwind's md breakpoint

const subscribe = (cb: () => void) => {
  const mql = window.matchMedia(QUERY)
  mql.addEventListener("change", cb)
  return () => mql.removeEventListener("change", cb)
}

/** True below Tailwind's `md` breakpoint. Server-renders as false. */
export const useIsMobile = () =>
  useSyncExternalStore(subscribe, () => window.matchMedia(QUERY).matches, () => false)
