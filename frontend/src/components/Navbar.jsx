import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false)
    }
  }, [location.pathname, isMobileMenuOpen])

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' }
  ]

  const isActive = (path) => {
    if (path === '/' && location.pathname !== '/') return false
    return location.pathname.startsWith(path)
  }

  return (
    <>
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'py-4 bg-[#050505]/85 backdrop-blur-[12px] border-b border-white/[0.06]' 
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center gap-2 group">
                <div className="w-8 h-8 bg-[#111] rounded flex items-center justify-center border border-white/[0.06] group-hover:border-[#7C3AED]/40 transition-colors">
                  <span className="font-jakarta font-bold text-[#7C3AED] text-lg leading-none">N</span>
                </div>
                <span className="font-jakarta font-bold text-white tracking-tight">nexus studio</span>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {links.map((link) => (
                <Link 
                  key={link.name}
                  to={link.path}
                  className={`font-jakarta font-medium text-[14px] transition-colors duration-200 ${
                    isActive(link.path) 
                      ? 'text-[#A855F7]' 
                      : 'text-[#9CA3AF] hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-4">
              <Link 
                to="/contact" 
                className="font-jakarta font-medium text-[14px] text-white px-[22px] py-[10px] rounded-lg border border-white/20 hover:border-white/50 hover:bg-white/[0.04] transition-all duration-150"
              >
                Request a Demo
              </Link>
              <Link 
                to="/contact" 
                className="font-jakarta font-semibold text-[14px] text-white px-[22px] py-[10px] rounded-lg bg-[#7C3AED] shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:bg-[#6D28D9] hover:shadow-[0_0_30px_rgba(124,58,237,0.6)] hover:scale-[1.02] transition-all duration-150"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-white hover:text-[#A855F7] transition-colors"
                aria-label="Toggle Menu"
              >
                <div className="w-6 h-5 relative flex flex-col justify-between">
                  <span className={`w-full h-[2px] bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[9px]' : ''}`} />
                  <span className={`w-full h-[2px] bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                  <span className={`w-full h-[2px] bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
                </div>
              </button>
            </div>
            
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#050505] pt-24 px-4 pb-8 flex flex-col md:hidden"
          >
            <div className="flex flex-col gap-6 items-center">
              {links.map((link) => (
                <Link 
                  key={link.name}
                  to={link.path}
                  className={`font-jakarta text-2xl font-bold transition-colors ${
                    isActive(link.path) 
                      ? 'text-[#A855F7]' 
                      : 'text-white hover:text-[#A855F7]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="w-full h-[1px] bg-white/10 my-4" />
              <Link 
                to="/contact" 
                className="w-full text-center font-jakarta font-medium text-[16px] text-white py-4 rounded-lg border border-white/20"
              >
                Request a Demo
              </Link>
              <Link 
                to="/contact" 
                className="w-full text-center font-jakarta font-semibold text-[16px] text-white py-4 rounded-lg bg-[#7C3AED] shadow-[0_0_20px_rgba(124,58,237,0.4)]"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
