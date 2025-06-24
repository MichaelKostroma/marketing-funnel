"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"

/**
 * Hook for automatic redirection after a specified delay
 * @param route - The route to redirect to
 * @param delay - The delay in milliseconds before redirection (default: 2000ms)
 * @param enabled - Whether the redirection is enabled (default: true)
 */
export function useAutoRedirect(route: string, delay = 2000, enabled = true) {
  const router = useRouter()

  useEffect(() => {
    if (!enabled) return

    const timer = setTimeout(() => {
      router.push(route)
    }, delay)

    return () => clearTimeout(timer)
  }, [router, route, delay, enabled])
}