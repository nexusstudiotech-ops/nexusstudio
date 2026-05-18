import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

export default function About() {
  return (
    <div className="bg-[#050505] min-h-screen font-jakarta text-[#9CA3AF] relative overflow-hidden">
      
      {/* MANDATORY HERO ORBIT ARCH */}
      <div className="hero-glow-orbit" />

      {/* Hero Origin - BLACK */}
      <section className="pt-40 pb-[80px] md:pb-[120px] relative z-20">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-center">
            <motion.span variants={fadeUp} className="text-[#A855F7] font-bold text-[11px] tracking-[0.1em] uppercase mb-4 block">
              WHO WE ARE
            </motion.span>
            <motion.h1 variants={fadeUp} className="font-extrabold text-[42px] md:text-[64px] tracking-[-0.02em] text-white mb-6">
              We Architect Digital <span className="text-[#A855F7]">Sovereignty</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="font-normal text-[17px] max-w-[600px] mx-auto leading-[1.7]">
              Nexus Studio was born out of a simple frustration — the modern web is bloated, slow, and needlessly complex. We exist to build zero-compromise, high-performance websites for ambitious brands.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Founder Quote - DARK PURPLE */}
      <section className="py-[80px] md:py-[120px] section-dark-purple relative overflow-hidden">
        {/* Architectural Monospaced Blueprint Tags */}
        <div className="font-mono text-[9px] text-[#A855F7]/30 absolute top-6 left-6 tracking-widest uppercase hidden sm:block">[ QUOTE BLOCK // FOUNDER SYSTEM ]</div>
        <div className="font-mono text-[9px] text-[#A855F7]/30 absolute top-6 right-6 tracking-widest uppercase hidden sm:block">[ REF: JESH_01 ]</div>
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 relative z-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-[800px] mx-auto bg-[#111111] border border-white/[0.06] rounded-[14px] p-8 sm:p-12 relative overflow-hidden text-center shadow-[0_0_40px_rgba(124,58,237,0.05)]">
            <div className="text-[120px] font-serif text-[#A855F7] opacity-20 absolute top-[-40px] left-8 leading-none">"</div>
            <p className="font-normal text-[20px] md:text-[24px] italic text-white leading-[1.6] mb-8 relative z-10">
              "We don't just build websites. We construct highly optimized digital real estate designed to withstand massive traffic and deliver high-velocity responses for ambitious brands."
            </p>
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full border-2 border-[#A855F7] bg-[#1A1A1A] flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                <span className="text-white font-bold text-xl">J</span>
              </div>
              <div className="text-[14px]">
                <strong className="text-white">Jeshwanth</strong> — Founder, Nexus Studio, Hyderabad, India
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy - BLACK */}
      <section className="py-[80px] md:py-[120px] bg-[#050505] relative z-20">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 variants={fadeUp} className="font-bold text-[32px] text-white text-center mb-12">Our Philosophy</motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "No Bloated Templates", desc: "We code bespoke frameworks customized directly for conversion and speed." },
                { title: "Performance First", desc: "Every line of CSS, JS, and server config is refined so load times under 0.5s are our baseline standard." },
                { title: "Data-Driven Design", desc: "Beautiful design is secondary to robust data flows, lightning SEO indexability, and absolute uptime." }
              ].map((phil, i) => (
                <motion.div key={i} variants={fadeUp} className="bg-[#111111] border border-white/[0.06] rounded-[14px] p-8 hover:border-[#7C3AED]/40 hover:shadow-[0_0_24px_rgba(124,58,237,0.1)] transition-colors">
                  <h3 className="font-semibold text-[15px] text-white mb-3">{phil.title}</h3>
                  <p className="font-normal text-[13px] leading-[1.7] text-[#9CA3AF]">{phil.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Pills - DARK PURPLE */}
      <section className="py-[80px] md:py-[120px] section-dark-purple relative overflow-hidden">
        {/* Architectural Monospaced Blueprint Tags */}
        <div className="font-mono text-[9px] text-[#A855F7]/30 absolute top-6 left-6 tracking-widest uppercase hidden sm:block">[ SYSTEM INTEGRITY // TECH PILLS ]</div>
        <div className="font-mono text-[9px] text-[#A855F7]/30 absolute top-6 right-6 tracking-widest uppercase hidden sm:block">[ DWG. NO. NS-03 // CORE ]</div>
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 relative z-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
            <h2 className="font-bold text-[24px] text-white mb-8">Architectural Stack</h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-[800px] mx-auto">
              {["React", "Next.js", "Tailwind CSS", "Node.js", "Framer Motion", "Vite", "Supabase"].map((tech, i) => (
                <span key={i} className="px-[20px] py-[10px] bg-[#1A1A1A] border border-white/[0.08] rounded-full font-medium text-[13px] text-[#9CA3AF] hover:text-white hover:border-[#A855F7] hover:shadow-[0_0_15px_rgba(168,85,247,0.2)] transition-all">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us - BLACK */}
      <section className="py-[80px] md:py-[120px] bg-[#050505] relative z-20">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 variants={fadeUp} className="font-bold text-[32px] text-white text-center mb-12">Why Choose Us</motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "Real Engineering", desc: "Pure-code React, no page builders or generic templates." },
                { title: "Absolute Performance", desc: "99+ PageSpeed scores guaranteed across all devices." },
                { title: "5-Day Delivery", desc: "From initial brief to live deployment, with zero delays." }
              ].map((reason, i) => (
                <motion.div key={i} variants={fadeUp} className="bg-[#111111] border border-white/[0.06] rounded-[14px] p-8 text-center hover:border-[#7C3AED]/40 hover:shadow-[0_0_24px_rgba(124,58,237,0.1)] transition-colors">
                  <div className="w-12 h-12 bg-[#1A1A1A] rounded-lg mx-auto flex items-center justify-center text-[#A855F7] mb-6 font-bold text-xl border border-white/[0.04]">
                    0{i+1}
                  </div>
                  <h3 className="font-semibold text-[15px] text-white mb-3">{reason.title}</h3>
                  <p className="font-normal text-[13px] leading-[1.7] text-[#9CA3AF]">{reason.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA - DARK PURPLE */}
      <section className="py-[80px] md:py-[120px] section-dark-purple relative overflow-hidden">
        {/* Architectural Monospaced Blueprint Tags */}
        <div className="font-mono text-[9px] text-[#A855F7]/30 absolute top-6 left-6 tracking-widest uppercase hidden sm:block">[ LAUNCH PIPELINE // INITIAL BRIEF ]</div>
        <div className="font-mono text-[9px] text-[#A855F7]/30 absolute top-6 right-6 tracking-widest uppercase hidden sm:block">[ DWG. NO. NS-09 // FINAL ]</div>
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 relative z-20">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
            <h2 className="font-bold text-[32px] text-white mb-8">Ready to Elevate Your Digital <span className="text-[#A855F7]">Presence?</span></h2>
            <Link to="/contact" className="inline-block font-semibold text-[14px] text-white px-[32px] py-[14px] rounded-lg bg-[#7C3AED] shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:bg-[#6D28D9] hover:shadow-[0_0_30px_rgba(124,58,237,0.6)] hover:scale-[1.02] transition-all duration-150">
              Start Your Project
            </Link>
          </motion.div>

        </div>
      </section>

    </div>
  )
}
