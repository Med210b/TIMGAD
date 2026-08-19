import React from 'react';
import { motion } from 'motion/react';

const BackgroundElements: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {/* Subtle Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-gold/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-gold/3 blur-[150px] rounded-full opacity-50" />
      
      {/* Moving Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[1px] h-[1px] bg-gold/20 rounded-full"
          initial={{ 
            x: Math.random() * 100 + "%", 
            y: Math.random() * 100 + "%",
            opacity: 0 
          }}
          animate={{ 
            y: [null, "-10%"],
            opacity: [0, 0.4, 0]
          }}
          transition={{ 
            duration: Math.random() * 10 + 10, 
            repeat: Infinity, 
            ease: "linear",
            delay: Math.random() * 10
          }}
        />
      ))}

      {/* Floating thin lines */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-[1px] bg-gradient-to-r from-transparent via-gold/10 to-transparent"
          style={{ 
            width: '100%',
            top: (25 + i * 20) + "%",
            left: '-100%'
          }}
          animate={{ left: '100%' }}
          transition={{ 
            duration: 15 + i * 5, 
            repeat: Infinity, 
            ease: "linear",
            delay: i * 2
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundElements;
