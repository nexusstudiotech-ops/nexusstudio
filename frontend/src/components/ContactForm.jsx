import React, { useState } from 'react'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectDetails: ''
  })
  
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ submitting: false, success: false, message: '' })

  const validate = () => {
    const tempErrors = {}
    if (!formData.name.trim()) tempErrors.name = "Name is required."
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required."
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Enter a valid email address."
    }

    if (!formData.projectDetails.trim()) {
      tempErrors.projectDetails = "Project details are required."
    } else if (formData.projectDetails.trim().length < 15) {
      tempErrors.projectDetails = "Must be at least 15 characters."
    }

    setErrors(tempErrors)
    return Object.keys(tempErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setStatus({ submitting: true, success: false, message: '' })

    // 🔥 UPDATE YOUR WHATSAPP NUMBER HERE 🔥
    // Format: Country code followed by your number (e.g., 91 for India)
    const WHATSAPP_NUMBER = "9177122356" 
    
    const message = `*New Lead from Nexus Studio!* 🚀\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone/WhatsApp:* ${formData.phone}\n\n*Project Details:*\n${formData.projectDetails}`
    
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    
    setStatus({ submitting: false, success: true, message: "Redirecting to WhatsApp..." })
    setFormData({ name: '', email: '', phone: '', projectDetails: '' })
    setErrors({})
  }

  return (
    <div className="bg-white/[0.025] backdrop-blur-[12px] border border-glow-cyan/20 rounded-2xl p-8 sm:p-10 shadow-2xl relative overflow-hidden group">
      
      {/* Glow highlight */}
      <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-accent-indigo/5 rounded-full blur-[40px] pointer-events-none" />

      <h3 className="text-xl sm:text-2xl font-syne font-extrabold text-white mb-6 text-center">
        Not sure which plan? Let's talk.
      </h3>

      {status.success ? (
        <div className="flex flex-col items-center justify-center py-12 space-y-4 text-center">
          {/* Animated Success Checkmark */}
          <div className="w-16 h-16 rounded-full bg-accent-indigo/10 border-2 border-glow-cyan flex items-center justify-center text-accent-indigo shadow-[0_0_20px_rgba(34,197,94,0.3)] animate-bounce">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h4 className="text-lg font-syne font-bold text-white">Transmission Successful</h4>
          <p className="text-sm text-slate-400 font-dmsans max-w-sm">
            {status.message}
          </p>
          <button 
            onClick={() => setStatus({ submitting: false, success: false, message: '' })}
            className="text-xs text-accent-indigo font-syne underline hover:text-accent-indigo-dim mt-4 uppercase tracking-widest"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5 font-dmsans">
          
          {/* Name */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-400">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g., John Sterling"
              className={`w-full bg-white/[0.04] border ${
                errors.name ? 'border-red-500/50' : 'border-white/[0.08]'
              } rounded-lg py-3 px-4 text-white placeholder-brand-silver/30 focus:outline-none focus:border-glow-cyan focus:ring-[3px] focus:ring-brand-green/10 transition-all duration-300 text-sm`}
            />
            {errors.name && <p className="text-red-400 text-[10px]">{errors.name}</p>}
          </div>

          {/* Email */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-400">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g., john@firmware.co"
              className={`w-full bg-white/[0.04] border ${
                errors.email ? 'border-red-500/50' : 'border-white/[0.08]'
              } rounded-lg py-3 px-4 text-white placeholder-brand-silver/30 focus:outline-none focus:border-glow-cyan focus:ring-[3px] focus:ring-brand-green/10 transition-all duration-300 text-sm`}
            />
            {errors.email && <p className="text-red-400 text-[10px]">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-400">Phone / WhatsApp <span className="text-white/20">(Optional)</span></label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g., +91 98765 43210"
              className="w-full bg-white/[0.04] border border-white/[0.08] rounded-lg py-3 px-4 text-white placeholder-brand-silver/30 focus:outline-none focus:border-glow-cyan focus:ring-[3px] focus:ring-brand-green/10 transition-all duration-300 text-sm"
            />
          </div>

          {/* Project Details */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-400">Tell us about your project</label>
            <textarea
              name="projectDetails"
              value={formData.projectDetails}
              onChange={handleChange}
              rows="4"
              placeholder="What are your goals, page count, and automation requirements?"
              className={`w-full bg-white/[0.04] border ${
                errors.projectDetails ? 'border-red-500/50' : 'border-white/[0.08]'
              } rounded-lg py-3 px-4 text-white placeholder-brand-silver/30 focus:outline-none focus:border-glow-cyan focus:ring-[3px] focus:ring-brand-green/10 transition-all duration-300 text-sm resize-none`}
            />
            {errors.projectDetails && <p className="text-red-400 text-[10px]">{errors.projectDetails}</p>}
          </div>

          {status.message && !status.success && (
            <div className="p-3 bg-red-950/20 border border-red-800/40 text-red-400 rounded-lg text-xs leading-relaxed">
              {status.message}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status.submitting}
            className="w-full py-4 bg-accent-indigo hover:bg-accent-indigo-dim text-white rounded-lg font-syne font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:shadow-[0_8px_28px_rgba(34,197,94,0.35)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {status.submitting ? (
              <>
                <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Processing...</span>
              </>
            ) : (
              <span>Send Message →</span>
            )}
          </button>
        </form>
      )}
    </div>
  )
}
