
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex flex-col items-center justify-center select-none ${className}`}>
      {/* Steam Icon - Two wavy lines as seen in the logo */}
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-1">
        <path d="M10 8C10 8 11.5 6 11.5 4C11.5 2 10 2 10 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M14 10C14 10 15.5 8 15.5 6C15.5 4 14 4 14 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
      
      {/* Brand Name - Rounded, Bold, Custom 'O' */}
      <div className="flex items-center font-bold tracking-tight text-white leading-none" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        <span className="text-4xl md:text-5xl">ESP</span>
        <div className="relative inline-block w-9 h-9 md:w-11 md:h-11 mx-1">
          {/* Coffee Bean 'O' */}
          <div className="absolute inset-0 border-[4.5px] border-white rounded-full flex items-center justify-center overflow-hidden">
             <div className="w-[3px] h-full bg-white rotate-[25deg]"></div>
          </div>
        </div>
      </div>
      
      {/* Tagline - Wide letter spacing */}
      <div className="text-[9px] md:text-[11px] uppercase tracking-[0.7em] text-white font-bold mt-1.5 opacity-90">
        COFFEE LOUNGE
      </div>
    </div>
  );
};

export default Logo;
