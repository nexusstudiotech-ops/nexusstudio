import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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

function FAQItem({ q, a }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="border-b border-white/[0.06] last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left group"
      >
        <span className="font-jakarta font-semibold text-[15px] text-white group-hover:text-[#A855F7] transition-colors">
          {q}
        </span>
        <span className={`text-[#7C3AED] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 font-jakarta text-[13px] text-[#9CA3AF] leading-[1.7] pr-8">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function PricingPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', details: '' })

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault()
    
    // 🔥 UPDATE YOUR WHATSAPP NUMBER HERE 🔥
    // Format: Country code followed by your number (e.g., 91 for India)
    // Do not include the '+' sign, spaces, or dashes.
    const WHATSAPP_NUMBER = "9177122356" 
    
    const message = `*New Lead from Nexus Studio!* 🚀\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone/WhatsApp:* ${formData.phone}\n\n*Project Details:*\n${formData.details}`
    
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handlePackageSelect = (packageName) => {
    const WHATSAPP_NUMBER = "9177122356"
    const message = `Hi! I am interested in the *${packageName}* package. Can we discuss the next steps?`
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <div className="bg-[#050505] min-h-screen font-jakarta text-[#9CA3AF] relative overflow-hidden">
      
      {/* Hero - BLACK */}
      <section className="pt-40 pb-[80px] md:pb-[120px] bg-[#050505] relative z-20">
        {/* MANDATORY HERO ORBIT ARCH */}
        <div className="hero-glow-orbit" />
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-center">
            <motion.span variants={fadeUp} className="text-[#A855F7] font-bold text-[11px] tracking-[0.1em] uppercase mb-4 block">
              INVESTMENTS
            </motion.span>
            <motion.h1 variants={fadeUp} className="font-extrabold text-[42px] md:text-[64px] tracking-[-0.02em] text-white mb-6">
              Flat, Transparent <span className="text-[#A855F7]">Pricing</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="font-normal text-[17px] max-w-[520px] mx-auto leading-[1.7]">
              No hidden fees. No retainers. 100% code ownership.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Grid & Comparison - DARK PURPLE */}
      <section className="py-[80px] md:py-[120px] section-dark-purple relative overflow-hidden">
        {/* Architectural Monospaced Blueprint Tags */}
        <div className="font-mono text-[9px] text-[#A855F7]/30 absolute top-6 left-6 tracking-widest uppercase hidden sm:block">[ PRICING SCHEMA // DEPLOYMENT PLANS ]</div>
        <div className="font-mono text-[9px] text-[#A855F7]/30 absolute top-6 right-6 tracking-widest uppercase hidden sm:block">[ DWG. NO. NS-05 // PIPELINE ]</div>
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 relative z-20">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-[120px]">
            {/* Starter */}
            <motion.div variants={fadeUp} className="bg-[#111111] border border-white/[0.06] rounded-[14px] p-8 flex flex-col hover:border-[#7C3AED]/40 hover:shadow-[0_0_24px_rgba(124,58,237,0.1)] transition-all duration-200">
              <h3 className="font-bold text-[24px] text-white mb-2">Starter</h3>
              <p className="text-[13px] mb-6 min-h-[40px]">For solo creators & photographers</p>
              <div className="mb-8 border-b border-white/[0.06] pb-8">
                <span className="font-extrabold text-[42px] text-white tracking-tight">₹3,999</span>
                <span className="text-[14px]">/project</span>
              </div>
              <ul className="flex-1 space-y-4 mb-8">
                {["1 Custom Homepage", "Fully Responsive", "Custom Cursor & Floating Icons", "WhatsApp Integration", "5-Day Delivery"].map((feat, i) => (
                  <li key={i} className="flex items-start text-[13px]">
                    <span className="text-[#7C3AED] mr-3 mt-0.5">✓</span>
                    {feat}
                  </li>
                ))}
              </ul>
              <button onClick={() => handlePackageSelect('Starter')} className="w-full text-center font-medium text-[14px] text-white px-[22px] py-[10px] rounded-lg border border-white/20 hover:border-white/50 hover:bg-white/[0.04] transition-all duration-150">
                Select Plan
              </button>
            </motion.div>

            {/* Business */}
            <motion.div variants={fadeUp} className="bg-[#111111] border-2 border-[#7C3AED] rounded-[14px] p-8 flex flex-col relative transform md:scale-105 z-10 shadow-[0_0_40px_rgba(124,58,237,0.15)]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="bg-[#7C3AED] text-white text-[10px] font-bold uppercase tracking-widest py-1 px-4 rounded-full">
                  MOST POPULAR
                </span>
              </div>
              <h3 className="font-bold text-[24px] text-white mb-2">Business</h3>
              <p className="text-[13px] mb-6 min-h-[40px]">For studios and businesses</p>
              <div className="mb-8 border-b border-white/[0.06] pb-8">
                <span className="font-extrabold text-[42px] text-white tracking-tight">₹9,999</span>
                <span className="text-[14px]">/project</span>
              </div>
              <ul className="flex-1 space-y-4 mb-8">
                {["Up to 5 Pages", "Custom Form Validation", "Advanced Framer Motion Animations", "CMS Integration", "14-Day Delivery"].map((feat, i) => (
                  <li key={i} className="flex items-start text-[13px]">
                    <span className="text-[#7C3AED] mr-3 mt-0.5">✓</span>
                    {feat}
                  </li>
                ))}
              </ul>
              <button onClick={() => handlePackageSelect('Business')} className="w-full text-center font-semibold text-[14px] text-white px-[22px] py-[10px] rounded-lg bg-[#7C3AED] shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:bg-[#6D28D9] hover:shadow-[0_0_30px_rgba(124,58,237,0.6)] hover:scale-[1.02] transition-all duration-150">
                Select Plan
              </button>
            </motion.div>

            {/* Enterprise */}
            <motion.div variants={fadeUp} className="bg-[#111111] border border-white/[0.06] rounded-[14px] p-8 flex flex-col hover:border-[#7C3AED]/40 hover:shadow-[0_0_24px_rgba(124,58,237,0.1)] transition-all duration-200">
              <h3 className="font-bold text-[24px] text-white mb-2">Enterprise</h3>
              <p className="text-[13px] mb-6 min-h-[40px]">For large organizations</p>
              <div className="mb-8 border-b border-white/[0.06] pb-8">
                <span className="font-extrabold text-[42px] text-white tracking-tight">Custom</span>
              </div>
              <ul className="flex-1 space-y-4 mb-8">
                {["Unlimited Pages", "E-commerce Ready", "Custom Interactive Elements", "Advanced SEO & Analytics", "90-Day Support"].map((feat, i) => (
                  <li key={i} className="flex items-start text-[13px]">
                    <span className="text-[#7C3AED] mr-3 mt-0.5">✓</span>
                    {feat}
                  </li>
                ))}
              </ul>
              <button onClick={() => handlePackageSelect('Enterprise')} className="w-full text-center font-medium text-[14px] text-white px-[22px] py-[10px] rounded-lg border border-white/20 hover:border-white/50 hover:bg-white/[0.04] transition-all duration-150 mt-auto">
                Select Plan
              </button>
            </motion.div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 variants={fadeUp} className="font-bold text-[32px] text-white text-center mb-12">Compare Platforms</motion.h2>
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

        </div>
      </section>

      {/* FAQ - BLACK */}
      <section className="py-[80px] md:py-[120px] bg-[#050505] relative z-20">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-[800px] mx-auto">
            <motion.h2 variants={fadeUp} className="font-bold text-[32px] text-white text-center mb-12">Frequently Asked Questions</motion.h2>
            <motion.div variants={fadeUp} className="bg-[#111111] border border-white/[0.06] rounded-[14px] p-8">
              <FAQItem q="Do you use WordPress or Wix templates?" a="Never. Every site is custom-coded in React with Tailwind CSS and Framer Motion. No templates, no page builders, no exceptions." />
              <FAQItem q="What is your typical delivery timeline?" a="Starter sites in 5 days. Business packages in 14 days. Enterprise on a bespoke schedule agreed upfront." />
              <FAQItem q="Do you offer revisions?" a="Yes — unlimited revisions during the build phase until you're 100% satisfied before launch." />
              <FAQItem q="Are there hidden fees?" a="No. The price you see is the price you pay. No monthly retainers, no surprise charges." />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Form CTA - DARK PURPLE */}
      <section className="py-[80px] md:py-[120px] section-dark-purple relative overflow-hidden">
        {/* Architectural Monospaced Blueprint Tags */}
        <div className="font-mono text-[9px] text-[#A855F7]/30 absolute top-6 left-6 tracking-widest uppercase hidden sm:block">[ CONTACT FUNNEL // DIRECT ROUTE ]</div>
        <div className="font-mono text-[9px] text-[#A855F7]/30 absolute top-6 right-6 tracking-widest uppercase hidden sm:block">[ SYS.REF: INQUIRY_V1 ]</div>
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 relative z-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-[600px] mx-auto bg-[#111111] border border-white/[0.06] rounded-[14px] p-8 sm:p-12 text-center">
            <motion.h2 variants={fadeUp} className="font-bold text-[32px] text-white mb-8">
              Not sure which plan? <span className="text-[#A855F7]">Let's talk.</span>
            </motion.h2>
            <motion.form variants={fadeUp} className="space-y-4 text-left" onSubmit={handleWhatsAppSubmit}>
              <input type="text" required placeholder="Full Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-[#111111] border border-white/[0.08] rounded-lg p-3 text-white placeholder-white/40 focus:outline-none focus:border-[#7C3AED] transition-colors text-[14px]" />
              <input type="email" required placeholder="Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-[#111111] border border-white/[0.08] rounded-lg p-3 text-white placeholder-white/40 focus:outline-none focus:border-[#7C3AED] transition-colors text-[14px]" />
              <input type="text" required placeholder="Phone/WhatsApp" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full bg-[#111111] border border-white/[0.08] rounded-lg p-3 text-white placeholder-white/40 focus:outline-none focus:border-[#7C3AED] transition-colors text-[14px]" />
              <textarea placeholder="Project Details" required rows="4" value={formData.details} onChange={(e) => setFormData({...formData, details: e.target.value})} className="w-full bg-[#111111] border border-white/[0.08] rounded-lg p-3 text-white placeholder-white/40 focus:outline-none focus:border-[#7C3AED] transition-colors text-[14px] resize-none"></textarea>
              <button type="submit" className="w-full font-semibold text-[14px] text-white px-[22px] py-[12px] rounded-lg bg-[#7C3AED] shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:bg-[#6D28D9] hover:shadow-[0_0_30px_rgba(124,58,237,0.6)] hover:scale-[1.02] transition-all duration-150">
                Send Message →
              </button>
            </motion.form>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
