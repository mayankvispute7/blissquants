import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Activity, Target, ShieldCheck, GraduationCap, CheckCircle2, BookOpen } from 'lucide-react';

// Light Theme Animated Chart Lines
const AnimatedChartLines = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    <svg className="w-full h-full opacity-40" preserveAspectRatio="none" viewBox="0 0 1440 600">
      <motion.path
        d="M -100 100 C 200 100, 300 400, 500 300 C 700 200, 800 500, 1000 400 C 1200 300, 1300 550, 1500 500"
        fill="transparent"
        stroke="#ef4444"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.path
        d="M -100 500 C 200 500, 300 200, 500 300 C 700 400, 800 100, 1000 200 C 1200 300, 1300 50, 1500 100"
        fill="transparent"
        stroke="#95D600"
        strokeWidth="3"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 5, ease: "easeInOut", delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
      />
    </svg>
  </div>
);

// Feature Content
const features = [
  {
    id: 1,
    icon: <ShieldCheck size={20} />,
    title: "The BlissQuants Vibe",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop",
    desc: "A sophisticated approach that eliminates the usual stress of the markets. Empower yourself with confidence-building data.",
    bullets: ['Analytical Clarity', 'Confidence Building', 'Stress-Free Focus'],
    rotation: -3
  },
  {
    id: 2,
    icon: <Activity size={20} />,
    title: "Data-Driven Strategy",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    desc: "Where active traders build and backtest sophisticated strategies. Get hands-on with quantitative analytics.",
    bullets: ['Quantitative Tools', 'Volatility Control', 'Active Backtesting'],
    rotation: 2
  },
  {
    id: 3,
    icon: <Target size={20} />,
    title: "Long-Term Vision",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
    desc: "Plan your financial future, not just your next trade. Comprehensive tools for long-term goal-setting.",
    bullets: ['Retirement Planning', 'Goal Setting', 'Lifestyle Wealth'],
    rotation: -2
  },
  {
    id: 4,
    icon: <GraduationCap size={20} />,
    title: "Finance Academy",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
    desc: "Upskill with our premier education-focused academy. Learn directly from seasoned experts in structured courses.",
    bullets: ['Structured Courses', 'Expert Instructors', 'Advanced Certs'],
    rotation: 3
  },
  {
    id: 5,
    icon: <BookOpen size={20} />,
    title: "Master the Science",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2070&auto=format&fit=crop", 
    desc: "Unlock continuous learning with in-depth tutorials and authoritative publications.",
    bullets: ['In-Depth Tutorials', 'Authoritative Pubs', 'Data Mastery'],
    rotation: -1
  }
];

