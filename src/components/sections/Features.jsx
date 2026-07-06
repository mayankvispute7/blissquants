import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Activity, Target, ShieldCheck, GraduationCap, CheckCircle2, BookOpen } from 'lucide-react';

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

export default function Features() {
  const smoothEase = [0.22, 1, 0.36, 1];

  // 1. Scroll Tracking Logic for the Zoom Out Effect
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  // As the user scrolls past, shrink to 85% and fade
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  const features = [
    {
      id: 1,
      icon: <ShieldCheck size={24} />,
      title: "The BlissQuants Vibe",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop",
      desc: "A sophisticated approach that eliminates the usual stress of the markets. Empower yourself with confidence-building data, replacing anxiety with analytical clarity and long-term peace of mind.",
      bullets: ['Analytical Clarity', 'Confidence Building', 'Stress-Free Focus']
    },
    {
      id: 2,
      icon: <Activity size={24} />,
      title: "Data-Driven Strategy",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      desc: "Where active traders build and backtest sophisticated strategies. Get hands-on with quantitative analytics and disciplined tools designed to stop market volatility in its tracks.",
      bullets: ['Quantitative Tools', 'Volatility Control', 'Active Backtesting']
    },
    {
      id: 3,
      icon: <Target size={24} />,
      title: "Long-Term Wealth Vision",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
      desc: "Plan your financial future, not just your next trade. Comprehensive tools for long-term goal-setting, retirement planning, and lifestyle-based wealth strategies for the next 5 to 10 years.",
      bullets: ['Retirement Planning', 'Goal Setting', 'Lifestyle Wealth']
    },
    {
      id: 4,
      icon: <GraduationCap size={24} />,
      title: "Finance Academy Excellence",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
      desc: "Upskill with our premier education-focused academy. Whether you're new to systematic finance or earning advanced certifications, learn directly from seasoned experts in structured courses.",
      bullets: ['Structured Courses', 'Expert Instructors', 'Advanced Certifications']
    },
    {
      id: 5,
      icon: <BookOpen size={24} />,
      title: "Master the Science",
      image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2070&auto=format&fit=crop", 
      desc: "Unlock continuous learning with in-depth tutorials and authoritative publications. Dive into the mechanics of data-driven market mastery and never let fear dictate your financial decisions again.",
      bullets: ['In-Depth Tutorials', 'Authoritative Pubs', 'Data-Driven Mastery']
    }
  ];

  return (
    // h-[200vh] increases the scroll delay so you have plenty of time to view the cards before the next page appears
    <section ref={sectionRef} className="bg-[#F4F4F0] h-[200vh] relative z-20 rounded-t-[3rem] md:rounded-t-[4rem] shadow-[0_-30px_60px_rgba(0,0,0,0.2)]">
      
      {/* Sticky container locks exactly into 1 viewport height (100vh) */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* Animated Wrapper for the Scroll Zoom effect */}
        {/* pt-20 and pb-10 provide a tight, safe padding so nothing gets pushed off screen */}
        <motion.div 
          style={{ scale, opacity }} 
          className="relative w-full h-full pt-20 pb-10 md:pt-24 md:pb-12 flex flex-col justify-center"
        >
          <AnimatedChartLines />

          {/* Core Content Container */}
          <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col w-full h-full justify-between gap-6">
            
            {/* Header Content */}
            <div className="max-w-2xl shrink-0">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: smoothEase }}
                className="text-xs font-sans font-bold text-primary uppercase tracking-widest mb-3"
              >
                Fearless Finance Mastery
              </motion.h2>
              
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.1, ease: smoothEase }}
                className="text-4xl md:text-5xl lg:text-6xl font-heading text-[#33312E] tracking-tight leading-[1.1] mb-4"
              >
                Sophisticated,<br/>
                Yet Fearless.
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.2, ease: smoothEase }}
                className="text-sm md:text-base font-sans font-medium text-dark/70 leading-relaxed mb-6 max-w-xl"
              >
                Conquer the markets without the usual stress. BlissQuants empowers you to replace financial anxiety with data-driven confidence.
              </motion.p>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.3, ease: smoothEase }}
                className="group inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white font-sans font-bold text-sm rounded-full transition-transform hover:scale-105 shadow-[0_4px_14px_rgba(149,214,0,0.3)]"
              >
                Experience BlissQuants <span className="group-hover:translate-x-1 transition-transform">→</span>
              </motion.button>
            </div>

            {/* 5-Card Expanding Slider Layout */}
            {/* flex-1 ensures it dynamically fills the remaining screen space perfectly without spilling over */}
            <div className="flex flex-col lg:flex-row w-full gap-3 md:gap-4 flex-1 min-h-[300px] max-h-[500px] shrink-0 group/grid">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.8, delay: 0.2 + (index * 0.15), ease: smoothEase }}
                  className="group/card relative flex-1 hover:flex-[3] transition-all duration-700 ease-[0.22,1,0.36,1] overflow-hidden rounded-[2rem] bg-dark shadow-lg cursor-pointer h-full group-hover/grid:opacity-40 group-hover/grid:blur-sm hover:!opacity-100 hover:!blur-none"
                >
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className={`absolute inset-0 w-full h-full object-cover opacity-30 group-hover/card:opacity-70 group-hover/card:scale-105 transition-all duration-700 ${feature.id === 5 ? 'mix-blend-luminosity brightness-75 sepia hue-rotate-90 saturate-200' : ''}`} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/50 to-transparent"></div>

                  <div className="absolute inset-0 p-5 lg:p-6 flex flex-col justify-end">
                    <div className="flex items-center gap-4 mb-2 lg:mb-0 lg:block">
                      <div className="w-10 h-10 bg-primary/20 backdrop-blur-md rounded-xl flex items-center justify-center text-primary lg:mb-4 shrink-0 transition-colors group-hover/card:bg-primary group-hover/card:text-dark">
                        {feature.icon}
                      </div>
                      <h4 className="text-lg lg:text-xl font-heading text-light uppercase whitespace-nowrap overflow-hidden text-ellipsis">
                        {feature.title}
                      </h4>
                    </div>

                    <div className="lg:h-0 lg:opacity-0 lg:-translate-y-4 group-hover/card:h-auto group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-700 delay-100 overflow-hidden">
                      <p className="text-xs lg:text-sm font-sans font-medium text-light/70 mt-3 mb-3 lg:mb-4 line-clamp-3">
                        {feature.desc}
                      </p>
                      <ul className="space-y-1.5 lg:space-y-2">
                        {feature.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-center gap-2 text-light/90 text-[10px] lg:text-xs font-sans">
                            <CheckCircle2 size={12} className="text-primary shrink-0"/> {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}