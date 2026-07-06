import React, { useRef, useEffect } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { TrendingUp, MonitorSmartphone, BadgeDollarSign } from 'lucide-react';

// 1. Smooth Counting Component
const Counter = ({ from, to, duration = 2.5 }) => {
  const nodeRef = useRef();
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

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

// 2. Seamless Side-Reveal Hover Stat
const HoverInfoStat = ({ countTo, suffix, title, desc, direction = "left" }) => {
  const isLeft = direction === "left";

  return (
    <div className="relative group w-full h-[180px] md:h-[220px] flex items-center justify-center cursor-default">
      
      {/* Floating Info (Fades and glides in from the SIDE on hover) */}
      <div 
        className={`absolute top-1/2 -translate-y-1/2 w-[200px] md:w-[280px] opacity-0 transition-all duration-700 ease-[0.22,1,0.36,1] pointer-events-none flex 
        ${isLeft 
          ? 'left-0 md:left-4 justify-end -translate-x-8 group-hover:translate-x-0' 
          : 'right-0 md:right-4 justify-start translate-x-8 group-hover:translate-x-0'} 
        group-hover:opacity-100 z-20`}
      >
        <p className={`text-[12px] md:text-[13px] font-sans text-light/80 leading-[1.6] font-medium drop-shadow-md ${isLeft ? 'text-right' : 'text-left'}`}>
          {desc}
        </p>
      </div>

      {/* Gliding Number & Title */}
      <div 
        className={`relative z-10 flex flex-col items-center justify-center w-full transition-transform duration-700 ease-[0.22,1,0.36,1] 
        ${isLeft 
          ? 'group-hover:translate-x-20 md:group-hover:translate-x-32' 
          : 'group-hover:-translate-x-20 md:group-hover:-translate-x-32'}`}
      >
        <h3 className="text-6xl md:text-[5.5rem] font-heading text-light tracking-tighter mb-2 group-hover:text-primary transition-colors duration-500 drop-shadow-xl flex items-center">
          <Counter from={0} to={countTo} duration={2} />{suffix}
        </h3>
        <span className="text-xs md:text-sm uppercase tracking-[0.3em] font-bold text-white/50 group-hover:text-white/90 transition-colors duration-300">
          {title}
        </span>
      </div>

    </div>
  );
};

// 3. Clean, Professional Overlapping Icon Card
const FeatureBox = motion.create(function FeatureBox({ title, desc, icon: Icon, iconAnimation }, ref) {
  return (
    <div 
      ref={ref}
      // mt-12 creates space for the overlapping icon at the top
      className="relative group mt-12 rounded-2xl bg-gradient-to-b from-[#1E1E1E] to-[#141414] border border-white/5 p-8 md:p-10 pt-14 text-left flex flex-col items-start justify-start transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(149,214,0,0.08)]"
    >
      {/* Overlapping Circular Icon (Matches your reference image) */}
      <div className="absolute -top-10 left-8 w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-[0_10px_20px_rgba(0,0,0,0.5)] border-[6px] border-[#101611] transition-transform duration-500 group-hover:scale-110">
        <motion.div
          animate={iconAnimation.animate}
          transition={{ repeat: Infinity, duration: iconAnimation.duration, ease: "easeInOut" }}
        >
          <Icon size={32} className="text-[#111]" strokeWidth={1.5} />
        </motion.div>
      </div>

      <div className="relative z-10 w-full">
        <h3 className="text-xl md:text-2xl font-heading text-light mb-3 md:mb-4 tracking-tight transition-colors duration-300 group-hover:text-primary">
          {title}
        </h3>
        <p className="text-[13px] md:text-[14px] font-sans text-light/70 leading-[1.7]">
          {desc}
        </p>
      </div>
    </div>
  );
});

export default function StatsAndLogos() {
  const brands = ["KRAKEN", "FTX", "GEMINI", "BITFINEX", "KUCOIN", "HUOBI", "BINANCE", "COINBASE"];
  const bottomBrands = ["REUTERS", "FORBES", "CNBC", "ECONOMIC TIMES", "SEBI REGISTERED", "BSE", "NSE"];
  const duplicatedTop = [...brands, ...brands, ...brands, ...brands];
  const duplicatedBottom = [...bottomBrands, ...bottomBrands, ...bottomBrands, ...bottomBrands];

  const containerVariants = { hidden: {}, show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } } };
  const itemVariants = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } };

  return (
    // Premium Dark Green Gradient Background
    <section className="bg-gradient-to-b from-[#111811] via-[#0A0F0A] to-[#050805] relative z-30 -mt-20 rounded-t-[3rem] md:rounded-t-[4rem] shadow-[0_-40px_80px_rgba(0,0,0,0.8)] overflow-hidden pb-24 pt-24">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>

      <style>{`
        @keyframes scroll-left { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes scroll-right { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        .animate-scroll-left { animation: scroll-left 35s linear infinite; width: max-content; }
        .animate-scroll-right { animation: scroll-right 35s linear infinite; width: max-content; }
        .mask-image-fade { mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent); }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col justify-center min-h-screen">
        
        {/* Seamless Slide-Out Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto mb-6 w-full"
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

        {/* 3 Clean, Professional Overlapping Info Boxes */}
        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          whileInView="show" 
          viewport={{ once: true, amount: 0.2 }} 
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-32"
        >
          <FeatureBox 
            variants={itemVariants}
            iconAnimation={{ animate: { x: [0, 3, 0], y: [0, -3, 0] }, duration: 2 }}
            icon={TrendingUp}
            title="40% Growth in Income"
            desc="BlissQuant's working strategies helps you in earning 40% more on your investment every month. BlissQuants makes you earn independently."
          />
          
          <FeatureBox 
            variants={itemVariants}
            iconAnimation={{ animate: { scale: [1, 1.1, 1] }, duration: 2 }}
            icon={MonitorSmartphone}
            title="Flexible solutions for Risk profile"
            desc="Blissquants IV Analytics software helps you in prevention of loss. This software tells you live condition of the market."
          />
          
          <FeatureBox 
            variants={itemVariants}
            iconAnimation={{ animate: { rotate: [0, -10, 10, -10, 0] }, duration: 2.5 }}
            icon={BadgeDollarSign}
            title="Attractive Partnership offer"
            desc="You will become an official partner of BlissQuants with attractive ratio in just 3rd month of your training."
          />
        </motion.div>

        {/* Logo Slider */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 1 }}
          className="w-full flex flex-col items-center gap-8 mt-auto"
        >
          <p className="text-[10px] md:text-xs font-sans font-bold uppercase text-grey/40 tracking-[0.2em] md:tracking-[0.3em]">
            Trusted by Industry Leaders
          </p>
          
          <div className="w-full flex flex-col gap-6 md:gap-8 mask-image-fade py-4">
            <div className="relative flex overflow-x-hidden group/marquee w-full">
              <div className="flex items-center animate-scroll-right group-hover/marquee:[animation-play-state:paused]">
                {duplicatedTop.map((brand, i) => (
                  <div key={i} className="mx-8 md:mx-12 text-2xl md:text-4xl font-heading tracking-widest text-light/20 transition-all duration-300 cursor-crosshair group-hover/marquee:blur-[6px] group-hover/marquee:opacity-20 hover:!blur-none hover:!opacity-100 hover:!text-white hover:scale-110">{brand}</div>
                ))}
              </div>
            </div>
            <div className="relative flex overflow-x-hidden group/marquee w-full">
              <div className="flex items-center animate-scroll-left group-hover/marquee:[animation-play-state:paused]">
                {duplicatedBottom.map((brand, i) => (
                  <div key={i} className="mx-8 md:mx-12 text-2xl md:text-4xl font-heading tracking-widest text-light/20 transition-all duration-300 cursor-crosshair group-hover/marquee:blur-[6px] group-hover/marquee:opacity-20 hover:!blur-none hover:!opacity-100 hover:!text-white hover:scale-110">{brand}</div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}