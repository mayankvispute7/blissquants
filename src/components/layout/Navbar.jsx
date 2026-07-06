import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

const TradingIcon = () => (
  <div className="flex items-end gap-[2px] h-3 w-3 overflow-hidden group-hover:opacity-100 opacity-70 transition-opacity">
    <motion.div className="w-1 bg-light rounded-sm" initial={{ height: "40%" }} whileHover={{ height: ["40%", "80%", "40%"] }} transition={{ duration: 0.6, repeat: Infinity }} />
    <motion.div className="w-1 bg-light rounded-sm" initial={{ height: "60%" }} whileHover={{ height: ["60%", "100%", "60%"] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.1 }} />
    <motion.div className="w-1 bg-primary rounded-sm" initial={{ height: "100%" }} whileHover={{ height: ["100%", "40%", "100%"] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }} />
  </div>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Trade', href: '#' },
    { name: 'Investment', href: '#' },
    { name: 'Education', href: '#' },
    { name: 'About', href: '#' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 3.5 }}
      // Reduced padding: py-3 when scrolled, py-4 when at top (was py-4 / py-6)
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 glass-panel border-b border-white/5 shadow-xl' : 'py-4 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        <div className="flex items-center gap-2 cursor-pointer group">
          {/* Made logo slightly smaller */}
          <div className="w-7 h-7 bg-primary rounded-sm flex items-center justify-center font-bold text-dark text-lg font-serif">
            B
          </div>
          <span className="font-serif text-lg font-semibold text-light tracking-tight">
            BlissQuants
          </span>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              // Reduced link text size to text-xs
              className="text-xs font-sans font-bold uppercase tracking-widest text-grey/80 hover:text-primary transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-5">
          <button onClick={() => setIsDarkMode(!isDarkMode)} className="text-grey/80 hover:text-primary transition-colors">
            {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          
          <button className="group flex items-center gap-1.5 text-xs font-sans font-bold uppercase tracking-widest text-light hover:text-primary transition-colors">
            <TradingIcon />
            Login
          </button>
          
          {/* Reduced button padding and text size */}
          <button className="px-5 py-2 bg-primary text-dark font-sans font-bold text-xs uppercase tracking-widest rounded-full hover:scale-105 transition-transform duration-300">
            Get Started
          </button>
        </div>
      </div>
    </motion.nav>
  );
}