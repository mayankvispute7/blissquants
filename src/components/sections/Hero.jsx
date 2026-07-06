import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HoverLetterStagger = ({ text, delayOffset = 0, className = "" }) => {
  const words = text.split(" ");
  return (
    <span className={`flex justify-center flex-nowrap whitespace-nowrap ${className}`}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="overflow-hidden inline-flex mr-[0.25em] pb-2 cursor-crosshair">
          <motion.span
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
              delay: delayOffset + (wordIndex * 0.15)
            }}
          >
            <motion.span className="inline-flex relative" initial="initial" whileHover="hovered">
              <span className="inline-flex">
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={letterIndex}
                    variants={{ initial: { y: 0 }, hovered: { y: "-100%" } }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: letterIndex * 0.02 }}
                    className="inline-block origin-bottom"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
              <span className="absolute inset-0 inline-flex">
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={letterIndex}
                    variants={{ initial: { y: "100%" }, hovered: { y: 0 } }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: letterIndex * 0.02 }}
                    className="inline-block origin-bottom"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            </motion.span>
          </motion.span>
        </span>
      ))}
    </span>
  );
};

export default function Hero() {
  const { scrollY } = useScroll();
  
  const scale = useTransform(scrollY, [0, 800], [1, 0.85]);
  const opacity = useTransform(scrollY, [0, 800], [1, 0.3]);
  const blur = useTransform(scrollY, [0, 800], ["blur(0px)", "blur(15px)"]);

  return (
    <section className="sticky top-0 z-0 h-[100dvh] w-full flex flex-col items-center justify-center overflow-hidden bg-dark">
      
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
      >
        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-30">
          <source src="/trading.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-dark/80"></div>
      </motion.div>

      <motion.div 
        style={{ scale, opacity, filter: blur }}
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 w-full max-w-5xl mx-auto origin-center"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mb-8"
        >
          <span className="glass-panel px-4 py-2 rounded-full text-[10px] sm:text-xs font-numbers text-primary tracking-widest uppercase border border-primary/20 shadow-[0_0_15px_rgba(149,214,0,0.05)]">
            The BlissQuants Platform
          </span>
        </motion.div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-heading uppercase tracking-tighter leading-[0.95] mb-8 flex flex-col items-center w-full">
          <HoverLetterStagger text="MASTER WEALTH." delayOffset={1.8} className="text-light" />
          {/* Updated text to match the new demo */}
          <HoverLetterStagger text="CONQUER FEAR." delayOffset={2.2} className="text-primary mt-1 md:mt-2" />
        </h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 3 }}
          className="text-base md:text-lg font-sans font-medium text-grey/60 max-w-3xl mb-12 leading-relaxed px-4"
        >
          {/* Updated paragraph to match the new demo exactly */}
          Trade fearlessly. Build wealth intelligently. Master finance completely. BlissQuants delivers the strategies, planning, and education you need to own your financial future.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3.2 }}
          className="flex flex-col sm:flex-row items-center gap-5"
        >
          <button className="group relative px-8 py-4 bg-primary text-dark font-sans font-bold text-base uppercase tracking-wide rounded-full overflow-hidden transition-all duration-300 hover:scale-105 flex items-center gap-2">
            Explore Platform
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="group px-8 py-4 glass-panel text-light font-sans font-bold text-base uppercase tracking-wide rounded-full transition-all duration-300 hover:bg-white/10 flex items-center gap-2 border border-white/10 hover:border-white/30">
            Experience BlissQuants
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}