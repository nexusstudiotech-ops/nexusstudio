import React, { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'

// Animations
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

// Stats Counter Hook
function useCounter(end, duration = 2000) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (!isInView) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }
    window.requestAnimationFrame(step)
  }, [isInView, end, duration])

  return [count, ref]
}

function StatCounter({ target, label, suffix }) {
  const [count, ref] = useCounter(target)
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-jakarta font-extrabold text-white mb-2">
        {count}{suffix}
      </div>
      <div className="text-[13px] font-jakarta font-medium text-white/75 uppercase tracking-wide">
        {label}
      </div>
    </div>
  )
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

export default function Home() {
  return (
    <div className="bg-[#050505] min-h-screen font-jakarta text-[#9CA3AF]">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-[#050505]">
        {/* MANDATORY HERO ORBIT ARCH */}
        <div className="hero-glow-orbit" />

        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col items-center">
            
            <motion.h1 variants={fadeUp} className="font-jakarta font-extrabold text-[48px] md:text-[88px] leading-[1.05] tracking-[-0.02em] text-white mb-6">
              Scale Your Digital<br/>
              <span className="text-[#A855F7]">Presence.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="font-jakarta font-normal text-[17px] text-[#9CA3AF] max-w-[520px] mx-auto leading-[1.7] mb-10">
              We engineer ultra-premium websites — fast loading, conversion-optimized, and built exclusively for high-scale, ambitious organizations.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-20 justify-center">
              <Link to="/contact" className="font-jakarta font-semibold text-[14px] text-white px-[22px] py-[10px] rounded-lg bg-[#7C3AED] shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:bg-[#6D28D9] hover:shadow-[0_0_30px_rgba(124,58,237,0.6)] hover:scale-[1.02] transition-all duration-150">
                Start Your Project
              </Link>
            </motion.div>



          </motion.div>
        </div>
      </section>

      {/* INFINITE SCROLLING TICKER */}
      <div className="w-full overflow-hidden border-y border-white/[0.06] py-4 bg-[#050505]">
        <div className="flex w-max items-center gap-8 animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 text-[12px] font-jakarta font-bold text-[#9CA3AF] tracking-widest uppercase">
              <span>PHOTOGRAPHY WEBSITES</span> <span className="text-[#7C3AED]">•</span>
              <span>VIDEOGRAPHER PORTFOLIOS</span> <span className="text-[#7C3AED]">•</span>
              <span>IPHONE CREATOR SITES</span> <span className="text-[#7C3AED]">•</span>
              <span>PERSONAL BRANDS</span> <span className="text-[#7C3AED]">•</span>
              <span>WEDDING PHOTOGRAPHY</span> <span className="text-[#7C3AED]">•</span>
              <span>LANDING PAGES</span> <span className="text-[#7C3AED]">•</span>
              <span>BUSINESS WEBSITES</span> <span className="text-[#7C3AED]">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* SOCIAL PROOF BAR */}
      <div className="w-full border-b border-white/[0.06] py-12 section-dark-purple">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-6 relative z-20">
          <div className="flex items-center gap-3">
            <span className="text-yellow-500 text-lg">⭐⭐⭐⭐⭐</span>
            <span className="font-jakarta text-[14px] text-white">Boutique Architecture. Rated 5.0/5 stars by our select clients.</span>
          </div>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            {['Photographers', 'Videographers', 'Agencies', 'Brands'].map(niche => (
              <div key={niche} className="px-4 py-2 bg-[#111111] border border-white/[0.06] rounded-full text-white font-jakarta text-[13px] font-bold hover:border-[#7C3AED]/40 hover:shadow-[0_0_15px_rgba(124,58,237,0.15)] transition-all">
                {niche}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WHAT WE BUILD */}
      <section className="py-[80px] md:py-[120px] section-dark-purple relative z-20 overflow-hidden">
        {/* Architectural Monospaced Blueprint Tags */}
        <div className="font-mono text-[9px] text-[#A855F7]/30 absolute top-6 left-6 tracking-widest uppercase hidden sm:block">[ 17.3850° N, 78.4867° E // HYD.INDIA ]</div>
        <div className="font-mono text-[9px] text-[#A855F7]/30 absolute top-6 right-6 tracking-widest uppercase hidden sm:block">[ DWG. NO. NS-02 // PURE-CODE ]</div>
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 relative z-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-16">
            <span className="text-[#A855F7] font-jakarta font-bold text-[11px] tracking-[0.1em] uppercase mb-4 block">OUR CRAFT</span>
            <h2 className="font-jakarta font-bold text-[32px] md:text-[42px] tracking-[-0.02em] text-white mb-6">
              Innovating Tomorrow. <span className="text-[#A855F7]">Building Today.</span>
            </h2>
            <p className="font-jakarta font-normal text-[17px] text-[#9CA3AF] max-w-[520px] mx-auto leading-[1.7]">
              We build ultra-premium custom websites for ambitious brands — fast, optimized, and engineered to convert.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <FeatureCard 
              highlight={true}
              icon="⚡"
              title="Blazing Fast Performance"
              desc="99+ PageSpeed scores. Zero bloat, pure React code."
            />
            <FeatureCard 
              icon="</>"
              title="Custom React Builds"
              desc="Pixel-perfect Next.js applications, not templates."
            />
            <FeatureCard 
              icon="🎬"
              title="Framer Motion Animations"
              desc="Custom cursors, scroll reveals, and micro-interactions."
            />
            <FeatureCard 
              icon="📱"
              title="Mobile-First Design"
              desc="Flawless on every screen size and device."
            />
            <FeatureCard 
              icon="🔍"
              title="SEO Architecture"
              desc="Built to rank. Structured for search engine dominance."
            />
            <FeatureCard 
              icon="💬"
              title="WhatsApp Integration"
              desc="Direct client inquiry pipeline built into every site."
            />
          </motion.div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="w-full bg-[#7C3AED] py-20 relative z-20">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <StatCounter target={15} suffix="" label="Select Clients Served" />
            <StatCounter target={98} suffix="+" label="Avg PageSpeed Score" />
            <StatCounter target={5} suffix=" Days" label="Avg Delivery Time" />
            <StatCounter target={100} suffix="%" label="Client Satisfaction" />
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-[80px] md:py-[120px] section-dark-purple">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 relative z-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-20">
            <span className="text-[#A855F7] font-jakarta font-bold text-[11px] tracking-[0.1em] uppercase mb-4 block">HOW IT WORKS</span>
            <h2 className="font-jakarta font-bold text-[32px] md:text-[42px] tracking-[-0.02em] text-white">
              From Idea to <span className="text-[#A855F7]">Live in 7 Days</span>
            </h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="relative">
            {/* Desktop connecting line */}
            <div className="hidden md:block absolute top-24 left-0 w-full h-[1px] border-t border-dashed border-white/20" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { num: "01", icon: "🔍", title: "Discovery Call", desc: "We learn your goals and vision." },
                { num: "02", icon: "🎨", title: "Design Draft", desc: "Full visual prototype in 2 days." },
                { num: "03", icon: "⚙️", title: "Development", desc: "Pure React build, animations, SEO." },
                { num: "04", icon: "🚀", title: "Launch", desc: "Live deployment + full code ownership." }
              ].map((step, i) => (
                <motion.div key={i} variants={fadeUp} className="relative bg-[#111111] border border-white/[0.06] rounded-[14px] p-6 text-center hover:border-[#7C3AED]/40 hover:shadow-[0_0_24px_rgba(124,58,237,0.1)] transition-all duration-200">
                  <div className="text-[48px] font-jakarta font-extrabold text-[#7C3AED] mb-4 opacity-50">{step.num}</div>
                  <div className="w-12 h-12 bg-[#1A1A1A] rounded-lg mx-auto flex items-center justify-center text-xl mb-6 relative z-10">{step.icon}</div>
                  <h3 className="font-jakarta font-semibold text-[15px] text-white mb-2">{step.title}</h3>
                  <p className="font-jakarta font-normal text-[13px] text-[#9CA3AF]">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-[80px] md:py-[120px] bg-[#050505] border-y border-white/[0.06] relative z-20">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-16">
            <span className="text-[#A855F7] font-jakarta font-bold text-[11px] tracking-[0.1em] uppercase mb-4 block">TRUSTED BY INNOVATORS</span>
            <h2 className="font-jakarta font-bold text-[32px] md:text-[42px] tracking-[-0.02em] text-white">
              Real Impact. <span className="text-[#A855F7]">Proven Results.</span>
            </h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "Arjun Pillai", role: "Wedding Photographer, Hyderabad", quote: "Working with Nexus Studio was unlike any agency experience. They delivered a React site scoring 99 on PageSpeed — my bookings doubled in the first month." },
              { name: "Priya Mehta", role: "Brand Photographer, Mumbai", quote: "The attention to detail was incredible. Every animation, every hover state — it felt like a ₹5 lakh site at a fraction of the cost." },
              { name: "Siddharth Rao", role: "Videographer, Bangalore", quote: "Fastest turnaround I've ever seen. 5 days from brief to live. The animations alone had clients messaging me." }
            ].map((t, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-[#111111] border border-white/[0.06] p-6 rounded-[14px]">
                <div className="text-yellow-500 text-sm mb-4">⭐⭐⭐⭐⭐</div>
                <p className="font-jakarta font-normal text-[14px] text-white leading-[1.7] mb-8">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-[#7C3AED] bg-[#1A1A1A] flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{t.name.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="font-jakarta font-semibold text-[13px] text-white">{t.name}</div>
                    <div className="font-jakarta text-[11px] text-[#9CA3AF]">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-[120px] md:py-[160px] text-center relative overflow-hidden section-dark-purple">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#7C3AED]/10 blur-[100px] rounded-full pointer-events-none z-10" />
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 relative z-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="flex flex-col items-center">
            <motion.h2 variants={fadeUp} className="font-jakarta font-extrabold text-[36px] md:text-[48px] tracking-[-0.02em] text-white mb-6">
              Stop Losing Clients to<br/>
              <span className="text-[#A855F7]">Your Competition.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="font-jakarta font-normal text-[17px] text-[#9CA3AF] max-w-[520px] mx-auto leading-[1.7] mb-10">
              Get in touch today to deploy a rapid-loading, conversion-optimized website that makes your brand impossible to ignore.
            </motion.p>
            <motion.div variants={fadeUp} className="w-full max-w-[360px] mx-auto flex flex-col gap-4">
              <Link to="/contact" className="w-full text-center font-jakarta font-semibold text-[14px] text-white px-[22px] py-[14px] rounded-lg bg-[#7C3AED] shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:bg-[#6D28D9] hover:shadow-[0_0_30px_rgba(124,58,237,0.6)] hover:scale-[1.02] transition-all duration-150">
                Consult An Architect
              </Link>
              <p className="font-jakarta text-[13px] text-[#9CA3AF]">
                No commitment. No hidden fees. 5-day delivery.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
