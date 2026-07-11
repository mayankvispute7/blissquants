import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Calendar, MapPin, X } from 'lucide-react';

// 🚀 Premium Ambient Fluid Background
const AmbientBackground = () => (
  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-t-[3rem] md:rounded-t-[4rem]">
    <motion.div 
      animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }}
      transition={{ duration: 15, ease: "easeInOut", repeat: Infinity }}
      className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] rounded-full bg-[#84C225] filter blur-[150px] opacity-[0.08]"
    />
    <motion.div 
      animate={{ scale: [1, 1.3, 1], x: [0, -60, 0], y: [0, -40, 0] }}
      transition={{ duration: 20, ease: "easeInOut", repeat: Infinity, delay: 2 }}
      className="absolute bottom-[20%] right-[10%] w-[45vw] h-[45vw] rounded-full bg-[#84C225] filter blur-[180px] opacity-[0.06]"
    />
  </div>
);

// Demo Event Data
const eventsData = [
  { id: 1, image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop", title: "National FinTech Summit", location: "Mumbai, India", date: "October 2025", sentences: ["Awarded 'Best Risk Tech' of the year.", "Over 500+ institutional traders attended.", "Keynote delivered by lead quant engineers."] },
  { id: 2, image: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=1932&auto=format&fit=crop", title: "Delta Hedging Workshop", location: "Delhi, India", date: "August 2025", sentences: ["Intensive 3-day training bootcamp.", "Trained 100+ candidates in live scenarios.", "95% strategy success rate."] },
  { id: 3, image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop", title: "Global Wealth Conference", location: "Bangalore, India", date: "May 2025", sentences: ["Showcased automated rebalancing.", "Innovator in UI/UX recognition.", "Partnered with top tier institutions."] },
  { id: 4, image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop", title: "Institutional Mastery", location: "Pune, India", date: "March 2025", sentences: ["Exclusive partner event.", "Unveiled new high-freq engine.", "Honesty and hardwork prevail."] },
  { id: 5, image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop", title: "Founders Tech Panel", location: "Hyderabad, India", date: "January 2025", sentences: ["Discussing algo-trading futures.", "BlissQuants voted most trusted.", "Eliminating financial anxiety."] }
];

const duplicatedEvents = [...eventsData, ...eventsData, ...eventsData];

// 🃏 The Interactive Flip Card
const FlipCard = ({ event }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="relative w-[280px] h-[380px] md:w-[320px] md:h-[440px] shrink-0 mx-4 md:mx-6 perspective-1000">
      
      {/* Hover: Zoom In (Bigger Size)
        Click: Flip Reveal
      */}
      <motion.div 
        whileHover={{ scale: 1.15, zIndex: 10 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="w-full h-full relative cursor-pointer"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Flip Container */}
        <motion.div 
          className="w-full h-full relative preserve-3d"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 15 }}
        >
          
          {/* --- FRONT --- */}
          <div className="absolute inset-0 backface-hidden rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#1A1A1A]">
            <img src={event.image} alt={event.title} className="w-full h-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-90"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <h4 className="text-white font-heading font-black text-xl md:text-2xl tracking-tight">{event.title}</h4>
            </div>
          </div>

          {/* --- BACK --- */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl md:rounded-3xl bg-[#2A2522] border-[2px] border-[#84C225]/40 p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-6 border-b border-white/10 pb-4">
                <h4 className="text-[#84C225] font-heading font-black text-lg md:text-xl tracking-tight">{event.title}</h4>
                <X size={16} className="text-white/30" />
              </div>
              
              <div className="flex flex-col gap-4">
                {event.sentences.map((sentence, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: isFlipped ? 1 : 0, x: isFlipped ? 0 : -10 }}
                    transition={{ delay: 0.3 + (idx * 0.15) }}
                    className="flex items-start gap-3"
                  >
                    <Award size={16} className="text-[#84C225] shrink-0 mt-0.5" />
                    <p className="text-white/80 font-sans text-sm md:text-base font-medium leading-relaxed">{sentence}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 text-white/40 text-xs font-sans mt-4">
              <span className="flex items-center gap-1.5"><Calendar size={12}/> {event.date}</span>
              <span className="flex items-center gap-1.5"><MapPin size={12}/> {event.location}</span>
            </div>
          </div>

        </motion.div>
      </motion.div>
    </div>
  );
};

export default function EventsGallery() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="bg-[#3B3531] relative z-20 py-24 md:py-36 overflow-hidden border-t border-white/5"
    >
      <AmbientBackground />

      {/* Magical Cursor Spotlight Effect */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(132, 194, 37, 0.12), transparent 80%)`
        }}
      />

      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        
        @keyframes scroll-gallery { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-scroll-gallery { animation: scroll-gallery 50s linear infinite; width: max-content; }
        .mask-image-gallery { mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent); }
      `}</style>

      <div className="relative z-10 w-full flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-6 text-center mb-16 md:mb-24"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-black text-white tracking-tight leading-[1.3] md:leading-[1.4]">
            There aren't many trusted and awarded <br className="hidden md:block"/> 
            <span className="text-[#84C225]">Option Delta Hedging</span> training companies in India. <br className="hidden md:block"/>
            <span className="text-white/60 font-medium text-xl md:text-2xl">It takes honesty and hard work to reach here.</span>
          </h2>
        </motion.div>

        <div className="w-full mask-image-gallery py-12">
          <div className="relative flex overflow-x-hidden w-full">
            <div className="flex items-center animate-scroll-gallery">
              {duplicatedEvents.map((event, i) => (
                <FlipCard key={`${event.id}-${i}`} event={event} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}