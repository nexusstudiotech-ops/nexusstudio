import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeUp } from '../lib/animations'

export function PricingCard({ plan, index }) {
  const isPopular = plan.popular

  // Calculates mouse position within the card to update CSS custom properties
  const handleMouseMove = (e) => {
    const { currentTarget, clientX, clientY } = e
    const rect = currentTarget.getBoundingClientRect()
    const x = clientX - rect.left
    const y = clientY - rect.top
    currentTarget.style.setProperty('--mouse-x', `${x}px`)
    currentTarget.style.setProperty('--mouse-y', `${y}px`)
  }

  const getButtonStyles = () => {
    if (plan.name === 'Starter') {
      return "border border-glow-cyan/30 text-[#22C55E] bg-transparent hover:bg-accent-indigo/8 hover:border-glow-cyan/50 hover:shadow-[0_0_15px_rgba(34,197,94,0.2)]"
    } else if (plan.name === 'Business') {
      return "bg-accent-indigo text-white hover:bg-accent-indigo-dim hover:shadow-[0_0_24px_rgba(34,197,94,0.5)] hover:-translate-y-0.5"
    } else {
      return "border border-brand-indigo/30 text-brand-indigo bg-transparent hover:bg-brand-indigo/8 hover:border-brand-indigo/50 hover:shadow-[0_0_15px_rgba(99,102,241,0.2)]"
    }
  }

  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      onMouseMove={handleMouseMove}
      className={`relative flex flex-col p-8 sm:p-10 rounded-2xl transition-all duration-400 group overflow-hidden ${
        isPopular
          ? 'bg-accent-indigo/[0.06] border-[1.5px] border-glow-cyan/35 shadow-[0_0_60px_rgba(34,197,94,0.12),0_20px_60px_rgba(0,0,0,0.3)] md:scale-[1.04] z-10'
          : 'bg-white/5 backdrop-blur-md border border-white/10 transition-colors duration-300 hover:border-white/10 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] hover:-translate-y-1.5'
      }`}
    >
      
      {/* Cursor Spotlight Gradient Overlay Layer */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
        style={{
          background: `radial-gradient(400px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(34, 197, 94, 0.08), transparent 75%)`
        }}
      />

      {/* Pulsing Border Glow Layer for Popular Plan */}
      {isPopular && (
        <div className="absolute inset-0 rounded-2xl border-[2px] border-glow-cyan/50 shadow-[0_0_35px_rgba(46,132,94,0.4)] animate-[pulse_3s_ease-in-out_infinite] pointer-events-none z-0" />
      )}

      {/* 1. Popular Pill Header */}
      {isPopular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <span className="bg-accent-indigo text-white text-[10px] font-clash font-bold uppercase tracking-widest py-1.5 px-5 rounded-full shadow-[0_0_15px_rgba(46,132,94,0.5)]">
            Most Popular
          </span>
        </div>
      )}

      {/* 2. Top Meta Section */}
      <div className="mb-8 space-y-4 relative z-10">
        <h3 className="text-2xl font-clash font-extrabold text-white">
          {plan.name}
        </h3>
        <p className="text-slate-400 font-general text-xs sm:text-sm leading-relaxed min-h-[60px] font-medium">
          {plan.description}
        </p>
        <div className="pt-4 border-t border-white/[0.04] flex items-baseline gap-1 select-none">
          <span className="text-4xl sm:text-5xl font-clash font-extrabold text-white">
            {plan.price}
          </span>
          <span className="text-slate-400 font-mono text-xs">/project</span>
        </div>
      </div>

      {/* 3. Features bullets */}
      <ul className="mb-10 flex-1 space-y-4 text-xs sm:text-sm font-medium text-slate-400 font-general relative z-10">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <span className="w-5 h-5 rounded-full bg-accent-indigo/15 flex items-center justify-center shrink-0 mr-3 mt-0.5 border border-glow-cyan/20">
              <svg className="h-3 w-3 text-accent-indigo" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* 4. Action CTA Button */}
      <Link 
        to="/contact"
        className={`w-full py-4 rounded-md font-clash font-bold uppercase tracking-wider text-center text-xs transition-all duration-300 relative z-10 ${getButtonStyles()}`}
      >
        Select Plan
      </Link>

      {/* Hover visual accent stripe */}
      <div className={`absolute bottom-0 left-0 w-full h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20 ${
        isPopular ? 'bg-accent-indigo' : 'bg-gradient-to-r from-accent-indigo to-brand-cyan'
      }`} />

    </motion.div>
  )
}
