"use client"

import { useAutoRedirect } from "@/lib/utils-client"

interface AutoRedirectProps {
  route: string
  delay?: number
  enabled?: boolean
}

/**
 * Client component wrapper for the useAutoRedirect hook
 * This allows using the redirect functionality in server components
 */
export function AutoRedirectClient({ route, delay, enabled }: AutoRedirectProps) {
  useAutoRedirect(route, delay, enabled)
  return null
}