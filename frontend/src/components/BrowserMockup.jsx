import React from 'react'

export function BrowserMockup({ url, name, niche, desc, theme, children }) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-white/5 bg-bg-surface transition-all duration-400 group/mockup hover:-translate-y-[7px] hover:border-glow-cyan/40 hover:shadow-[0_24px_60px_rgba(0,0,0,0.5)]">
      
      {/* 1. Browser Chrome Bar */}
      <div className="flex items-center bg-[#141925] px-3.5 py-2.5 gap-2 border-b border-white/5 select-none">
        <span className="w-2 h-2 rounded-full bg-[#FF5F57]" />
        <span className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
        <span className="w-2 h-2 rounded-full bg-[#28CA41]" />
        
        {/* Fake URL Bar */}
        <div className="flex-1 max-w-[280px] mx-auto bg-black/30 rounded py-0.5 px-3 text-[10px] text-slate-400 font-mono text-center truncate">
          {url}
        </div>
      </div>

      {/* 2. Inner Content (Mockup Visuals Container) */}
      <div className="h-[210px] w-full relative overflow-hidden select-none">
        {children}
      </div>

      {/* 3. Hover Information Overlay */}
      <div className="absolute inset-0 bg-[#080A12]/95 flex flex-col justify-center items-center text-center p-6 opacity-0 group-hover/mockup:opacity-100 transition-all duration-400 z-20 backdrop-blur-sm">
        
        {/* Niche Label */}
        <span className="text-[10px] font-syne font-bold uppercase tracking-widest text-brand-cyan mb-2 transform translate-y-3 group-hover/mockup:translate-y-0 transition-transform duration-300">
          {niche}
        </span>
        
        {/* Project Name */}
        <h4 className="text-xl font-syne font-extrabold text-white mb-2 transform translate-y-3 group-hover/mockup:translate-y-0 transition-transform duration-300 delay-75">
          {name}
        </h4>
        
        {/* Brief Description */}
        <p className="text-xs text-slate-400 font-dmsans max-w-[240px] leading-relaxed mb-5 transform translate-y-3 group-hover/mockup:translate-y-0 transition-transform duration-300 delay-100">
          {desc}
        </p>

        {/* View Site CTA Button */}
        <button className="relative px-5 py-2 bg-accent-indigo hover:bg-accent-indigo-dim text-white rounded text-xs font-syne font-bold uppercase tracking-widest transition-all duration-300 transform scale-90 group-hover/mockup:scale-100 group-hover/mockup:shadow-[0_0_15px_rgba(34,197,94,0.5)]">
          View Site →
        </button>
      </div>

    </div>
  )
}
