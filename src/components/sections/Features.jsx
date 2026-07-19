import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

// Background Sine Waves
const BackgroundWaves = () => (
  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
    <svg className="absolute w-full h-full opacity-60" viewBox="0 0 1440 800" preserveAspectRatio="none">
      <path d="M -100 200 C 300 400, 600 -100, 1000 400 C 1300 700, 1500 300, 1600 200" fill="none" stroke="#84C225" strokeWidth="1.5" />
      <path d="M -100 300 C 400 100, 700 600, 1100 200 C 1300 0, 1500 500, 1600 400" fill="none" stroke="#FF9F9F" strokeWidth="1" />
    </svg>
  </div>
);

// The exact 5 Features with the Book Image on the last card
const featureCards = [
  {
    id: 0,
    title: "The BlissQuants Vibe",
    desc: "A sophisticated approach that eliminates the usual stress of the markets. Empower yourself with confidence-building data, replacing anxiety with analytical clarity and long-term peace of mind.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop" 
  },
  {
    id: 1,
    title: "Data-Driven Strategy",
    desc: "Where active traders build and backtest sophisticated strategies. Get hands-on with quantitative analytics and disciplined tools designed to stop market volatility in its tracks.",
    image: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Long-Term Wealth Vision",
    desc: "Plan your financial future, not just your next trade. Comprehensive tools for long-term goal-setting, retirement planning, and lifestyle-based wealth strategies for the next 5 to 10 years.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Finance Academy Excellence",
    desc: "Upskill with our premier education-focused academy. Whether you're new to systematic finance or earning advanced certifications, learn directly from seasoned experts in structured courses.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Master the Science of Trading",
    desc: "Unlock continuous learning with in-depth tutorials and authoritative publications. Dive into the mechanics of data-driven market mastery and never let fear dictate your financial decisions again.",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop" // Book Image
  }
];

