import React from 'react';
import { motion } from 'motion/react';
import { Zap, ShieldCheck, Users, Globe } from 'lucide-react';

const FEATURES = [
  { icon: <Zap size={20} />, label: "FAST\nPROCESSING" },
  { icon: <ShieldCheck size={20} />, label: "100%\nCOMPLIANT" },
  { icon: <Users size={20} />, label: "TRUSTED BY\nBUSINESSES" },
  { icon: <Globe size={20} />, label: "ACROSS THE\nUAE" }
];

const FeatureCarousel: React.FC = () => {
  return (
    <div className="feature-carousel bg-black/95 py-6 border-b border-white/5 overflow-hidden">
      <div className="feature-carousel-track flex whitespace-nowrap">
        {/* First Set */}
        <motion.div 
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="feature-carousel-set flex items-center space-x-12 md:space-x-24 px-12 md:px-24"
        >
          {FEATURES.map((item, i) => (
            <div key={i} className="feature-carousel-item flex items-center space-x-4 shrink-0">
              <div className="text-gold p-2 rounded-full bg-gold/10">
                {item.icon}
              </div>
              <span className="max-w-[150px] whitespace-pre-line text-white font-black text-[10px] md:text-[11px] tracking-[0.2em] uppercase leading-[1.25]">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>
        
        {/* Duplicate Set for Seamless Loop */}
        <motion.div 
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="feature-carousel-set feature-carousel-set--duplicate flex items-center space-x-12 md:space-x-24 px-12 md:px-24"
        >
          {FEATURES.map((item, i) => (
            <div key={`dup-${i}`} className="feature-carousel-item flex items-center space-x-4 shrink-0">
              <div className="text-gold p-2 rounded-full bg-gold/10">
                {item.icon}
              </div>
              <span className="max-w-[150px] whitespace-pre-line text-white font-black text-[10px] md:text-[11px] tracking-[0.2em] uppercase leading-[1.25]">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FeatureCarousel;
