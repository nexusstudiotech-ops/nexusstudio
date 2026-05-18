import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectDetails: ''
  });
  
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ submitting: false, message: '', error: false });

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) {
      tempErrors.name = "Full name is required.";
    } else if (formData.name.trim().length < 3) {
      tempErrors.name = "Name must be at least 3 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      tempErrors.email = "Email address is required.";
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address.";
    }

    if (formData.phone.trim()) {
      const phoneRegex = /^[+]?[0-9\s-]{7,15}$/;
      if (!phoneRegex.test(formData.phone)) {
        tempErrors.phone = "Please enter a valid phone number format.";
      }
    }

    if (!formData.projectDetails.trim()) {
      tempErrors.projectDetails = "Project details are required.";
    } else if (formData.projectDetails.trim().length < 15) {
      tempErrors.projectDetails = "Please describe your project in at least 15 characters.";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) {
      setStatus({ submitting: false, message: 'Please fix the validation errors below.', error: true });
      return;
    }

    setStatus({ submitting: true, message: '', error: false });

    // 🔥 UPDATE YOUR WHATSAPP NUMBER HERE 🔥
    const WHATSAPP_NUMBER = "9177122356" 
    
    const message = `*New Lead from Nexus Studio!* 🚀\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone/WhatsApp:* ${formData.phone}\n\n*Project Details:*\n${formData.projectDetails}`;
    
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    setStatus({ submitting: false, message: 'Redirecting to WhatsApp...', error: false });
    setFormData({ name: '', email: '', phone: '', projectDetails: '' });
    setErrors({});
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="relative pt-28 bg-[#050505] text-[#9CA3AF] overflow-hidden min-h-screen font-jakarta"
    >
      
      {/* MANDATORY HERO ORBIT ARCH */}
      <div className="hero-glow-orbit" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Side Info Panel */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">
            <div className="space-y-4">
              <div className="inline-flex px-3.5 py-1.5 rounded-full bg-accent-indigo/10 border border-glow-cyan/20 text-accent-indigo text-[10px] font-syne font-bold uppercase tracking-widest">
                Deployment Pipeline
              </div>
              <h1 className="text-4xl sm:text-5xl font-syne font-extrabold tracking-tight text-white leading-tight">
                Let's Build the <span className="text-accent-indigo">Future</span>
              </h1>
              <p className="text-slate-400 text-base leading-relaxed font-light">
                Ready to wire your operations to run on autopilot? Submit your specifications and launch a highly premium system.
              </p>
            </div>

            <div className="space-y-6 pt-6 border-t border-white/[0.04]">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-accent-indigo/10 rounded-lg text-accent-indigo shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-syne font-bold text-white text-sm">Architect Communication</h4>
                  <a href="mailto:nexusstudio.tech@gmail.com" className="text-slate-400 hover:text-[#A855F7] transition-colors text-sm font-light">nexusstudio.tech@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-accent-indigo/10 rounded-lg text-accent-indigo shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-syne font-bold text-white text-sm">Response Time SLA</h4>
                  <p className="text-slate-400 text-sm font-light">Under 12 Hours (Guaranteed for Enterprise/Business)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Panel */}
          <div className="lg:col-span-7 bg-white/[0.015] border border-glow-cyan/20 rounded-2xl p-8 sm:p-12 shadow-2xl relative overflow-hidden group">
            
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-accent-indigo/5 rounded-full blur-[40px] pointer-events-none" />

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name */}
              <div className="space-y-2">
                <label htmlFor="name" className="block text-xs font-semibold text-slate-400">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/[0.04] border ${
                    errors.name ? 'border-red-500/50' : 'border-white/[0.08]'
                  } rounded-lg text-white focus:outline-none focus:border-glow-cyan focus:ring-[3px] focus:ring-brand-green/10 transition-all duration-300 text-sm`}
                  placeholder="e.g., John Sterling"
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1 font-light">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-xs font-semibold text-slate-400">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/[0.04] border ${
                    errors.email ? 'border-red-500/50' : 'border-white/[0.08]'
                  } rounded-lg text-white focus:outline-none focus:border-glow-cyan focus:ring-[3px] focus:ring-brand-green/10 transition-all duration-300 text-sm`}
                  placeholder="e.g., john@firmware.co"
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1 font-light">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-xs font-semibold text-slate-400">Phone Number <span className="text-white/20">(Optional)</span></label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/[0.04] border ${
                    errors.phone ? 'border-red-500/50' : 'border-white/[0.08]'
                  } rounded-lg text-white focus:outline-none focus:border-glow-cyan focus:ring-[3px] focus:ring-brand-green/10 transition-all duration-300 text-sm`}
                  placeholder="e.g., +91 98765 43210"
                />
                {errors.phone && (
                  <p className="text-red-400 text-xs mt-1 font-light">{errors.phone}</p>
                )}
              </div>

              {/* Project Details */}
              <div className="space-y-2">
                <label htmlFor="projectDetails" className="block text-xs font-semibold text-slate-400">Project Details & Automation Scope</label>
                <textarea
                  id="projectDetails"
                  name="projectDetails"
                  rows="5"
                  value={formData.projectDetails}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/[0.04] border ${
                    errors.projectDetails ? 'border-red-500/50' : 'border-white/[0.08]'
                  } rounded-lg text-white focus:outline-none focus:border-glow-cyan focus:ring-[3px] focus:ring-brand-green/10 transition-all duration-300 resize-none text-sm`}
                  placeholder="Tell us about your business, the pages required, and what pipelines you need automated..."
                ></textarea>
                {errors.projectDetails && (
                  <p className="text-red-400 text-xs mt-1 font-light">{errors.projectDetails}</p>
                )}
              </div>

              {/* Global Submission Alerts */}
              {status.message && (
                <div className={`p-4 rounded-md text-sm border font-light ${
                  status.error 
                    ? 'bg-red-950/20 border-red-800 text-red-400' 
                    : 'bg-accent-indigo/10 border-glow-cyan/30 text-accent-indigo shadow-[0_0_15px_rgba(34,197,94,0.15)]'
                }`}>
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={status.submitting}
                className="w-full py-4 bg-accent-indigo text-white rounded-lg font-syne font-bold text-xs uppercase tracking-widest hover:bg-accent-indigo-dim hover:shadow-[0_0_24px_rgba(34,197,94,0.5)] hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {status.submitting ? 'Submitting Specifications...' : 'Deploy Lead Specification'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