export default function Feature() {
  const containerRef = useRef(null);
  
  // This state is the secret to the "snap and lock" feel.
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Massive 600vh scroll container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // 1. THE TRIGGER SYSTEM: 
  // Instead of moving the cards 1 pixel at a time, we wait for you to cross a "threshold".
  // Once crossed, it triggers the animation to glide the next card perfectly into the center.
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    let index = 0;
    if (latest >= 0.12) index = 1;
    if (latest >= 0.32) index = 2;
    if (latest >= 0.52) index = 3;
    if (latest >= 0.72) index = 4; // After 72%, the 5th card stays locked until the section ends!

    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  });

  // 2. Click to jump to a specific threshold
  const handleCardClick = (index) => {
    if (!containerRef.current) return;
    const { top, height } = containerRef.current.getBoundingClientRect();
    const scrollY = window.scrollY;
    const scrollableDistance = height - window.innerHeight;
    
    // Safely land in the middle of the trigger zones
    const targetProgress = (index * 0.20) + 0.05; 
    const targetY = scrollY + top + (scrollableDistance * targetProgress);
    
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  return (
    <section ref={containerRef} className="bg-[#F5F5F0] relative z-20 h-[600vh]">
      
      {/* STICKY CONTAINER: Locks to the screen exactly 100vh tall */}
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden flex flex-col lg:flex-row items-center">
        
        <BackgroundWaves />

        <div className="max-w-[1600px] mx-auto w-full h-full flex flex-col lg:flex-row relative z-10">
          
          {/* LEFT SIDE: Fixed Text Content */}
          <div className="w-full lg:w-[45%] h-[30%] lg:h-full flex flex-col justify-center px-6 md:px-12 lg:pl-24 pt-20 lg:pt-0 z-30">
            <h4 className="text-[#84C225] font-sans font-bold text-xs tracking-[0.2em] uppercase mb-4">
              Fearless Finance Mastery
            </h4>
            
            <h2 className="text-5xl md:text-6xl lg:text-[5rem] font-sans font-black text-[#1A1A1A] tracking-tighter leading-[1.05] mb-6">
              Sophisticated, <br />
              Yet Fearless.
            </h2>
            
            <p className="text-base md:text-lg font-sans text-[#1A1A1A]/70 leading-relaxed max-w-md mb-8 font-medium">
              Conquer the markets without the usual stress. BlissQuants empowers you to replace financial anxiety with data-driven confidence — mastering both active trading strategies and your long-term wealth vision.
            </p>
            
            <button className="w-fit flex items-center gap-2 bg-[#84C225] hover:bg-[#95db2a] text-[#1A1A1A] font-sans font-bold text-base px-8 py-4 rounded-full transition-transform duration-300 hover:scale-105">
              Experience BlissQuants <span className="text-xl leading-none">→</span>
            </button>
          </div>

          {/* RIGHT SIDE: The Perfect `)` Semi-Circle Carousel */}
          <div className="w-full lg:w-[55%] h-[70%] lg:h-full relative flex items-center justify-center lg:justify-end pr-0 lg:pr-12">
            
            {/* WIDENED WRAPPER */}
            <div className="relative w-full max-w-[650px] h-full flex items-center justify-center">
              
              {featureCards.map((card, i) => {
                // The difference between this card and the currently active center card
                let diff = i - activeIndex;

                // Curve Math: Matches your red drawing perfectly
                const yOffset = isMobile ? 180 : 220; 
                const xPush = isMobile ? 40 : 120; // Pushes inactive cards out to the right

                let x = 0, y = 0, scale = 1, opacity = 1, zIndex = 10;
                
                // ACTIVE CENTER BOX (Largest, pulled left)
                if (diff === 0) { 
                  x = isMobile ? 0 : -80; 
                  y = 0; 
                  scale = 1.05; 
                  opacity = 1; 
                  zIndex = 30; 
                } 
                // NEXT BOX BELOW (Smaller, pushed right)
                else if (diff === 1) { 
                  x = xPush; 
                  y = yOffset; 
                  scale = 0.85; 
                  opacity = 0.6; 
                  zIndex = 20; 
                } 
                // PREVIOUS BOX ABOVE (Smaller, pushed right)
                else if (diff === -1) { 
                  x = xPush; 
                  y = -yOffset; 
                  scale = 0.85; 
                  opacity = 0.6; 
                  zIndex = 20; 
                } 
                // OUTERMOST BOTTOM (Smallest, pushed furthest right)
                else if (diff === 2) { 
                  x = xPush * 1.8; 
                  y = yOffset * 1.8; 
                  scale = 0.65; 
                  opacity = 0.15; 
                  zIndex = 10; 
                } 
                // OUTERMOST TOP (Smallest, pushed furthest right)
                else if (diff === -2) { 
                  x = xPush * 1.8; 
                  y = -yOffset * 1.8; 
                  scale = 0.65; 
                  opacity = 0.15; 
                  zIndex = 10; 
                }
                // OUT OF BOUNDS (Hidden completely)
                else {
                  x = xPush * 2;
                  y = diff > 0 ? yOffset * 2.5 : -yOffset * 2.5;
                  scale = 0.5;
                  opacity = 0;
                  zIndex = 0;
                }

                const isActive = i === activeIndex;

                return (
                  <motion.div
                    key={card.id}
                    onClick={() => handleCardClick(i)}
                    initial={false}
                    // This creates the buttery smooth "glide and lock" animation
                    animate={{ y, x, scale, opacity, zIndex }}
                    transition={{ type: "spring", stiffness: 80, damping: 18 }}
                    // 3. WIDER DIMENSIONS: w-[320px] on mobile, w-[580px] on desktop. 
                    className={`absolute cursor-pointer rounded-2xl bg-white overflow-hidden flex flex-col w-[320px] md:w-[580px] transition-colors duration-300
                      ${isActive ? 'border-[3px] border-[#84C225] shadow-[0_30px_60px_rgba(132,194,37,0.25)]' : 'border border-gray-200 shadow-xl hover:border-gray-300'}`}
                  >
                    
                    {/* TOP: Image Block (Constrained height so the card remains a wide rectangle) */}
                    <div className="w-full h-36 md:h-52 relative bg-gray-100">
                      <div className={`absolute inset-0 bg-black/10 mix-blend-overlay z-10 transition-opacity duration-300 ${isActive ? 'opacity-0' : 'opacity-100'}`}></div>
                      <img 
                        src={card.image} 
                        alt={card.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* BOTTOM: Text Block */}
                    <div className="p-5 md:p-8 flex flex-col text-left bg-white">
                      <h4 className="text-[#1A1A1A] font-sans font-bold tracking-tight text-lg md:text-2xl mb-2 md:mb-3">
                        {card.title}
                      </h4>
                      
                      <p className="text-gray-600 text-xs md:text-base font-sans leading-relaxed">
                        {card.desc}
                      </p>
                    </div>

                  </motion.div>
                );
              })}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}