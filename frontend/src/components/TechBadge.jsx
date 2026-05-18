import React from 'react'

export function TechBadge({ label }) {
  return (
    <span className="inline-block bg-accent-indigo/8 border border-glow-cyan/18 text-[#818CF8] rounded-full px-[11px] py-[4px] text-[11px] font-mono tracking-wider select-none hover:border-glow-cyan/45 transition-colors duration-200">
      {label}
    </span>
  )
}
