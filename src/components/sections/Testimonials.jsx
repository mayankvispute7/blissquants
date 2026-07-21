import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Star, X, Maximize2 } from 'lucide-react';

// Animated Background Waves
const BackgroundWaves = () => (
  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
    <svg className="absolute w-full h-full opacity-40" viewBox="0 0 1440 800" preserveAspectRatio="none">
      <motion.path 
        d="M -100 200 C 300 400, 600 -100, 1000 400 C 1300 700, 1500 300, 1600 200" 
        fill="none" stroke="#84C225" strokeWidth="1.5" 
      />
      <motion.path 
        d="M -100 300 C 400 100, 700 600, 1100 200 C 1300 0, 1500 500, 1600 400" 
        fill="none" stroke="#FF9F9F" strokeWidth="1" 
      />
    </svg>
  </div>
);

// Written Testimonials Data
const textTestimonials = [
  {
    id: 1,
    name: "Shabeer",
    role: "Head of Front Office Data, Leading Investment Bank",
    text: "I attended the delta hedging training at BlissQuants and was pleasantly surprised by the method of delivery and content of the program. Falguni is extremely knowledgeable and provided an in-depth understanding of option Greeks. The course is designed with real-life examples providing a practical view of the market."
  },
  {
    id: 2,
    name: "VineetKumar Jain",
    role: "Quantitative Developer, Amsys Capital",
    text: "It is very fun to be part of BlissQuants. The faculty is greatly skilled. I took training from Falguni Vahora and Rupak Shah, who cleared my concepts of the stock and derivative market from scratch to an advanced level. Falguni Mam has a great ability to teach complex topics in a simple, understandable way."
  },
  {
    id: 3,
    name: "Nikhil Gandhi",
    role: "VP at Software firm",
    text: "BlissQuants has really helped me in sharpening my Options trading skills. The trainers are professional traders hence drive experience-based training with hands-on practice and minimum theory. With their help, I am easily able to make a minimum 10% ROI on capital invested."
  },
  {
    id: 4,
    name: "Prem Punjabi",
    role: "Freelancer, Architectural Visualization Artist",
    text: "BlissQuants is a good place to be for delta hedging based trading. The training they give is good, quite insightful and makes hedging easy to understand."
  },
  {
    id: 5,
    name: "N Ravishankar",
    role: "Former CIO and CTO, Tata's and Airtel",
    text: "Falguni's teaching is unique has a thorough knowledge of Options and most importantly teaches to hedge 100% of the portfolio. The program itself is called 'Delta Hedging' which is self-explanatory. I enjoyed the hands-on training and had visited their trading floor in Surat."
  },
  {
    id: 6,
    name: "Shilpa Singh",
    role: "Senior Engineering Manager, Veritas Pvt. Ltd",
    text: "I took 1:1 training with Falguni. She took me through the basics to details of stock market jargon. The research work she gave me as assignments, really helped my confidence to start investing in stocks. Her way of teaching and content of training is very thorough and pragmatic."
  }
];

// WhatsApp Screenshots Data
const whatsappScreenshots = [
  { id: 1, src: "/testimonals/teen_program_testimonials_1.png" },
  { id: 2, src: "/testimonals/teen_program_testimonials_2.png" },
  { id: 3, src: "/testimonals/teen_program_testimonials_3.png" },
  { id: 4, src: "/testimonals/teen_program_testimonials_4.png" },
  { id: 5, src: "/testimonals/teen_program_testimonials_5.png" },
  { id: 6, src: "/testimonals/teen_program_testimonials_6.png" },
  { id: 7, src: "/testimonals/teen_program_testimonials_7.png" },
  { id: 8, src: "/testimonals/teen_program_testimonials_8.png" }
];

