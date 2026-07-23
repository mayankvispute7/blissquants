import React, { useRef, useEffect } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Shield, TrendingUp, Zap } from 'lucide-react';

// Smooth, Clean Line Chart (Reversed, NO Grid)
const InfiniteReversedChart = () => {
  const primaryPath = "M 0 1000 L 150 880 L 250 920 L 450 600 L 550 680 L 750 250 L 850 350 L 1000 0";
  const secondaryPath = "M 0 1000 L 200 950 L 400 750 L 600 800 L 800 400 L 1000 0";

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-[#3B3531]">
      <svg className="absolute inset-0 w-full h-full z-10 scale-x-[-1]" viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <motion.g
          animate={{ x: [0, 1000], y: [0, -1000] }}
          transition={{ ease: "linear", duration: 35, repeat: Infinity }}
        >
          <g>
            <path d={secondaryPath} fill="none" stroke="#FFFFFF" strokeWidth="1" opacity="0.05" />
            <path d={primaryPath} fill="none" stroke="#84C225" strokeWidth="1.5" opacity="0.25" style={{ filter: 'drop-shadow(0px 0px 4px rgba(132,194,37,0.2))' }} />
          </g>
          <g transform="translate(-1000, 1000)">
            <path d={secondaryPath} fill="none" stroke="#FFFFFF" strokeWidth="1" opacity="0.05" />
            <path d={primaryPath} fill="none" stroke="#84C225" strokeWidth="1.5" opacity="0.25" style={{ filter: 'drop-shadow(0px 0px 4px rgba(132,194,37,0.2))' }} />
          </g>
        </motion.g>
      </svg>
    </div>
  );
};

// Counter Logic for the smooth number climb
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

// The Hover Effect Component for Stats
const HoverInfoStat = ({ countTo, suffix, title, desc, direction = "left", delay = 0 }) => {
  const isLeft = direction === "left";
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className="relative group w-full h-[120px] flex items-center justify-center cursor-default"
    >
      <div className={`absolute top-1/2 -translate-y-1/2 w-[220px] opacity-0 transition-all duration-700 ease-[0.22,1,0.36,1] pointer-events-none flex ${isLeft ? 'left-0 justify-end -translate-x-8 group-hover:translate-x-0' : 'right-0 justify-start translate-x-8 group-hover:translate-x-0'} group-hover:opacity-100 z-20`}>
        <p className={`text-sm font-sans text-white/80 leading-relaxed font-medium hidden md:block ${isLeft ? 'text-right' : 'text-left'}`}>
          {desc}
        </p>
      </div>

      <div className={`relative z-10 flex flex-col items-center justify-center w-full transition-transform duration-700 ease-[0.22,1,0.36,1] ${isLeft ? 'md:group-hover:translate-x-32' : 'md:group-hover:-translate-x-32'}`}>
        <h3 className="text-5xl md:text-6xl font-sans font-black text-white mb-2 tracking-tighter group-hover:text-[#84C225] transition-colors duration-500">
          <Counter from={0} to={countTo} duration={2} />{suffix}
        </h3>
        <span className="text-white/60 font-sans text-sm font-medium group-hover:text-white/90 transition-colors duration-300">
          {title}
        </span>
      </div>
    </motion.div>
  );
};

// All 16 Logos mapped from your folder
const clientLogos = [
  { name: "Adroit", src: "/logos/adroit.png" },
  { name: "Agarwal", src: "/logos/agarwal.png" },
  { name: "Alard", src: "/logos/alard.png" },
  { name: "Bhagavan Mahavir", src: "/logos/bhagavan_mahavir.png" },
  { name: "BV Patel", src: "/logos/bvpatel.png" },
  { name: "CKP", src: "/logos/ckp.png" },
  { name: "DIMR", src: "/logos/dimr.png" },
  { name: "DPU", src: "/logos/dpu.png" },
  { name: "Jainum", src: "/logos/jainum.png" },
  { name: "MarketHub", src: "/logos/markethub.png" },
  { name: "Marwadi", src: "/logos/marwadi.png" },
  { name: "SCET", src: "/logos/scet_1.png" },
  { name: "SR Luthara", src: "/logos/srluthara.png" },
  { name: "UKA", src: "/logos/uka.png" },
  { name: "Vaghani Shares", src: "/logos/vaghani_shares.png" },
  { name: "Vedika", src: "/logos/vedika.png" },
];

