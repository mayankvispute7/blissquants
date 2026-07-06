import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView, animate } from 'framer-motion';

// Custom Animated Counter Component
const Counter = ({ from, to, duration = 2.5 }) => {
  const nodeRef = useRef();
  const inView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration: duration,
        ease: [0.22, 1, 0.36, 1], // Smooth premium ease
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(value);
          }
        }
      });
      return () => controls.stop();
    }
  }, [from, to, inView, duration]);

  return <span ref={nodeRef}>{from}</span>;
};

export default function Experience() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  const numberScale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const contentOpacity = useTransform(scrollYProgress, [0.5, 1], [0, 1]);
  
  const glowScale = useTransform(scrollYProgress, [0, 1], [0.5, 1.8]);
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.35]);

  return (
    <section ref={containerRef} className="relative w-full bg-dark py-40 overflow-hidden flex flex-col items-center">
      
      {/* Scroll-Linked Green Light Fill */}
      <motion.div 
        style={{ scale: glowScale, opacity: glowOpacity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary rounded-full blur-[140px] pointer-events-none mix-blend-screen"
      />
      
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 w-full">
        
        {/* Massive Clean 11 with Counter */}
        <motion.div
          style={{ scale: numberScale }}
          className="relative origin-center"
        >
          <h2 className="text-[14rem] md:text-[20rem] lg:text-[26rem] leading-[0.8] font-heading tracking-tighter text-light select-none relative z-10">
            <Counter from={0} to={11} duration={3} />
          </h2>
          <div className="absolute -bottom-10 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent z-20"></div>
        </motion.div>

        {/* Text fading in */}
        <motion.div style={{ opacity: contentOpacity }} className="relative z-20 mt-8">
          <h3 className="text-3xl md:text-5xl font-heading text-light tracking-tight mb-4">
            Years of empowering traders,<br/>
            <span className="text-primary">and it's just a beginning.</span>
          </h3>
          <p className="text-grey/50 font-sans text-sm md:text-base max-w-xl mx-auto">
            Discover BlissQuants transformed and enhanced quantitative experience. Feel data that counts.
          </p>
        </motion.div>
      </div>

      {/* Statistics Row with Counters */}
      <motion.div 
        style={{ opacity: contentOpacity }}
        className="relative z-20 w-full max-w-5xl mx-auto px-6 mt-24"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center border-t border-white/10 pt-16">
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-5xl font-heading text-light tracking-tight">
              <Counter from={0} to={11} duration={2.5} />+ YRS
            </h3>
            <p className="text-sm font-sans font-bold uppercase text-primary tracking-widest">Market Excellence</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-5xl font-heading text-light tracking-tight">
              <Counter from={0} to={150} duration={3} />+
            </h3>
            <p className="text-sm font-sans font-bold uppercase text-primary tracking-widest">Curated Stocks</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-5xl font-heading text-light tracking-tight">
              <Counter from={0} to={1000} duration={3.5} />+
            </h3>
            <p className="text-sm font-sans font-bold uppercase text-primary tracking-widest">Active Users</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}