export default function Testimonials() {
  const containerRef = useRef(null);
  
  // States for interactive components
  const [activeTextIndex, setActiveTextIndex] = useState(0);
  const [activeWaIndex, setActiveWaIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  // 1. Smooth Scroll Tracking for Text Cards
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Maps the scroll percentage perfectly to the number of cards
    let index = Math.round(latest * (textTestimonials.length - 1));
    if (index !== activeTextIndex) setActiveTextIndex(index);
  });

  // 2. Auto-Rotate WhatsApp Cluster every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveWaIndex((prev) => (prev + 1) % whatsappScreenshots.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#F5F5F0]">
      
      {/* =========================================
          SECTION 1: SMOOTH SCROLLING TEXT CARDS 
          (Perfectly matched to your screenshot styling)
          ========================================= */}
      <section ref={containerRef} className="relative z-20 h-[500vh]">
        <div className="sticky top-0 h-[100dvh] w-full overflow-hidden flex flex-col items-center justify-center pt-10">
          
          <BackgroundWaves />

          <div className="text-center mb-12 relative z-30">
            <h4 className="text-[#84C225] font-sans font-bold text-xs tracking-[0.2em] uppercase mb-4">
              Executive Reviews
            </h4>
            <h2 className="text-5xl md:text-7xl font-serif font-black text-[#1A1A1A] tracking-tighter">
              Testimonials
            </h2>
          </div>

          {/* The Messy Stack Container */}
          <div className="relative w-full max-w-3xl h-[450px] md:h-[500px] flex justify-center perspective-1000">
            
            {textTestimonials.map((item, i) => {
              const diff = i - activeTextIndex;

              let y = 0, rotate = 0, scale = 1, zIndex = textTestimonials.length - i, opacity = 1;

              // Card is Active (Front)
              if (diff === 0) {
                y = 0; rotate = 0; scale = 1;
              } 
              // Card is Waiting in the Stack (Behind)
              else if (diff > 0) {
                y = diff * 15; 
                scale = 1 - (diff * 0.04); 
                rotate = diff % 2 === 0 ? diff * 2 : -(diff * 3); 
                if (diff > 3) opacity = 0;
              } 
              // Card has been Scrolled Past (Flies up and fades)
              else if (diff < 0) {
                y = -800; 
                rotate = -15; 
                scale = 1.1;
                opacity = 0;
              }

              return (
                <motion.div
                  key={item.id}
                  initial={false}
                  // Ultra-smooth spring physics for graceful tossing effect
                  animate={{ y, rotate, scale, opacity, zIndex }}
                  transition={{ type: "spring", stiffness: 45, damping: 14, mass: 0.8 }}
                  className="absolute w-[90%] md:w-full bg-white rounded-xl shadow-[0_25px_60px_rgba(0,0,0,0.1)] border border-gray-100 p-8 md:p-12 flex flex-col justify-between"
                  style={{ transformOrigin: "bottom center" }}
                >
                  
                  {/* EXACT IMAGE STYLING: Centered Stars */}
                  <div className="flex justify-center gap-1.5 mb-8">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} size={22} className="fill-[#5B6E41] text-[#5B6E41]" />
                    ))}
                  </div>

                  {/* EXACT IMAGE STYLING: Quote marks wrapping the text */}
                  <div className="relative px-6">
                    <span className="absolute -top-4 -left-2 text-4xl text-[#84C225] font-serif font-black leading-none">"</span>
                    
                    <p className="text-[#3A4033] font-serif text-[15px] md:text-[17px] leading-relaxed text-justify relative z-10 px-4">
                      {item.text}
                    </p>
                    
                    <span className="absolute -bottom-6 right-0 text-4xl text-[#84C225] font-serif font-black leading-none">"</span>
                  </div>

                  {/* EXACT IMAGE STYLING: Right-aligned italic name & uppercase gray role */}
                  <div className="mt-12 text-right pr-4">
                    <h4 className="text-[#5B6E41] font-serif italic text-2xl font-bold">
                      — {item.name}
                    </h4>
                    <p className="text-gray-400 font-sans text-[10px] md:text-[11px] mt-2 tracking-widest uppercase">
                      {item.role}
                    </p>
                  </div>

                </motion.div>
              );
            })}

          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 2: WHATSAPP CLUSTER
          (Overlapping Cluster format)
          ========================================= */}
      <section className="relative z-20 py-24 md:py-32 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-16">
          
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h4 className="text-[#84C225] font-sans font-bold text-xs tracking-[0.2em] uppercase mb-4">
              Community Love
            </h4>
            <h2 className="text-4xl md:text-5xl font-sans font-black text-[#1A1A1A] tracking-tighter mb-6">
              Real Feedback From Our Students.
            </h2>
            <p className="text-gray-500 font-sans text-base leading-relaxed max-w-md mx-auto md:mx-0">
              We receive hundreds of messages sharing gratitude and trading success. Here are a few unfiltered screenshots directly from our WhatsApp community. Click any card to expand it.
            </p>
          </div>

          {/* The 3-Card Interactive Overlapping Cluster */}
          <div className="w-full md:w-1/2 h-[400px] md:h-[500px] flex items-center justify-center relative">
            
            {whatsappScreenshots.map((item, i) => {
              // Calculates distance from the currently active front card
              const diff = (i - activeWaIndex + whatsappScreenshots.length) % whatsappScreenshots.length;

              let zIndex = 0, x = 0, y = 0, rotate = 0, scale = 1, opacity = 1;

              if (diff === 0) {
                // FRONT CARD
                zIndex = 30; x = 0; y = 20; rotate = 0; scale = 1.05; opacity = 1;
              } else if (diff === 1) {
                // LEFT BEHIND
                zIndex = 20; x = -70; y = -10; rotate = -12; scale = 0.9; opacity = 0.9;
              } else if (diff === 2) {
                // RIGHT BEHIND
                zIndex = 10; x = 70; y = -30; rotate = 12; scale = 0.85; opacity = 0.7;
              } else {
                // HIDDEN CARDS
                zIndex = 0; x = 0; y = 50; rotate = 0; scale = 0.5; opacity = 0;
              }

              const isFront = diff === 0;

              return (
                <motion.div
                  key={item.id}
                  animate={{ x, y, rotate, scale, opacity, zIndex }}
                  transition={{ type: "spring", stiffness: 50, damping: 14 }}
                  onClick={() => {
                    if (isFront) setSelectedImage(item.src); // Zoom if it's the front card
                    else setActiveWaIndex(i); // Pull to front if it's a back card
                  }}
                  className={`absolute w-[240px] md:w-[320px] bg-white p-2 md:p-3 rounded-2xl shadow-2xl border border-gray-100 cursor-pointer ${isFront ? 'hover:scale-110' : 'hover:scale-100'} transition-transform duration-300`}
                >
                  <img 
                    src={item.src} 
                    alt="WhatsApp Feedback" 
                    className="w-full h-auto object-cover rounded-xl"
                  />
                  
                  {/* Expand icon purely for the front card on hover */}
                  {isFront && (
                    <div className="absolute inset-0 bg-white/40 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center shadow-lg">
                        <Maximize2 size={20} />
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}

          </div>

        </div>
      </section>

      {/* FULLSCREEN IMAGE MODAL FOR WHATSAPP SCREENSHOTS */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm p-4 md:p-10 flex items-center justify-center cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full max-h-[90vh] bg-white p-2 rounded-2xl shadow-2xl flex items-center justify-center"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-4 -right-4 z-10 w-10 h-10 rounded-full bg-white text-black shadow-lg flex items-center justify-center hover:bg-[#84C225] hover:text-white transition-colors"
              >
                <X size={20} />
              </button>

              <img 
                src={selectedImage} 
                alt="Full View" 
                className="w-full h-auto max-h-[85vh] object-contain rounded-xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}