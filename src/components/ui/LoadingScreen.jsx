import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  useEffect(() => {
    // 2.5 seconds to allow the cinematic trade chart animation to play
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-dark"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        transition: { duration: 1.2, ease: "easeInOut" } 
      }}
    >
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Animated Rising Trade Chart */}
        <div className="flex items-end gap-3 h-24">
          <motion.div 
            className="w-4 bg-white/40 rounded-t-sm"
            initial={{ height: 0 }}
            animate={{ height: "40%" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          <motion.div 
            className="w-4 bg-white/70 rounded-t-sm"
            initial={{ height: 0 }}
            animate={{ height: "70%" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          />
          <motion.div 
            className="w-4 bg-primary rounded-t-sm shadow-[0_0_15px_rgba(149,214,0,0.4)]"
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          />
        </div>
        
        <motion.h2 
          className="text-sm font-sans font-bold text-light tracking-[0.2em] uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          Initializing Platform
        </motion.h2>
      </div>
    </motion.div>
  );
}