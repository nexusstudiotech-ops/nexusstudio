import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp } from '../lib/animations'

export function TestimonialCard({ initials, name, role, city, quote, index }) {
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="relative flex flex-col p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 transition-colors duration-300 transition-all duration-400 hover:border-glow-cyan/25 hover:scale-105 hover:border-glow-cyan transition-transform transition-colors duration-300 group overflow-hidden"
    >
      {/* 1. Star Ratings */}
      <div className="flex gap-0.5 text-[#818CF8] text-[13px] tracking-[2px] mb-5 select-none">
        ★★★★★
      </div>

      {/* 2. Testimonial Quote */}
      <p className="flex-1 text-sm text-slate-400 font-dmsans italic leading-relaxed mb-6 font-light relative">
        <span className="text-xl text-brand-cyan font-serif mr-1 leading-none select-none">“</span>
        {quote}
      </p>

      {/* 3. Author Row */}
      <div className="flex items-center gap-3 pt-4 border-t border-white/[0.04]">
        {/* Gradient Initial Circle Avatar */}
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-indigo to-brand-cyan flex items-center justify-center text-xs font-syne font-extrabold text-white select-none shrink-0 shadow-lg">
          {initials}
        </div>
        
        {/* Author Metadata */}
        <div className="leading-tight">
          <h4 className="text-[13px] font-medium text-white">
            {name}
          </h4>
          <span className="text-[11px] text-slate-400 font-light">
            {role} · {city}
          </span>
        </div>
      </div>

      {/* Decorative Bottom Hover Accent Line */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-accent-indigo to-brand-cyan scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

    </motion.div>
  )
}
