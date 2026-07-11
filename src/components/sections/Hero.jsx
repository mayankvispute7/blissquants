import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Premium Background Chart Lines
const AnimatedChartLines = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
    <svg className="w-full h-full opacity-40" preserveAspectRatio="none" viewBox="0 0 1440 600">
      <motion.path
        d="M -100 250 C 200 350, 300 150, 500 250 C 700 350, 800 150, 1000 250 C 1200 350, 1300 200, 1500 250"
        fill="transparent"
        stroke="#FFFFFF"
        strokeWidth="1"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.08 }}
        transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.path
        d="M -100 450 C 200 450, 300 250, 500 350 C 700 450, 800 150, 1000 250 C 1200 350, 1300 100, 1500 150"
        fill="transparent"
        stroke="#84C225"
        strokeWidth="2"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.4 }}
        transition={{ duration: 5, ease: "easeInOut", delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
      />
    </svg>
  </div>
);

// The "Dancing" Interactive Letter Component
const InteractiveLetter = ({ char }) => {
  const dodgeX = Math.random() > 0.5 ? 4 : -4;
  const dodgeY = Math.random() > 0.5 ? 4 : -4;

  return (
    <motion.span
      whileHover={{ 
        x: dodgeX, 
        y: dodgeY, 
        scale: 1.05,
        rotate: (Math.random() - 0.5) * 3 
      }}
      transition={{ type: "spring", stiffness: 400, damping: 10, mass: 0.5 }}
      className="inline-block cursor-default"
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
};

const DancingText = ({ text, className }) => {
  return (
    <span className={`inline-block ${className}`}>
      {text.split("").map((char, index) => (
        <InteractiveLetter key={index} char={char} />
      ))}
    </span>
  );
};

export default function Hero() {
  // Track mouse position for the spotlight effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // 1. Scroll Tracking Logic for the Zoom Out Effect
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  // As the user scrolls, shrink the hero to 85% and fade it out slightly
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    // h-[150vh] gives extra scroll distance, z-10 ensures it stays UNDER the Features page
    <section ref={sectionRef} className="relative z-10 bg-[#3B3531] h-[150vh]">
      
      {/* Sticky container locks exactly into 1 viewport height (100vh) */}
      <div 
        onMouseMove={handleMouseMove}
        className="sticky top-0 h-screen w-full overflow-hidden bg-[#3B3531]"
      >
        
        {/* Animated Wrapper for the Scroll Zoom effect */}
        <motion.div 
          style={{ scale, opacity }}
          className="relative w-full h-full flex flex-col items-center justify-center origin-top"
        >
          {/* 🚀 Magical Cursor Spotlight Effect */}
          <div 
            className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(132, 194, 37, 0.15), transparent 80%)`
            }}
          />

          <AnimatedChartLines />

          {/* Main Content Layout */}
          <div className="relative z-30 w-full max-w-7xl mx-auto px-6 sm:px-8 flex flex-col items-center justify-center text-center pt-32 pb-20 mt-10 md:mt-0 pointer-events-none">
            
            {/* Enable pointer events on interactive elements so they can be hovered/clicked */}
            <div className="pointer-events-auto flex flex-col items-center">
              
              {/* Subtitle Pill */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="mb-6 md:mb-8"
              >
                <span className="px-5 py-2 border border-[#84C225]/30 rounded-full text-[#84C225] text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] bg-[#84C225]/5 backdrop-blur-sm">
                  Delta Hedging & Software Solutions
                </span>
              </motion.div>

              {/* Wise.com Style Typography */}
              <motion.h1 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem] font-black tracking-[-0.04em] md:tracking-[-0.06em] leading-[0.95] md:leading-[0.9] mb-8"
              >
                <DancingText text="MASTER WEALTH." className="text-[#FFFFFF]" />
                <DancingText text="CONQUER FEAR." className="text-[#84C225]" />
              </motion.h1>

              {/* Description Text */}
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="text-sm sm:text-base md:text-lg font-sans text-[#FFFFFF]/70 leading-relaxed max-w-[95%] sm:max-w-xl md:max-w-2xl mx-auto mb-10 md:mb-12 font-medium"
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
                <button className="w-full sm:w-auto bg-[#84C225] text-[#3B3531] font-sans font-bold text-sm md:text-base px-8 md:px-10 py-3.5 md:py-4 rounded-full transition-transform duration-500 ease-[0.16,1,0.3,1] hover:scale-105 hover:bg-[#95D600]">
                  Start Your Journey
                </button>
                <button className="w-full sm:w-auto bg-transparent text-[#FFFFFF] border border-[#FFFFFF]/20 font-sans font-medium text-sm md:text-base px-8 md:px-10 py-3.5 md:py-4 rounded-full transition-all duration-500 ease-[0.16,1,0.3,1] hover:bg-[#FFFFFF]/5 hover:border-[#FFFFFF]/50 hover:text-white">
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