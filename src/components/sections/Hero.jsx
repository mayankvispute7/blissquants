import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BarChart3, TrendingUp } from 'lucide-react';

// Flawless, Subtle Diagonal Line Chart
const InfiniteClimbingChart = () => {
  // Primary trading trend (Jagged, upward climbing)
  const primaryPath = "M 0 1000 L 150 880 L 250 920 L 450 600 L 550 680 L 750 250 L 850 350 L 1000 0";
  
  // Secondary background line (Fainter, adds depth)
  const secondaryPath = "M 0 1000 L 200 950 L 400 750 L 600 800 L 800 400 L 1000 0";

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-[#3B3531]">
      
      {/* 1. Static Technical Grid - Very faint */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      ></div>

      {/* 2. Full-Screen SVG Container */}
      <svg className="absolute inset-0 w-full h-full z-10" viewBox="0 0 1000 1000" preserveAspectRatio="none">
        
        {/* 
          The Perpetual Climbing Animation Wrapper 
          Drifting very slowly (duration: 35s) for a smooth, ambient feel
        */}
        <motion.g
          animate={{ x: [0, 1000], y: [0, -1000] }}
          transition={{ ease: "linear", duration: 35, repeat: Infinity }}
        >
          
          {/* Instance 1: Center */}
          <g>
            <path d={secondaryPath} fill="none" stroke="#FFFFFF" strokeWidth="1" opacity="0.05" />
            <path 
              d={primaryPath} 
              fill="none" 
              stroke="#84C225" 
              strokeWidth="1.5" 
              opacity="0.35"
              style={{ filter: 'drop-shadow(0px 0px 4px rgba(132,194,37,0.3))' }} 
            />
          </g>

          {/* Instance 2: Bottom-Left (Waiting off-screen) */}
          <g transform="translate(-1000, 1000)">
            <path d={secondaryPath} fill="none" stroke="#FFFFFF" strokeWidth="1" opacity="0.05" />
            <path 
              d={primaryPath} 
              fill="none" 
              stroke="#84C225" 
              strokeWidth="1.5" 
              opacity="0.35"
              style={{ filter: 'drop-shadow(0px 0px 4px rgba(132,194,37,0.3))' }} 
            />
          </g>

        </motion.g>
      </svg>
    </div>
  );
};

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  // As the user scrolls down, the hero smoothly zooms out and fades
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    // h-[150vh] gives extra scroll distance, z-10 ensures it stays under the next page
    <section ref={sectionRef} className="relative z-10 bg-[#3B3531] h-[150vh]">
      
      {/* Sticky container locks exactly into 1 viewport height (100vh) */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#3B3531]">
        
        {/* Animated Wrapper for the Scroll Zoom effect */}
        <motion.div 
          style={{ scale, opacity }}
          className="relative w-full h-full flex flex-col items-center justify-center origin-top"
        >
          
          {/* Edge-to-Edge Subtle Climbing Chart */}
          <InfiniteClimbingChart />

          {/* Main Content Layout */}
          <div className="relative z-30 w-full max-w-7xl mx-auto px-6 sm:px-8 flex flex-col items-center justify-center text-center pt-32 pb-20 mt-10 md:mt-0 pointer-events-none">
            
            <div className="pointer-events-auto flex flex-col items-center">
              
              {/* Subtitle Pill */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="mb-6 md:mb-8"
              >
                <span className="px-5 py-2 border border-[#84C225]/30 rounded-full text-[#84C225] text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] bg-[#84C225]/10 backdrop-blur-sm">
                  Delta Hedging & Software Solutions
                </span>
              </motion.div>

              {/* Strict, Technical Typography */}
              <motion.h1 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                style={{ fontFamily: '"Space Grotesk", "Inter", sans-serif' }}
                className="flex flex-col items-center text-[4rem] sm:text-[5rem] md:text-[6.5rem] lg:text-[7.5rem] font-black tracking-tighter leading-[0.95] mb-8"
              >
                <span className="text-[#FFFFFF] drop-shadow-lg">MASTER WEALTH.</span>
                <span className="text-[#84C225] drop-shadow-lg">CONQUER FEAR.</span>
              </motion.h1>

              {/* Description Text */}
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="text-sm sm:text-base md:text-lg font-sans text-[#FFFFFF]/80 leading-relaxed max-w-[95%] sm:max-w-xl md:max-w-2xl mx-auto mb-10 md:mb-12 font-medium drop-shadow-md"
              >
                Benefit through hedging the risk. We combine institutional-grade quantitative analysis with relentless innovation to protect and grow your capital in any market condition.
              </motion.p>

              {/* Action Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto px-4 sm:px-0"
              >
                <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#84C225] text-[#3B3531] font-sans font-bold text-sm md:text-base px-8 md:px-10 py-3.5 md:py-4 rounded-full transition-transform duration-500 ease-[0.16,1,0.3,1] hover:scale-105 hover:bg-[#95D600]">
                  <TrendingUp size={18} />
                  Start Your Journey
                </button>
                <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#3B3531]/80 text-[#FFFFFF] border border-[#FFFFFF]/30 font-sans font-medium text-sm md:text-base px-8 md:px-10 py-3.5 md:py-4 rounded-full transition-all duration-500 ease-[0.16,1,0.3,1] hover:bg-[#FFFFFF]/10 hover:border-[#FFFFFF]/60 hover:text-white backdrop-blur-sm">
                  <BarChart3 size={18} className="text-[#84C225]" />
                  Explore Offerings
                </button>
              </motion.div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}