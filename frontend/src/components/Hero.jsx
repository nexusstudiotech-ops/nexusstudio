import React from 'react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center justify-center min-h-[90vh]">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sea-green/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
          High-Performance <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            Web Architecture
          </span>
        </h1>
        
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400 mb-10 leading-relaxed">
          We engineer premium digital real estate. Fast, scalable, and optimized for maximum conversions. 
          Built exclusively for ambitious brands.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a 
            href="#pricing" 
            className="w-full sm:w-auto px-8 py-4 bg-sea-green text-white rounded-md font-medium text-lg hover:bg-[#236b4a] hover:shadow-[0_0_20px_rgba(46,132,94,0.6)] transition-all duration-300 transform hover:-translate-y-1"
          >
            View Pricing
          </a>
          <a 
            href="#contact" 
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-gray-700 text-white rounded-md font-medium text-lg hover:border-white transition-all duration-300"
          >
            Start a Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
