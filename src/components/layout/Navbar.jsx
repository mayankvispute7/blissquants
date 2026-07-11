import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Wealthsimple style: Navbar gets a subtle background blur when scrolling
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ["HOME", "TRADE", "INVESTMENT", "EDUCATION", "ABOUT"];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-[#3B3531]/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Logo Section - Ready for provided image */}
        <div className="flex items-center gap-2 cursor-pointer">
          {/* REPLACE the src below with your actual logo path (e.g., "/logo.png") */}
          <div className="w-8 h-8 bg-[#84C225] flex items-center justify-center rounded-sm">
            <span className="text-[#3B3531] font-black text-xl">B</span>
          </div>
          <span className="text-white font-bold text-xl tracking-tight">BlissQuants</span>
        </div>

        {/* Desktop Links (Centered, minimal, tight spacing like Wealthsimple) */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              className="text-[11px] font-bold text-white/80 hover:text-white uppercase tracking-[0.15em] transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-6">
          <button className="text-white/80 hover:text-white transition-colors">
            <Sun size={18} />
          </button>
          <button className="text-[12px] font-bold text-white uppercase tracking-wider hover:opacity-70 transition-opacity">
            Login
          </button>
          <button className="bg-[#84C225] text-[#3B3531] text-[12px] font-bold uppercase tracking-wider px-6 py-2.5 rounded-full hover:bg-[#95D600] transition-colors duration-300">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#3B3531] shadow-2xl py-6 px-6 flex flex-col gap-6 md:hidden border-t border-white/10"
          >
            {navLinks.map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`}
                className="text-sm font-bold text-white/80 hover:text-[#84C225] uppercase tracking-widest transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link}
              </a>
            ))}
            <div className="w-full h-px bg-white/10 my-2"></div>
            <button className="text-sm font-bold text-white uppercase tracking-widest text-left">
              Login
            </button>
            <button className="bg-[#84C225] text-[#3B3531] text-sm font-bold uppercase tracking-widest px-6 py-3 rounded-full text-center">
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}