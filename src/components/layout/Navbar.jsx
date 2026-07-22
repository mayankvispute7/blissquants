import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = ['Home', 'Trade', 'Invest', 'Research', 'Learn', 'About'];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#3B3531]/80 backdrop-blur-md border-b border-white/10 py-3 md:py-4 shadow-lg' 
            : 'bg-transparent py-5 md:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 md:gap-3 group">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-[#84C225] text-[#1A1A1A] font-serif font-bold text-xl md:text-2xl flex items-center justify-center rounded-sm transition-transform group-hover:scale-105">
              B
            </div>
            <span className="text-white font-serif font-bold text-xl md:text-2xl tracking-tight">
              Bliss·Quants
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`}
                className="text-white/80 hover:text-[#84C225] font-sans text-sm font-semibold tracking-wide transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Contact Button (Desktop) */}
          <div className="hidden md:block">
            <a 
              href="#contact" 
              className="px-6 py-2.5 rounded-full bg-white/10 text-white border border-white/20 hover:bg-[#84C225] hover:text-[#1A1A1A] hover:border-[#84C225] transition-all duration-300 font-sans text-sm font-bold"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>

        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="fixed inset-0 z-[60] bg-[#3B3531] flex flex-col p-6 md:hidden"
          >
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#84C225] text-[#1A1A1A] font-serif font-bold text-xl flex items-center justify-center rounded-sm">
                  B
                </div>
                <span className="text-white font-serif font-bold text-xl tracking-tight">
                  Bliss·Quants
                </span>
              </div>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/60 hover:text-white transition-colors"
              >
                <X size={32} />
              </button>
            </div>

            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link} 
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white/80 hover:text-[#84C225] font-sans text-2xl font-bold tracking-wide transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
              <a 
                href="#contact"
                onClick={() => setMobileMenuOpen(false)} 
                className="mt-4 text-center px-6 py-4 rounded-xl bg-[#84C225] text-[#1A1A1A] transition-all duration-300 font-sans text-lg font-bold"
              >
                Contact Us
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}