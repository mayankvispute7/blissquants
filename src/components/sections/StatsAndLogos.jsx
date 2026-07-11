import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView, animate } from 'framer-motion';
import { TrendingUp, MonitorSmartphone, BadgeDollarSign } from 'lucide-react';

// Premium Ambient Fluid Background
const AmbientBackground = () => (
  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-t-[3rem] md:rounded-t-[4rem]">
    <motion.div 
      animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }}
      transition={{ duration: 15, ease: "easeInOut", repeat: Infinity }}
      className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] rounded-full bg-[#84C225] filter blur-[150px] opacity-[0.12]"
    />
    <motion.div 
      animate={{ scale: [1, 1.3, 1], x: [0, -60, 0], y: [0, -40, 0] }}
      transition={{ duration: 20, ease: "easeInOut", repeat: Infinity, delay: 2 }}
      className="absolute bottom-[10%] right-[5%] w-[50vw] h-[50vw] rounded-full bg-[#84C225] filter blur-[180px] opacity-[0.1]"
    />
  </div>
);

// Smooth Counting Component
const Counter = ({ from, to, duration = 2.5 }) => {
  const nodeRef = useRef();
  const inView = useInView(nodeRef, { once: true, margin: "0px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration: duration,
        ease: [0.22, 1, 0.36, 1],
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

// Seamless Side-Reveal Hover Stat
const HoverInfoStat = ({ countTo, suffix, title, desc, direction = "left" }) => {
  const isLeft = direction === "left";

  return (
    <div className="relative group w-full h-[100px] md:h-[140px] flex items-center justify-center cursor-default shrink-0">
      <div 
        className={`absolute top-1/2 -translate-y-1/2 w-[200px] md:w-[280px] opacity-0 transition-all duration-700 ease-[0.22,1,0.36,1] pointer-events-none flex 
        ${isLeft 
          ? 'left-0 md:left-4 justify-end -translate-x-8 group-hover:translate-x-0' 
          : 'right-0 md:right-4 justify-start translate-x-8 group-hover:translate-x-0'} 
        group-hover:opacity-100 z-20`}
      >
        <p className={`text-[12px] md:text-[13px] font-sans text-white/80 leading-[1.6] font-medium drop-shadow-md hidden md:block ${isLeft ? 'text-right' : 'text-left'}`}>
          {desc}
        </p>
      </div>

      <div 
        className={`relative z-10 flex flex-col items-center justify-center w-full transition-transform duration-700 ease-[0.22,1,0.36,1] 
        ${isLeft 
          ? 'md:group-hover:translate-x-32' 
          : 'md:group-hover:-translate-x-32'}`}
      >
        <h3 className="text-5xl md:text-6xl lg:text-[5rem] font-heading text-white tracking-tighter mb-1 md:mb-2 group-hover:text-[#84C225] transition-colors duration-500 drop-shadow-xl flex items-center">
          <Counter from={0} to={countTo} duration={2} />{suffix}
        </h3>
        <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold text-white/50 group-hover:text-white/90 transition-colors duration-300">
          {title}
        </span>
      </div>
    </div>
  );
};

// 🃏 The Scroll-Driven "Card Throwing" Feature Box
const ScrollCard = ({ title, desc, icon: Icon, iconAnimation, index, smoothProgress }) => {
  const start = 0.15 + (index * 0.12);
  const end = start + 0.15;

  const y = useTransform(smoothProgress, [start, end], [400, 0]);
  const xStart = index === 0 ? 150 : index === 2 ? -150 : 0;
  const x = useTransform(smoothProgress, [start, end], [xStart, 0]);
  
  const rotateStart = index === 0 ? -30 : index === 2 ? 30 : 15;
  const rotateZ = useTransform(smoothProgress, [start, end], [rotateStart, 0]);
  
  const scale = useTransform(smoothProgress, [start, end], [0.7, 1]);
  const opacity = useTransform(smoothProgress, [start, end], [0, 1]);

  return (
    <motion.div style={{ y, x, rotateZ, scale, opacity }} className="relative z-20 h-full w-full">
      <motion.div 
        whileHover={{ y: -10, scale: 1.02 }}
        className="relative group mt-6 md:mt-10 rounded-[1.5rem] md:rounded-3xl bg-[#2A2522] border border-white/5 p-6 md:p-8 pt-10 md:pt-12 text-left flex flex-col items-start justify-start h-full hover:border-[#84C225]/40 hover:bg-[#2A2522]/90 hover:shadow-[0_20px_40px_rgba(132,194,37,0.2)] transition-colors duration-300"
      >
        <div className="absolute -top-6 md:-top-8 left-6 md:left-8 w-14 h-14 md:w-16 md:h-16 bg-[#84C225] rounded-full flex items-center justify-center shadow-[0_10px_20px_rgba(132,194,37,0.3)] border-[4px] border-[#3B3531] transition-transform duration-500 group-hover:scale-110">
          <motion.div
            animate={iconAnimation.animate}
            transition={{ repeat: Infinity, duration: iconAnimation.duration, ease: "easeInOut" }}
          >
            <Icon className="text-[#3B3531] w-6 h-6 md:w-7 md:h-7" strokeWidth={2.5} />
          </motion.div>
        </div>

        <div className="relative z-10 w-full mt-2">
          <h3 className="text-lg md:text-xl font-heading font-black text-white mb-2 tracking-tight transition-colors duration-300 group-hover:text-[#84C225]">
            {title}
          </h3>
          <p className="text-[11px] md:text-sm font-sans text-white/70 leading-[1.6] font-medium">
            {desc}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function StatsAndLogos() {
  const containerRef = useRef(null);
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    mass: 1
  });

  const statsOpacity = useTransform(smoothProgress, [0, 0.1], [0, 1]);
  const statsY = useTransform(smoothProgress, [0, 0.1], [30, 0]);
  
  const logosOpacity = useTransform(smoothProgress, [0.6, 0.75], [0, 1]);
  const logosY = useTransform(smoothProgress, [0.6, 0.75], [30, 0]);

  // Extended lists for flawless infinite scrolling
  const brands = ["KRAKEN", "FTX", "GEMINI", "BITFINEX", "KUCOIN", "HUOBI", "BINANCE", "COINBASE"];
  const bottomBrands = ["REUTERS", "FORBES", "CNBC", "ECONOMIC TIMES", "SEBI REGISTERED", "BSE", "NSE"];
  const duplicatedTop = [...brands, ...brands, ...brands, ...brands, ...brands];
  const duplicatedBottom = [...bottomBrands, ...bottomBrands, ...bottomBrands, ...bottomBrands, ...bottomBrands];

  return (
    // 400vh gives plenty of scroll duration for the physics animations
    <section ref={containerRef} className="bg-[#3B3531] relative z-30 -mt-20 rounded-t-[3rem] md:rounded-t-[4rem] shadow-[0_-40px_80px_rgba(0,0,0,0.5)] h-[400vh]">
      
      {/* 🚀 STICKY WRAPPER: using h-[100dvh] for perfect dynamic viewport sizing */}
      <div 
        onMouseMove={handleMouseMove}
        className="sticky top-0 h-[100dvh] w-full flex flex-col justify-between overflow-hidden pt-8 pb-8 md:pt-12 md:pb-12"
      >
        <AmbientBackground />

        {/* Magical Cursor Spotlight Effect */}
        <div 
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(132, 194, 37, 0.15), transparent 80%)`
          }}
        />

        <style>{`
          @keyframes scroll-left { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          @keyframes scroll-right { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
          .animate-scroll-left { animation: scroll-left 40s linear infinite; }
          .animate-scroll-right { animation: scroll-right 40s linear infinite; }
          .mask-image-fade { mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent); }
        `}</style>

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 flex flex-col h-full w-full">
          
          {/* STATS SECTION (Protected Height) */}
          <motion.div 
            style={{ opacity: statsOpacity, y: statsY }}
            className="shrink-0 grid grid-cols-2 gap-2 md:gap-4 max-w-6xl mx-auto w-full"
          >
            <HoverInfoStat 
              countTo={300} 
              suffix="+" 
              title="Candidates" 
              desc="Candidates preferred our Delta Hedging training for advanced market strategies."
              direction="left"
            />
            <HoverInfoStat 
              countTo={8} 
              suffix="+" 
              title="Years Experience" 
              desc="We have been working with candidates for 8+ years solving nearly all possible risk issues."
              direction="right"
            />
          </motion.div>

          {/* CARD DEALING SECTION (Takes up flexible space in the middle) */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 w-full relative">
              <ScrollCard 
                index={0}
                smoothProgress={smoothProgress}
                iconAnimation={{ animate: { x: [0, 3, 0], y: [0, -3, 0] }, duration: 2 }}
                icon={TrendingUp}
                title="40% Growth in Income"
                desc="BlissQuant's working strategies helps you in earning 40% more on your investment every month. BlissQuants makes you earn independently."
              />
              <ScrollCard 
                index={1}
                smoothProgress={smoothProgress}
                iconAnimation={{ animate: { scale: [1, 1.1, 1] }, duration: 2 }}
                icon={MonitorSmartphone}
                title="Flexible solutions for Risk profile"
                desc="Blissquants IV Analytics software helps you in prevention of loss. This software tells you live condition of the market."
              />
              <ScrollCard 
                index={2}
                smoothProgress={smoothProgress}
                iconAnimation={{ animate: { rotate: [0, -10, 10, -10, 0] }, duration: 2.5 }}
                icon={BadgeDollarSign}
                title="Attractive Partnership offer"
                desc="You will become an official partner of BlissQuants with attractive ratio in just 3rd month of your training."
              />
            </div>
          </div>

          {/* LOGO SLIDER SECTION (Protected Height so it never gets crushed) */}
          <motion.div 
            style={{ opacity: logosOpacity, y: logosY }}
            className="shrink-0 min-h-[160px] md:min-h-[200px] w-full flex flex-col items-center justify-end z-30 pt-6"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 md:w-24 bg-white/10"></div>
              <p className="text-[10px] md:text-xs font-sans font-bold uppercase text-white/50 tracking-[0.3em]">
                Trusted by Industry Leaders
              </p>
              <div className="h-[1px] w-12 md:w-24 bg-white/10"></div>
            </div>
            
            <div className="w-full flex flex-col gap-5 md:gap-7 mask-image-fade">
              <div className="relative flex overflow-x-hidden group/marquee w-full">
                <div className="flex items-center min-w-max animate-scroll-right group-hover/marquee:[animation-play-state:paused]">
                  {duplicatedTop.map((brand, i) => (
                    <div key={i} className="mx-6 md:mx-10 text-xl md:text-[2rem] font-heading font-black tracking-widest text-white/10 transition-all duration-300 cursor-crosshair group-hover/marquee:blur-[6px] group-hover/marquee:opacity-20 hover:!blur-none hover:!opacity-100 hover:!text-[#84C225] hover:scale-110">{brand}</div>
                  ))}
                </div>
              </div>
              <div className="relative flex overflow-x-hidden group/marquee w-full hidden md:flex">
                <div className="flex items-center min-w-max animate-scroll-left group-hover/marquee:[animation-play-state:paused]">
                  {duplicatedBottom.map((brand, i) => (
                    <div key={i} className="mx-6 md:mx-10 text-xl md:text-[2rem] font-heading font-black tracking-widest text-white/10 transition-all duration-300 cursor-crosshair group-hover/marquee:blur-[6px] group-hover/marquee:opacity-20 hover:!blur-none hover:!opacity-100 hover:!text-[#84C225] hover:scale-110">{brand}</div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}