export default function StatsAndLogos() {
  const duplicatedLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  // 3D "Thrown Card" Animation Variants
  const cardVariants = {
    hidden: { opacity: 0, y: 150, rotateX: 45, scale: 0.8 },
    visible: (i) => ({
      opacity: 1, 
      y: 0, 
      rotateX: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15, delay: i * 0.15 }
    })
  };

  const featureBoxes = [
    { icon: TrendingUp, title: "Algorithmic Precision", desc: "Execute trades with zero hesitation using mathematically verified quantitative strategies." },
    { icon: Shield, title: "Risk Mitigation", desc: "Advanced delta hedging automatically protects your capital against sudden market downturns." },
    { icon: Zap, title: "Real-Time Execution", desc: "Instantaneous data processing ensures you never miss a critical market opportunity." }
  ];

  return (
    <section className="relative z-10 bg-[#3B3531] pt-24 md:pt-32 pb-20 overflow-hidden border-t border-white/5">
      
      <InfiniteReversedChart />

      <style>{`
        @keyframes scroll-left { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { animation: scroll-left 45s linear infinite; }
        .mask-edges { mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent); }
      `}</style>

      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
        
        {/* TOP: STATS SECTION */}
        <div className="w-full mb-24 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-[40%] text-center md:text-left">
            <h4 className="text-[#84C225] font-sans font-bold text-xs tracking-[0.2em] uppercase mb-4">
              Proven Track Record
            </h4>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-black text-white tracking-tighter leading-[1.05]">
              Empowering Traders Worldwide.
            </h2>
          </div>

          <div className="w-full md:w-[60%] flex flex-col md:flex-row gap-8 md:gap-0">
            <HoverInfoStat countTo={300} suffix="+" title="Active Candidates" desc="Candidates preferred our training for advanced active trading strategies." direction="left" />
            <HoverInfoStat countTo={8} suffix="+" title="Years Experience" desc="We have been dominating the quantitative markets for over 8 years." direction="right" delay={0.2} />
          </div>
        </div>

        {/* MIDDLE: THE 3 "THROWN" ANIMATED BOXES */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 perspective-1000 mb-24">
          {featureBoxes.map((box, i) => (
            <motion.div
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              key={i}
              className="bg-[#2A2522] border border-white/5 rounded-3xl p-8 hover:border-[#84C225]/40 transition-colors duration-300 shadow-2xl flex flex-col"
            >
              <div className="w-14 h-14 rounded-full bg-[#3B3531] border border-white/10 flex items-center justify-center mb-6">
                <box.icon className="text-[#84C225] w-6 h-6" />
              </div>
              <h4 className="text-white font-sans font-bold text-xl md:text-2xl mb-3 tracking-tight">
                {box.title}
              </h4>
              <p className="text-white/60 font-sans text-sm md:text-base leading-relaxed">
                {box.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM: LOGOS MARQUEE SECTION */}
        <div className="w-full flex flex-col items-center justify-center pt-12 border-t border-white/5">
          {/* UPDATED: Changed text-white/40 to text-white/90 so it is much brighter */}
          <p className="text-white/90 font-sans font-bold text-xs tracking-[0.3em] uppercase mb-4 text-center">
            Trusted by Industry Leaders
          </p>
          
          <div className="w-full relative flex overflow-hidden mask-edges group">
            <div className="flex items-center min-w-max animate-marquee group-hover:[animation-play-state:paused] py-10">
              {duplicatedLogos.map((logo, i) => (
                <div key={i} className="mx-8 md:mx-12 flex items-center justify-center cursor-pointer group/logo relative z-0 hover:z-50">
                  <img 
                    src={logo.src} 
                    alt={logo.name} 
                    className="max-w-[160px] max-h-[60px] w-auto object-contain transition-all duration-300 ease-out brightness-[1.4] contrast-[1.2] group-hover/logo:scale-[1.3] group-hover/logo:brightness-[1.8] group-hover/logo:drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}