// Horizontal Feature Card Component
const StackingCard = ({ feature, index, smoothProgress }) => {
  const dropStart = index === 0 ? 0 : 0.05 + ((index - 1) * 0.15); 
  const dropEnd = index === 0 ? 0 : dropStart + 0.15;

  const y = useTransform(
    smoothProgress,
    [dropStart, dropEnd],
    index === 0 ? ["0vh", "0vh"] : ["-130vh", "0vh"]
  );

  const opacity = useTransform(
    smoothProgress,
    [dropStart, dropEnd - 0.05],
    index === 0 ? [1, 1] : [0, 1]
  );

  return (
    <motion.div 
      style={{ y, opacity, zIndex: index }}
      initial={{ rotate: feature.rotation }}
      whileHover={{ 
        scale: 1.05, 
        rotate: 0, 
        zIndex: 50,
        boxShadow: "0 40px 80px -15px rgba(0,0,0,0.6)" 
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      // Card Container
      className="absolute top-0 left-0 right-0 bottom-0 m-auto w-[92vw] md:w-[580px] lg:w-[620px] h-[480px] md:h-[340px] bg-[#1A1A1A] rounded-2xl md:rounded-3xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.4)] overflow-hidden flex flex-col md:flex-row border border-white/10"
    >
      {/* Image Section: Smooth Gradient Fade into the text section */}
      <div className="relative h-[35%] md:h-full md:w-[45%] overflow-hidden shrink-0">
        <motion.img 
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.8 }}
          src={feature.image} 
          alt={feature.title} 
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        {/* The Magic Fade: Blends perfectly into #1A1A1A on the bottom (mobile) or right (desktop) */}
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-transparent via-[#1A1A1A]/30 to-[#1A1A1A]"></div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col p-5 md:p-6 h-[65%] md:h-full md:w-[55%] justify-between z-10">
        <div>
          <div className="flex items-center gap-3 mb-3 md:mb-4">
            <div className="w-10 h-10 rounded-lg bg-[#84C225]/10 flex items-center justify-center text-[#84C225] border border-[#84C225]/20 shrink-0">
              {feature.icon}
            </div>
            <h4 className="text-lg md:text-xl font-black text-white uppercase tracking-tight leading-tight">
              {feature.title}
            </h4>
          </div>
          
          <p className="text-xs md:text-sm font-sans text-white/60 leading-relaxed line-clamp-3 mb-4">
            {feature.desc}
          </p>
        </div>

        {/* Feature Bullets - Now Interactive! */}
        <div className="flex flex-col gap-2">
          {feature.bullets.map((bullet, i) => (
            <div 
              key={i} 
              className="group/bullet flex items-center gap-2.5 bg-white/5 border border-white/5 rounded-md p-2 transition-all duration-300 hover:bg-[#84C225]/10 hover:border-[#84C225]/30 hover:shadow-[0_0_10px_rgba(132,194,37,0.1)] cursor-pointer"
            >
              <CheckCircle2 size={14} className="text-[#84C225] shrink-0 transition-transform duration-300 group-hover/bullet:scale-125"/> 
              <span className="text-white/70 text-[11px] md:text-xs font-sans font-medium transition-colors duration-300 group-hover/bullet:text-white">
                {bullet}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function Features() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    mass: 1
  });

  const sectionScale = useTransform(smoothProgress, [0.85, 1], [1, 0.85]);
  const sectionOpacity = useTransform(smoothProgress, [0.85, 1], [1, 0.3]);

  return (
    <section ref={containerRef} className="relative bg-[#F4F4F0] h-[600vh] z-10">
      
      <motion.div 
        style={{ scale: sectionScale, opacity: sectionOpacity }}
        className="sticky top-0 h-screen w-full flex flex-col md:flex-row items-center justify-between overflow-hidden px-6 md:px-12 py-12 md:py-0 origin-top"
      >
        
        <AnimatedChartLines />

        <div className="relative z-10 w-full md:w-[45%] flex flex-col justify-center h-full max-w-xl pt-16 md:pt-0">
          <h2 className="text-xs font-sans font-bold text-[#84C225] uppercase tracking-widest mb-4">
            Fearless Finance Mastery
          </h2>
          
          <h3 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#33312E] tracking-tighter leading-[1.05] mb-6">
            Sophisticated,<br/>
            Yet Fearless.
          </h3>

          <p className="text-sm md:text-lg font-sans font-medium text-[#33312E]/70 leading-relaxed mb-8 max-w-md">
            Conquer the markets without the usual stress. BlissQuants empowers you to replace financial anxiety with data-driven confidence — mastering both active trading strategies and your long-term wealth vision.
          </p>

          <button className="group inline-flex items-center gap-2 px-8 py-3.5 bg-[#84C225] text-[#33312E] font-sans font-bold text-sm md:text-base rounded-full transition-transform hover:scale-105 shadow-[0_4px_14px_rgba(132,194,37,0.3)] w-fit">
            Experience BlissQuants <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>

        <div className="relative w-full md:w-[55%] h-[60vh] md:h-full flex items-center justify-center mt-8 md:mt-0 perspective-1000">
          {features.map((feature, index) => (
            <StackingCard 
              key={feature.id} 
              feature={feature} 
              index={index} 
              smoothProgress={smoothProgress} 
            />
          ))}
        </div>

      </motion.div>
    </section>
  );
}