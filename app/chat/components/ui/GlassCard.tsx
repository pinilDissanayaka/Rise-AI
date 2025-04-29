"use client"

import React from "react"
import { cn } from "../../lib/utils" // Adjust import path if needed

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description: string
  onClick?: () => void
}

/**
 * A reusable GlassCard component with glassmorphism styling,
 * a purple glow effect on hover, and reduced size on mobile.
 */
export function GlassCard({ title, description, onClick, className }: GlassCardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        // Mobile: limit width to 90% of viewport and max-w-xs
        "w-[90%] max-w-xs",
        // Larger screens: let parent container or utility classes define width
        "sm:w-auto",
        // Glassmorphism base: gradient background, border, blur, etc.
        "bg-gradient-to-br from-white/20 to-white/10 border border-white/0 backdrop-blur-lg rounded-xl shadow-lg p-6 text-center",
        // Hover effect: scale up + purple glow
        "transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_4px_rgba(139,92,246,0.5)]",
        className
      )}
    >
      <h3 className="text-2xl font-bold mb-2 text-purple-200">{title}</h3>
      <p className="text-base text-purple-100">{description}</p>
    </div>
  )
}
