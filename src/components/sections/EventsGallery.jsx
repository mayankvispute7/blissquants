import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, MapPin, X } from 'lucide-react';

const eventsData = [
  { id: 1, image: "/events/indor_training_1.png", title: "Indore Training", location: "Indore, India", date: "October 2025", sentences: ["Intensive 3-day training bootcamp.", "Trained candidates in live scenarios.", "95% strategy success rate."] },
  { id: 2, image: "/events/book_launch.jpeg", title: "Book Launch", location: "Mumbai, India", date: "August 2025", sentences: ["Awarded 'Best Risk Tech' of the year.", "Over 500+ institutional traders attended.", "Keynote delivered by lead quant engineers."] },
  { id: 3, image: "/events/pune_training_1.jpeg", title: "Pune Training", location: "Pune, India", date: "May 2025", sentences: ["Showcased automated rebalancing.", "Innovator in UI/UX recognition.", "Partnered with top tier institutions."] },
  { id: 4, image: "/events/ioc_1_1.jpg", title: "IOC Corporate Event", location: "Delhi, India", date: "March 2025", sentences: ["Exclusive partner event.", "Unveiled new high-freq engine.", "Honesty and hardwork prevail."] },
  { id: 5, image: "/events/kolkata_training_1.jpeg", title: "Kolkata Training", location: "Kolkata, India", date: "January 2025", sentences: ["Discussing algo-trading futures.", "BlissQuants voted most trusted.", "Eliminating financial anxiety."] },
  { id: 6, image: "/events/indor_training_2.png", title: "Indore Advanced", location: "Indore, India", date: "November 2024", sentences: ["Advanced quantitative models.", "Real-time market simulations.", "Award-winning curriculum."] },
  { id: 7, image: "/events/ioc_3_1.jpeg", title: "IOC Summit", location: "Bangalore, India", date: "September 2024", sentences: ["Industry leader networking.", "Live delta hedging showcase.", "Record breaking attendance."] }
];

const duplicatedEvents = [...eventsData, ...eventsData, ...eventsData];

// 🎞️ THE FILM FRAME (No Hover Scale, Only 3D Click Flip)
const FilmFrame = ({ event }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="relative w-[280px] h-[360px] md:w-[320px] md:h-[420px] shrink-0 mx-2 perspective-1000 z-10 group">
      <div className="w-full h-full relative cursor-pointer" onClick={() => setIsFlipped(!isFlipped)}>
        
        <motion.div 
          className="w-full h-full relative preserve-3d"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 80, damping: 15 }}
        >
          
          {/* --- FRONT OF FILM FRAME (Image side) --- */}
          <div className="absolute inset-0 backface-hidden overflow-hidden border-4 border-[#0a0a0a] bg-[#1A1A1A]">
            <img 
              src={event.image} 
              alt={event.title} 
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-90"></div>
            
            <div className="absolute bottom-6 left-6 right-6">
              <h4 className="text-white font-heading font-black text-xl md:text-2xl tracking-tight leading-tight drop-shadow-lg">
                {event.title}
              </h4>
            </div>
          </div>

          {/* --- BACK OF FILM FRAME (Info Side Revealed on Click) --- */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 bg-[#1A1A1A] border-4 border-[#0a0a0a] p-6 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-6 border-b border-white/10 pb-4">
                <h4 className="text-[#84C225] font-heading font-black text-lg md:text-xl tracking-tight leading-tight">
                  {event.title}
                </h4>
                <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center shrink-0 transition-colors hover:bg-white/20">
                  <X size={14} className="text-white/60" />
                </div>
              </div>
              
              <div className="flex flex-col gap-4 mt-2">
                {event.sentences.map((sentence, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: isFlipped ? 1 : 0, x: isFlipped ? 0 : -10 }}
                    transition={{ delay: isFlipped ? 0.3 + (idx * 0.15) : 0 }}
                    className="flex items-start gap-3"
                  >
                    <Award size={16} className="text-[#84C225] shrink-0 mt-0.5" />
                    <p className="text-white/80 font-sans text-[13px] md:text-[15px] font-medium leading-relaxed">
                      {sentence}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 text-white/40 text-[11px] md:text-xs font-sans mt-4 pt-4 border-t border-white/5">
              <span className="flex items-center gap-1.5"><Calendar size={12} className="text-[#84C225]/60"/> {event.date}</span>
              <span className="flex items-center gap-1.5"><MapPin size={12} className="text-[#84C225]/60"/> {event.location}</span>
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default function EventsGallery() {
  return (
    <section className="bg-[#3B3531] relative z-20 py-24 md:py-36 overflow-hidden border-t border-white/5">
      
      {/* Removed the AmbientBackground and dynamic radial gradients entirely */}
      
      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        
        @keyframes scroll-gallery { 
          0% { transform: translateX(0); } 
          100% { transform: translateX(-50%); } 
        }
        .animate-scroll-gallery { 
          animation: scroll-gallery 60s linear infinite; 
          width: max-content; 
        }
        
        .group-hover-pause:hover .animate-scroll-gallery { 
          animation-play-state: paused; 
        }

        .film-strip-track {
          background-color: #0a0a0a;
          position: relative;
          padding: 32px 0; 
          box-shadow: 0 30px 60px rgba(0,0,0,0.6);
        }

        .film-strip-track::before,
        .film-strip-track::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          height: 16px;
          background-image: repeating-linear-gradient(90deg, transparent 0px, transparent 16px, #3B3531 16px, #3B3531 24px);
          z-index: 5;
        }

        .film-strip-track::before { top: 6px; }
        .film-strip-track::after { bottom: 6px; }
      `}</style>

      <div className="relative z-10 w-full flex flex-col items-center">
        
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto px-6 text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-heading font-black text-white tracking-tight leading-[1.1] md:leading-[1.2]">
            There aren't many trusted and awarded <br className="hidden md:block"/> 
            <span className="text-[#84C225]">Option Delta Hedging</span> training companies in India. <br className="hidden md:block"/>
            <span className="text-white/60 font-medium text-xl md:text-3xl block mt-4 md:mt-6">It takes honesty and hard work to reach here.</span>
          </h2>
        </motion.div>

        <div className="w-full group-hover-pause relative my-8">
          <div className="film-strip-track relative flex overflow-x-hidden w-full z-10">
            <div className="flex items-center animate-scroll-gallery">
              {duplicatedEvents.map((event, i) => (
                <FilmFrame key={`${event.id}-${i}`} event={event} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}