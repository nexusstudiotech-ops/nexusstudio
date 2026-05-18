import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Global Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import { ScrollProgress } from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import { CustomCursor } from './components/CustomCursor';

// Lazy Loaded Pages (T2 - Code Splitting)
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Animated Routes Wrapper to capture useLocation for AnimatePresence
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={
        <div className="h-screen w-full bg-[#0A0A0A] flex items-center justify-center select-none font-syne text-accent-indigo/40 tracking-widest text-xs uppercase animate-pulse">
          Syncing Architecture...
        </div>
      }>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      {/* 1. Global Performance/UX upgrades */}
      <CustomCursor />
      <ScrollProgress />
      <ScrollToTop />
      
      <div className="min-h-screen bg-base-slate font-dmsans selection:bg-accent-indigo selection:text-white flex flex-col justify-between relative">
        
        {/* 2. Top Navigation */}
        <Navbar />
        
        {/* 3. Core Page Content with Transitions */}
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        
        {/* 4. Bottom WhatsApp Widget */}
        <WhatsAppButton />
        <BackToTop />

        
        {/* 5. Polished Footer */}
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;
