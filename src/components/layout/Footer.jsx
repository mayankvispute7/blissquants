import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

// Subtle Animated Background Chart for Footer
const FooterBackground = () => {
  const primaryPath = "M 0 1000 L 150 880 L 250 920 L 450 600 L 550 680 L 750 250 L 850 350 L 1000 0";
  const secondaryPath = "M 0 1000 L 200 950 L 400 750 L 600 800 L 800 400 L 1000 0";

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-30">
      <svg className="absolute inset-0 w-full h-full z-10" viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <motion.g animate={{ x: [0, -1000] }} transition={{ ease: "linear", duration: 40, repeat: Infinity }}>
          <g>
            <path d={secondaryPath} fill="none" stroke="#FFFFFF" strokeWidth="1" opacity="0.1" />
            <path d={primaryPath} fill="none" stroke="#84C225" strokeWidth="1.5" opacity="0.3" />
          </g>
          <g transform="translate(1000, 0)">
            <path d={secondaryPath} fill="none" stroke="#FFFFFF" strokeWidth="1" opacity="0.1" />
            <path d={primaryPath} fill="none" stroke="#84C225" strokeWidth="1.5" opacity="0.3" />
          </g>
        </motion.g>
      </svg>
    </div>
  );
};

const footerLinks = {
  COMPANY: ['About', 'Team', 'Careers', 'Press'],
  TRADE: ['Options IV', 'Strategy', 'Intraday', 'Positional'],
  INVEST: ['BlissFund 3.0', 'Latest letter', 'Methodology', 'Pricing'],
  LEARN: ['Enrich Your FQ', 'Investment', 'Trading', 'Blog'],
  SUPPORT: ['Help Center', 'FAQ', 'Contact', 'Docs'],
  LEGAL: ['Terms', 'Privacy', 'Disclaimer', 'Refund'],
  CONNECT: ['LinkedIn', 'Twitter', 'YouTube', 'Instagram'],
};

export default function Footer() {
  return (
    <footer className="bg-[#3B3531] relative z-20 pt-20 pb-8 overflow-hidden border-t border-white/10">
      <FooterBackground />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 mb-20">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="flex flex-col">
              <h4 className="text-[#84C225] font-sans font-bold text-xs tracking-[0.15em] uppercase mb-6">
                {category}
              </h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/70 hover:text-white text-sm font-sans transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Middle Section: Logo & Contact */}
        <div className="flex flex-col items-center justify-center border-t border-white/10 pt-12 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-[#84C225] text-black font-serif font-bold text-2xl flex items-center justify-center rounded-sm">
              B
            </div>
            <span className="text-white font-serif font-bold text-2xl tracking-tight">
              Bliss·Quants
            </span>
          </div>
          
          <h5 className="text-[#84C225] font-sans font-bold text-sm tracking-[0.2em] uppercase mb-8">
            Fearless Finance Mastery
          </h5>

          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-white/80 text-sm font-sans">
            <a href="mailto:inquiry@blissquants.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail size={16} className="text-[#84C225]" />
              inquiry@blissquants.com
            </a>
            <a href="tel:+919209632020" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone size={16} className="text-[#84C225]" />
              +91 92096 32020
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={16} className="text-pink-500" />
              Pune, Maharashtra, India
            </span>
          </div>
        </div>

        {/* Bottom Section: Copyright & Warning */}
        <div className="flex flex-col items-center justify-center border-t border-white/5 pt-8 text-center">
          <p className="text-white/40 text-xs font-sans mb-3">
            © 2026 BlissQuants · SEBI RA Reg. No. INH000007100
          </p>
          <p className="text-white/30 text-[10px] font-sans tracking-widest uppercase">
            Risk Warning: Investments in securities markets are subject to market risks
          </p>
        </div>

      </div>
    </footer>
  );
}