import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-base-slate border-t border-white/[0.04] py-12 relative overflow-hidden font-dmsans">
      {/* Glow background accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[150px] bg-accent-indigo/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center pb-8 border-b border-white/[0.04]">
          
          {/* Logo & Info */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <Link to="/" className="flex items-center cursor-pointer group">
              <span className="text-white text-2xl font-syne font-extrabold tracking-tighter relative inline-block">
                N
                <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-brand-white group-hover:bg-accent-indigo transition-colors duration-300"></span>
              </span>
              <span className="ml-2 text-accent-indigo text-xl font-syne font-bold tracking-wide">
                nexus studio
              </span>
            </Link>
            <p className="text-slate-400/60 text-xs sm:text-sm text-center md:text-left font-light">
              Engineering premium digital real estate & high-performance automation systems.
            </p>
          </div>

          {/* Page Links */}
          <div className="flex justify-center space-x-6">
            <Link to="/about" className="text-slate-400 hover:text-white transition-colors duration-300 text-xs font-syne font-bold uppercase tracking-wider">About</Link>
            <Link to="/services" className="text-slate-400 hover:text-white transition-colors duration-300 text-xs font-syne font-bold uppercase tracking-wider">Services</Link>
            <Link to="/pricing" className="text-slate-400 hover:text-white transition-colors duration-300 text-xs font-syne font-bold uppercase tracking-wider">Pricing</Link>
            <Link to="/contact" className="text-slate-400 hover:text-white transition-colors duration-300 text-xs font-syne font-bold uppercase tracking-wider">Contact</Link>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end space-x-4">
            {/* Instagram */}
            <a
              href="https://instagram.com/nexusstudio"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/[0.015] border border-white/5 rounded-full text-slate-400 hover:text-accent-indigo hover:border-glow-cyan/30 hover:shadow-[0_0_15px_rgba(34,197,94,0.35)] transition-all duration-300"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
              </svg>
            </a>

            {/* Twitter/X */}
            <a
              href="https://x.com/nexusstudio"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/[0.015] border border-white/5 rounded-full text-slate-400 hover:text-accent-indigo hover:border-glow-cyan/30 hover:shadow-[0_0_15px_rgba(34,197,94,0.35)] transition-all duration-300"
              aria-label="Twitter"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>

        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-[11px] text-slate-400/40 font-mono">
          <p>&copy; {new Date().getFullYear()} Nexus Studio. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0 select-none">
            <span className="hover:text-white cursor-pointer transition-colors duration-300">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors duration-300">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
