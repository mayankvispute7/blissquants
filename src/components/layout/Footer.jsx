import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      // FIXED: relative z-50 forces the footer OVER the sticky logos in the background
      className="bg-[#0A0A0A] text-grey pt-24 pb-12 border-t border-white/5 relative z-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 mb-24">
          {[
            { title: "Company", links: ["About", "Team", "Careers", "Press"] },
            { title: "Trade", links: ["Options IV", "Strategy", "Intraday", "Positional"] },
            { title: "Invest", links: ["BlissFund 3.0", "Latest letter", "Methodology", "Pricing"] },
            { title: "Learn", links: ["Enrich Your FQ", "Investment", "Trading", "Blog"] },
            { title: "Support", links: ["Help Center", "FAQ", "Contact", "Docs"] },
            { title: "Legal", links: ["Terms", "Privacy", "Disclaimer", "Refund"] },
            { title: "Connect", links: ["LinkedIn", "Twitter", "YouTube", "Instagram"] },
          ].map((col, i) => (
            <div key={i} className="space-y-4">
              <h4 className="text-primary font-bold text-[10px] uppercase tracking-widest mb-4">{col.title}</h4>
              {col.links.map(link => (
                <a key={link} href="#" className="block text-[12px] hover:text-light transition-colors">{link}</a>
              ))}
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center text-center space-y-6 mb-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center font-bold text-dark font-serif text-lg">B</div>
            <span className="font-serif text-xl font-bold text-light">Bliss·Quants</span>
          </div>
          <p className="text-primary text-xs uppercase tracking-widest font-bold">Fearless Finance Mastery</p>
          <div className="flex flex-col md:flex-row gap-8 text-sm">
            <span>📧 inquiry@blissquants.com</span>
            <span>📞 +91 92096 32020</span>
            <span>📍 Pune, Maharashtra, India</span>
          </div>
        </div>

        <div className="text-center text-[10px] text-grey/40 border-t border-white/5 pt-10">
          <p>© 2026 BlissQuants · SEBI RA Reg. No. INH000007100</p>
          <p className="mt-2 uppercase tracking-widest">Risk Warning: Investments in securities markets are subject to market risks</p>
        </div>
      </div>
    </motion.footer>
  );
}