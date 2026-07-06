import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const servicesData = [
  {
    id: 1,
    num: "01",
    title: "Algorithmic Trading",
    subtitle: "Automate your edge in the markets.",
    desc: "Deploy highly optimized, latency-sensitive trading algorithms. We provide the infrastructure to backtest and execute complex quantitative strategies with absolute precision.",
    bgColor: "bg-primary",
    textColor: "text-dark",
    btnBg: "bg-dark",
    btnText: "text-light",
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    num: "02",
    title: "AI-Powered Analytics",
    subtitle: "Decode the noise with artificial intelligence.",
    desc: "Utilize advanced Large Language Models (LLMs) to process real-time market sentiment, news feeds, and global economic data, turning unstructured information into actionable alpha.",
    bgColor: "bg-light",
    textColor: "text-dark",
    btnBg: "bg-primary",
    btnText: "text-dark",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    num: "03",
    title: "Risk Management",
    subtitle: "Protect capital. Maximize returns.",
    desc: "Dynamic, real-time risk auditing tools that autonomously monitor your portfolio exposure. Set strict draw-down limits and let our platform ensure your wealth is protected.",
    bgColor: "bg-[#1A1A1A]", 
    textColor: "text-light",
    btnBg: "bg-primary",
    btnText: "text-dark",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop"
  }
];

export default function Services() {
  return (
    <section className="bg-dark pt-12 pb-32 relative z-20">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Sticky Stacking Cards Container */}
        <div className="relative w-full pb-[10vh]"> 
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className={`sticky w-full min-h-[500px] md:h-[600px] rounded-[2rem] shadow-[0_-20px_40px_rgba(0,0,0,0.4)] flex flex-col md:flex-row overflow-hidden ${service.bgColor} ${service.textColor}`}
              style={{ 
                top: `calc(120px + ${index * 40}px)`, 
                marginBottom: '5vh' 
              }}
            >
              
              <div className="flex flex-col justify-between p-10 md:p-16 w-full md:w-7/12">
                <div>
                  <h3 className="text-4xl md:text-6xl font-heading tracking-tight mb-2">
                    {service.title}
                  </h3>
                  <p className="text-lg md:text-xl font-sans font-medium opacity-80">
                    {service.subtitle}
                  </p>
                </div>
                
                <div className="mt-12 md:mt-0">
                  <p className="text-sm md:text-base font-sans max-w-sm mb-8 leading-relaxed opacity-90">
                    {service.desc}
                  </p>
                  <button className={`group flex items-center gap-3 px-6 py-3 rounded-full font-sans font-bold text-sm uppercase tracking-wide transition-transform hover:scale-105 ${service.btnBg} ${service.btnText}`}>
                    Discover our approach
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              <div className="hidden md:flex flex-col justify-between items-end p-10 md:p-16 w-5/12 border-l border-black/5 dark:border-white/5">
                <span className="text-5xl lg:text-7xl font-heading tracking-tighter opacity-30">
                  {service.num}
                </span>
                
                <div className="w-[240px] h-[320px] rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                  <img 
                    src={service.img} 
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" 
                  />
                </div>
              </div>

            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}