import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, ShieldCheck, Briefcase, GraduationCap, BookOpen } from 'lucide-react';

const offerings = [
  {
    id: 1,
    title: "Algorithmic Trading",
    desc: "Automate your trades with mathematically verified quantitative strategies.",
    icon: LineChart,
    colSpan: "col-span-1"
  },
  {
    id: 2,
    title: "Delta Hedging",
    desc: "Advanced risk mitigation to protect your capital against market downturns.",
    icon: ShieldCheck,
    colSpan: "col-span-1"
  },
  {
    id: 3,
    title: "Wealth Management",
    desc: "Comprehensive portfolio structuring for long-term financial growth.",
    icon: Briefcase,
    colSpan: "col-span-1"
  },
  {
    id: 4,
    title: "Elite Education",
    desc: "Master the markets with our hands-on, expert-led training programs.",
    icon: GraduationCap,
    colSpan: "md:col-span-2 lg:col-span-1 lg:col-start-2" // Centers it nicely on bottom row
  },
  {
    id: 5,
    title: "The BlissQuants Book",
    desc: "Discover our award-winning methodologies in our newly launched book.",
    icon: BookOpen,
    image: "/events/book_launch.jpeg", // Placeholder for your book image
    colSpan: "md:col-span-2 lg:col-span-1" // Pairs with card 4 on the bottom row
  }
];

export default function Services() {
  return (
    <section className="bg-[#F5F5F0] py-24 md:py-32 relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* THEMED HEADER (Matches your exact request) */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#84C225] font-sans font-bold text-xs tracking-[0.2em] uppercase mb-4"
          >
            Platform Capabilities
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-sans font-black text-[#1A1A1A] tracking-tighter mb-6"
          >
            Our Core Offerings
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 font-sans text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Empower your financial journey with our specialized tools, wealth solutions, and elite educational resources.
          </motion.p>
        </div>

        {/* 5-BOX FINITE LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {offerings.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative overflow-hidden bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-300 group ${item.colSpan}`}
            >
              {/* If it's the 5th card (Book), show the edge-to-edge image */}
              {item.image && (
                <div className="absolute inset-0 z-0">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
                </div>
              )}

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#F5F5F0] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#84C225] transition-all duration-300">
                    <item.icon className="text-[#1A1A1A] w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-sans font-black text-[#1A1A1A] tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 font-sans text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}