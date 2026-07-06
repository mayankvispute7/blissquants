import React from 'react';
import { motion } from 'framer-motion';

export default function TrustStrip() {
  const partners = [
    "SEBI REGISTERED", "BSE", "NSE", "BLOOMBERG", "REUTERS", "FORBES", "CNBC", "ECONOMIC TIMES"
  ];

  return (
    <section className="bg-grey py-16 overflow-hidden border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="text-sm font-sans font-bold text-dark/40 uppercase tracking-widest">
          Trusted by top financial institutions & regulators
        </p>
      </div>

      {/* Infinite Scrolling Marquee */}
      <div className="relative flex overflow-hidden">
        {/* Left and Right Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-grey to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-grey to-transparent z-10"></div>

        <motion.div
          className="flex gap-16 whitespace-nowrap px-8 items-center"
          animate={{ x: [0, -1035] }} 
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          }}
        >
          {[...partners, ...partners].map((partner, index) => (
            <div 
              key={index} 
              className="text-2xl md:text-3xl font-heading text-dark/20 uppercase tracking-tighter hover:text-primary transition-colors duration-300 cursor-pointer"
            >
              {partner}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}