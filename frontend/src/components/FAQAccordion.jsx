import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: "Do you use pre-made WordPress or Wix templates?",
    answer: "No. We skip standard heavy site-builders completely. Everything we deploy is code-engineered using custom React, Tailwind CSS, Vite, and Node.js. This ensures maximum speeds, zero vulnerability bloats, and unmatched performance."
  },
  {
    question: "What is your typical project delivery timeline?",
    answer: "For Starter projects, we typically ship within 5-7 business days. Business and Enterprise architecture pipelines generally take between 2 to 4 weeks depending on the complexity of automation systems (n8n workflows) and AI integration models."
  },
  {
    question: "What does n8n Business Process Automation actually do?",
    answer: "It places your standard manual data operations on autopilot. For example, when a client signs a form, n8n can automatically register them in your CRM, update your vector database, ping your Slack channel, and fire an email sequence automatically without you touching a button."
  },
  {
    question: "Are there any hidden recurring fees?",
    answer: "None. We charge a clean flat fee per project deployment. Hosting costs and standard API calls are set up directly in your accounts so you maintain 100% digital sovereignty without middleman markup fees."
  }
]

export function FAQAccordion() {
  const [openIdx, setOpenIdx] = useState(0) // Default first item open

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, idx) => {
        const isOpen = openIdx === idx
        
        return (
          <div 
            key={idx} 
            className={`border border-white/5 rounded-xl bg-white/[0.015] backdrop-blur-md overflow-hidden transition-all duration-300 ${
              isOpen ? 'border-glow-cyan/20 bg-white/[0.025]' : 'hover:border-white/10'
            }`}
          >
            {/* Question Bar Toggler */}
            <button
              onClick={() => setOpenIdx(isOpen ? -1 : idx)}
              className={`w-full flex items-center justify-between p-6 text-left font-syne font-bold text-sm sm:text-base text-white transition-all duration-300 ${
                isOpen ? 'border-l-2 border-[#22C55E] pl-5' : ''
              }`}
            >
              <span>{faq.question}</span>
              
              {/* Chevron Arrow Icon */}
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className={`text-slate-400 shrink-0 ml-4 ${isOpen ? 'text-[#22C55E]' : ''}`}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </motion.span>
            </button>

            {/* Answer Panel Container */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="p-6 pt-0 text-xs sm:text-sm text-slate-400 font-dmsans font-light leading-relaxed border-t border-white/[0.02]">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        )
      })}
    </div>
  )
}
