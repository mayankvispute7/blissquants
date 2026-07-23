import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ActivitySquare, TrendingUp, BookOpen } from 'lucide-react';

const AnimatedChartLines = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    <svg className="w-full h-full opacity-30" preserveAspectRatio="none" viewBox="0 0 1440 600">
      <motion.path
        d="M -100 100 C 200 100, 300 400, 500 300 C 700 200, 800 500, 1000 400 C 1200 300, 1300 550, 1500 500"
        fill="transparent"
        stroke="#111111"
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.path
        d="M -100 500 C 200 500, 300 200, 500 300 C 700 400, 800 100, 1000 200 C 1200 300, 1300 50, 1500 100"
        fill="transparent"
        stroke="#95D600"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 5, ease: "easeInOut", delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
      />
    </svg>
  </div>
);

export default function CoreOfferings() {
  const offerings = [
    {
      title: "Trade",
      icon: <ActivitySquare size={26} className="text-[#222]" strokeWidth={1.5} />,
      desc: "Options IV screening, strategy research, and equity setups — disciplined, signal-driven research for the active part of your capital.",
      linkText: "Explore Trade"
    },
    {
      title: "Invest",
      icon: <TrendingUp size={26} className="text-[#222]" strokeWidth={1.5} />,
      desc: "A systematic, multi-asset model portfolio published as research. You hold it in your own account. We publish the allocation, reasoning, and rebalance.",
      linkText: "Explore Invest"
    },
    {
      title: "Learn",
      icon: <BookOpen size={26} className="text-[#222]" strokeWidth={1.5} />,
      desc: "Build your Financial Quotient with structured trainings in finance, investing, and trading — led by seasoned practitioners.",
      linkText: "Explore Learn"
    }
  ];

  // Smooth Scroll Reveal Animations
  const listVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section className="bg-[#F4F4F0] min-h-screen py-32 relative z-40 rounded-t-[3rem] md:rounded-t-[4rem] shadow-[0_-30px_60px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col justify-center">
      
      <AnimatedChartLines />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10 flex flex-col items-center w-full">
        
        {/* Header */}
        <div className="text-center mb-24 max-w-2xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs font-sans font-bold text-[#84C225] uppercase tracking-widest mb-4"
          >
            Platform Capabilities
          </motion.h2>
          
          {/* CORE OFFERINGS HEADING (Now using font-serif to perfectly match Trade/Invest) */}
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-6xl lg:text-[4.5rem] font-serif text-[#222222] tracking-tight leading-none mb-6"
          >
            Our Core Offerings
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-base lg:text-lg font-sans font-medium text-[#222222]/70 leading-relaxed"
          >
            Empower your financial journey with our specialized tools, wealth solutions, and elite educational resources.
          </motion.p>
        </div>

        {/* Wealthsimple Style Rows */}
        <motion.div 
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="w-full flex flex-col items-center gap-0"
        >
          {offerings.map((item, index) => (
            <motion.a 
              key={index} 
              variants={itemVariants}
              href="#"
              className="group relative block w-full max-w-[1200px] mx-auto h-[160px] md:h-[180px] cursor-pointer"
            >
              
              {/* Layout Grid: 1fr (Icon) | auto (Text) | 1fr (Desc) */}
              <div className="relative z-10 grid grid-cols-[1fr_auto_1fr] items-center w-full h-full pointer-events-none">

                {/* Left Column: Icon */}
                <div className="flex justify-end pr-12 lg:pr-24 opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-[#F4F4F0] rounded-2xl flex items-center justify-center border border-black/5 text-[#222]">
                    {item.icon}
                  </div>
                </div>

                {/* Center Column: STATIC TITLE (Elegant font-serif) */}
                <div className="flex justify-center whitespace-nowrap">
                  <h3 className="text-6xl md:text-[6rem] lg:text-[7.5rem] font-serif text-[#222] tracking-tight leading-none group-hover:text-black transition-colors duration-500">
                    {item.title}
                  </h3>
                </div>

                {/* Right Column: Info */}
                <div className="justify-start pl-12 lg:pl-24 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500 hidden md:flex items-center">
                  
                  {/* Vertical Dividing Line */}
                  <div className="w-px h-24 bg-black/10 mr-8 hidden lg:block"></div>
                  
                  <div className="max-w-[320px] text-left">
                    <p className="text-[13px] md:text-[14px] font-sans font-medium text-[#444] leading-[1.6] mb-3">
                      {item.desc}
                    </p>
                    <span className="flex items-center gap-1 text-[11px] md:text-[12px] font-bold font-sans text-[#84C225] uppercase tracking-widest">
                      {item.linkText} <ArrowRight size={14} />
                    </span>
                  </div>
                </div>

              </div>

            </motion.a>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}