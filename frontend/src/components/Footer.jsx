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

            {/* WhatsApp */}
            <a
              href="https://wa.me/9177122356"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/[0.015] border border-white/5 rounded-full text-slate-400 hover:text-accent-indigo hover:border-glow-cyan/30 hover:shadow-[0_0_15px_rgba(34,197,94,0.35)] transition-all duration-300"
              aria-label="WhatsApp"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 1.977 14.07 .953 11.453.953c-5.437 0-9.862 4.371-9.866 9.802-.001 1.64.453 3.24 1.314 4.676l-.991 3.616 3.705-.96c1.385.748 2.929 1.148 4.432 1.148zm11.383-7.53c-.26-.13-1.538-.759-1.776-.847-.238-.088-.413-.13-.587.13-.174.26-.673.847-.825 1.021-.152.174-.304.195-.564.065-.26-.13-1.097-.404-2.09-1.286-.772-.687-1.293-1.537-1.445-1.798-.152-.26-.016-.401.114-.53.117-.116.26-.304.39-.456.13-.152.174-.26.26-.434.088-.174.043-.326-.022-.456-.065-.13-.587-1.413-.804-1.935-.211-.51-.427-.44-.587-.448-.152-.007-.326-.008-.5-.008-.174 0-.456.065-.694.326-.239.26-.911.891-.911 2.174 0 1.283.933 2.522 1.063 2.7.13.174 1.837 2.806 4.449 3.931.622.268 1.107.427 1.485.547.624.198 1.192.171 1.64.103.5-.076 1.538-.629 1.756-1.237.217-.609.217-1.13.152-1.238-.065-.109-.239-.174-.499-.304z" />
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
