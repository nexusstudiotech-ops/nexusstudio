import React from 'react'

const marqueeItems = [
  "Photography Websites",
  "Videographer Portfolios",
  "iPhone Creator Sites",
  "Personal Brands",
  "Wedding Photography",
  "Landing Pages",
  "Business Websites"
]

export function MarqueeStrip() {
  // Duplicate array to enable seamless looping scroll
  const items = [...marqueeItems, ...marqueeItems]

  return (
    <div className="relative w-full overflow-hidden border-y border-white/5 py-5 bg-black/40 backdrop-blur-sm z-10">
      <div className="flex w-max items-center gap-[44px] animate-marquee whitespace-nowrap">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center gap-[44px]">
            <span className="font-syne font-bold text-sm tracking-widest text-slate-400 uppercase">
              {item}
            </span>
            <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full shadow-[0_0_8px_#22C55E]" />
          </div>
        ))}
      </div>
    </div>
  )
}
