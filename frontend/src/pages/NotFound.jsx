import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-sea-green/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 text-center space-y-6 max-w-md">
        <span className="text-sea-green text-sm font-mono uppercase tracking-widest font-semibold block animate-pulse">
          Error Code: 404
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          Coordinates <span className="text-sea-green">Lost</span>
        </h1>
        <p className="text-gray-400 text-sm leading-relaxed font-light">
          The digital real estate coordinate you requested does not exist or has been shifted in our operational layout.
        </p>
        <div className="pt-4">
          <Link 
            to="/" 
            className="inline-flex px-6 py-3 bg-sea-green text-white rounded-md font-semibold text-sm hover:bg-[#236b4a] hover:shadow-[0_0_15px_rgba(46,132,94,0.4)] transition-all duration-300"
          >
            Return to Core
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
