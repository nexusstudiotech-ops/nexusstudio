import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../lib/animations'

const steps = [
  {
    step: "01",
    label: "STEP 01",
    title: "Discovery Call",
    desc: "20-min free call to understand your vision and goals."
  },
  {
    step: "02",
    label: "STEP 02",
    title: "Design Draft",
    desc: "Full homepage design delivered to you within 3 days."
  },
  {
    step: "03",
    label: "STEP 03",
    title: "Build & Refine",
    desc: "Complete site built with one revision round included."
  },
  {
    step: "04",
    label: "STEP 04",
    title: "Launch",
    desc: "Live on your domain, SEO-ready, mobile-optimised."
  },
  {
    step: "05",
    label: "STEP 05",
    title: "30-Day Support",
    desc: "Post-launch aftercare. We fix anything, no questions."
  }
]

export function ProcessTimeline() {
  const [hoveredIdx, setHoveredIdx] = useState(0) // Default active step 1 (index 0)

  return (
    <div className="relative w-full overflow-hidden py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-5xl font-syne font-extrabold text-white">
            From Idea to Live in 7 Days
          </h2>
          <p className="text-slate-400 font-dmsans max-w-2xl mx-auto text-base font-light">
            No confusion, no delays. A clear process that keeps you in control.
          </p>
        </div>

        {/* 1. Desktop Timeline Layout (Visible on md+) */}
        <div className="hidden md:block relative mt-12 pb-12">
          
          {/* Timeline Linking Track (Linear gradient) */}
          <div 
            className="absolute top-[23px] left-[46px] right-[46px] h-[1px] pointer-events-none select-none z-0"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(34,197,94,0.35) 20%, rgba(6,182,212,0.35) 80%, transparent)'
            }}
          />

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-5 gap-4 relative z-10"
          >
            {steps.map((item, idx) => {
              const isActive = hoveredIdx === idx
              
              return (
                <motion.div 
                  key={idx}
                  custom={idx}
                  variants={fadeUp}
                  className="flex flex-col items-center text-center px-2 group cursor-pointer"
                  onMouseEnter={() => setHoveredIdx(idx)}
                >
                  {/* Node Circle */}
                  <div 
                    className={`w-[46px] h-[46px] rounded-full border flex items-center justify-center font-syne font-extrabold text-sm transition-all duration-300 ${
                      isActive 
                        ? 'border-glow-cyan bg-accent-indigo/10 text-[#22C55E] shadow-[0_0_18px_rgba(34,197,94,0.3)] scale-110' 
                        : 'border-white/20 bg-bg-surface text-brand-indigo group-hover:border-glow-cyan group-hover:bg-accent-indigo/10 group-hover:text-[#22C55E] group-hover:shadow-[0_0_18px_rgba(34,197,94,0.3)] group-hover:scale-110'
                    }`}
                  >
                    {item.step}
                  </div>

                  {/* Step Metadata Label */}
                  <span className="text-[10px] text-slate-400 font-mono font-bold tracking-widest mt-5 mb-2 select-none uppercase">
                    {item.label}
                  </span>

                  {/* Step Title */}
                  <h4 className="text-sm font-syne font-bold text-white mb-2">
                    {item.title}
                  </h4>

                  {/* Step Description */}
                  <p className="text-[12px] text-slate-400 font-dmsans font-light leading-relaxed max-w-[170px]">
                    {item.desc}
                  </p>

                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* 2. Mobile Timeline Layout (Vertical - visible on sm/xs) */}
        <div className="md:hidden relative space-y-8 pl-8 mt-8 border-l border-white/10">
          {steps.map((item, idx) => {
            const isActive = hoveredIdx === idx

            return (
              <div 
                key={idx} 
                className="relative cursor-pointer group"
                onClick={() => setHoveredIdx(idx)}
              >
                {/* Node Bullet Circle absolute positioning on border-l */}
                <div 
                  className={`absolute -left-[54px] top-0 w-8 h-8 rounded-full border flex items-center justify-center font-syne font-extrabold text-xs transition-all duration-300 ${
                    isActive
                      ? 'border-glow-cyan bg-accent-indigo/10 text-accent-indigo shadow-[0_0_12px_rgba(34,197,94,0.3)]'
                      : 'border-white/10 bg-bg-surface text-brand-indigo'
                  }`}
                >
                  {item.step}
                </div>

                <span className="text-[9px] text-slate-400 font-mono font-bold tracking-widest block mb-1 select-none">
                  {item.label}
                </span>
                <h4 className="text-base font-syne font-bold text-white mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-400 font-dmsans font-light leading-relaxed max-w-sm">
                  {item.desc}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </div>
  )
}
