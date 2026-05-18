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

function FeatureCard({ title, desc, icon, highlight = false }) {
  return (
    <motion.div 
      variants={fadeUp}
      className={`relative p-6 rounded-[14px] transition-all duration-200 group ${
        highlight 
          ? 'bg-[#7C3AED] border border-[#7C3AED]' 
          : 'bg-[#111111] border border-white/[0.06] hover:border-[#7C3AED]/40 hover:shadow-[0_0_24px_rgba(124,58,237,0.1)]'
      }`}
    >
      <div className="flex justify-between items-start mb-6">
        <div className={`p-2 rounded-lg ${highlight ? 'bg-white/20' : 'bg-[#1A1A1A]'}`}>
          <span className={`text-xl ${highlight ? 'text-white' : 'text-[#A855F7]'}`}>{icon}</span>
        </div>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
          highlight ? 'bg-white/20' : 'bg-white/[0.06] group-hover:bg-[#7C3AED]'
        }`}>
          <svg className={`w-4 h-4 ${highlight ? 'text-white' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
      <h3 className={`font-jakarta font-semibold text-[15px] mb-2 ${highlight ? 'text-white' : 'text-white'}`}>
        {title}
      </h3>
      <p className={`font-jakarta font-normal text-[13px] leading-relaxed ${highlight ? 'text-white/90' : 'text-[#9CA3AF]'}`}>
        {desc}
      </p>
    </motion.div>
  )
}

export default function Services() {
  return (
    <div className="bg-[#050505] min-h-screen font-jakarta text-[#9CA3AF] relative overflow-hidden">
      
      {/* Hero - BLACK */}
      <section className="pt-40 pb-[80px] md:pb-[120px] bg-[#050505] relative z-20">
        {/* MANDATORY HERO ORBIT ARCH */}
        <div className="hero-glow-orbit" />
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-center">
            <motion.span variants={fadeUp} className="text-[#A855F7] font-bold text-[11px] tracking-[0.1em] uppercase mb-4 block">
              WHAT WE BUILD
            </motion.span>
            <motion.h1 variants={fadeUp} className="font-extrabold text-[42px] md:text-[64px] tracking-[-0.02em] text-white mb-6">
              Premium Web <span className="text-[#A855F7]">Architecture</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="font-normal text-[17px] max-w-[520px] mx-auto leading-[1.7]">
              We engineer websites that perform like software products — not templates dressed up with plugins.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid - DARK PURPLE */}
      <section className="py-[80px] md:py-[120px] section-dark-purple relative overflow-hidden">
        {/* Architectural Monospaced Blueprint Tags */}
        <div className="font-mono text-[9px] text-[#A855F7]/30 absolute top-6 left-6 tracking-widest uppercase hidden sm:block">[ SYSTEM SPEC: V2.1 // GRID ACTIVE ]</div>
        <div className="font-mono text-[9px] text-[#A855F7]/30 absolute top-6 right-6 tracking-widest uppercase hidden sm:block">[ DWG. NO. NS-04 // STACK ]</div>
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 relative z-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <FeatureCard highlight={true} icon="</>" title="Custom React / Next.js Build" desc="We engineer pixel-perfect codebases completely tailored to your unique requirements without reliance on bulky plugins or generic themes." />
            <FeatureCard icon="📱" title="Mobile-First Responsive Design" desc="Every breakpoint is meticulously crafted to ensure your digital real estate looks stunning and operates flawlessly on any device." />
            <FeatureCard icon="⚡" title="99+ PageSpeed Score Guaranteed" desc="We compress and optimize every asset, implement advanced caching, and minify code to guarantee lightning-fast load times." />
            <FeatureCard icon="🎬" title="Framer Motion Animations" desc="We inject your platform with buttery-smooth interactions, magnetic hover states, and scroll-triggered physics." />
            <FeatureCard icon="🔍" title="SEO-Optimized Architecture" desc="Our semantics, metadata, and routing structure are fundamentally designed to dominate search engine indexability." />
            <FeatureCard icon="💬" title="WhatsApp & Contact Form Integration" desc="Direct-to-client conversion funnels engineered with seamless messaging API connections to instantly capture leads." />
          </motion.div>
        </div>
      </section>

      {/* Process - BLACK */}
      <section className="py-[80px] md:py-[120px] bg-[#050505] relative z-20">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 variants={fadeUp} className="font-bold text-[32px] text-white text-center mb-12">Our 7-Day Architecture Process</motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { num: "01", title: "Discovery Call", desc: "We begin with a comprehensive audit of your brand, establishing clear technical requirements and defining exact conversion metrics. We map out user journeys and determine the optimal tech stack for your specific scale." },
                { num: "02", title: "Design Draft", desc: "Within 48 hours, our UI engineers produce high-fidelity wireframes and interactive mockups. You'll see exactly how your platform will look and behave before a single line of code is written." },
                { num: "03", title: "Development", desc: "We construct the platform from scratch using React and Tailwind CSS. We implement Framer Motion for scroll physics, optimize all media assets, and build custom database endpoints if required." },
                { num: "04", title: "Launch & Handoff", desc: "Following rigorous cross-browser testing and PageSpeed validation, we deploy to production. You receive 100% code ownership, analytics dashboards, and complete administrative control." }
              ].map((step, i) => (
                <motion.div key={i} variants={fadeUp} className="bg-[#111111] border border-white/[0.06] rounded-[14px] p-8 flex gap-6 hover:border-[#7C3AED]/40 hover:shadow-[0_0_24px_rgba(124,58,237,0.1)] transition-colors">
                  <div className="text-[32px] font-extrabold text-[#7C3AED] leading-none shrink-0">{step.num}</div>
                  <div>
                    <h3 className="font-semibold text-[18px] text-white mb-3">{step.title}</h3>
                    <p className="text-[14px] leading-[1.7] text-[#9CA3AF]">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison & CTA - DARK PURPLE */}
      <section className="py-[80px] md:py-[120px] section-dark-purple relative overflow-hidden">
        {/* Architectural Monospaced Blueprint Tags */}
        <div className="font-mono text-[9px] text-[#A855F7]/30 absolute top-6 left-6 tracking-widest uppercase hidden sm:block">[ DRAWING BLOCK // ADVANTAGE ]</div>
        <div className="font-mono text-[9px] text-[#A855F7]/30 absolute top-6 right-6 tracking-widest uppercase hidden sm:block">[ SCALE: 1.0 // PURE CODE ]</div>
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 relative z-20">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mb-[120px]">
            <motion.h2 variants={fadeUp} className="font-bold text-[32px] text-white text-center mb-12">The Nexus Advantage</motion.h2>
            <motion.div variants={fadeUp} className="overflow-x-auto">
              <table className="w-full max-w-[800px] mx-auto border-collapse">
                <thead>
                  <tr>
                    <th className="text-left p-4 border-b border-white/[0.06] text-white font-bold text-[15px]">Feature</th>
                    <th className="text-left p-4 border-b border-white/[0.06] text-[#A855F7] font-bold text-[15px] bg-[#111111]">Nexus Studio</th>
                    <th className="text-left p-4 border-b border-white/[0.06] text-[#9CA3AF] font-bold text-[15px]">WordPress / Wix</th>
                  </tr>
                </thead>
                <tbody className="text-[14px]">
                  {[
                    { f: "Load Time", n: "Under 0.5s", w: "2–5s" },
                    { f: "PageSpeed Score", n: "99+", w: "50–70" },
                    { f: "Custom Animations", n: "✅ Yes", w: "❌ No" },
                    { f: "Code Ownership", n: "100% Yours", w: "Platform Locked" },
                    { f: "SEO Architecture", n: "Custom-Built", w: "Generic" },
                    { f: "Mobile Performance", n: "Perfect", w: "Inconsistent" }
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white/[0.02]" : "bg-transparent"}>
                      <td className="p-4 border-b border-white/[0.02] text-white">{row.f}</td>
                      <td className="p-4 border-b border-white/[0.02] bg-[#111111] font-semibold text-[#A855F7]">{row.n}</td>
                      <td className="p-4 border-b border-white/[0.02]">{row.w}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
            <Link to="/contact" className="inline-block font-semibold text-[14px] text-white px-[32px] py-[14px] rounded-lg bg-[#7C3AED] shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:bg-[#6D28D9] hover:shadow-[0_0_30px_rgba(124,58,237,0.6)] hover:scale-[1.02] transition-all duration-150">
              Start Your Project
            </Link>
          </motion.div>

        </div>
      </section>

    </div>
  )
}
