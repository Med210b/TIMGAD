import React from 'react';
import { motion } from 'motion/react';

interface SectionDividerProps {
  type?: 'line' | 'wave' | 'gradient';
  color?: string;
  className?: string;
}

const SectionDivider: React.FC<SectionDividerProps> = ({ 
  type = 'line', 
  color = '#C99A32', 
  className 
}) => {
  return (
    <div className={`w-full overflow-hidden pointer-events-none ${className}`}>
      {type === 'line' && (
        <div className="relative h-[2px] w-full bg-black">
          <motion.div 
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-gold to-transparent opacity-30"
          />
          <motion.div 
            initial={{ left: '-20%' }}
            animate={{ left: '120%' }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 w-[20%] h-full bg-gradient-to-r from-transparent via-gold-bright to-transparent"
          />
        </div>
      )}

      {type === 'wave' && (
        <div className="relative h-24 w-full">
          <svg className="absolute bottom-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 320">
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
              fill="none"
              stroke={color}
              strokeWidth="0.5"
              strokeOpacity="0.2"
              d="M0,160L80,176C160,192,320,224,480,213.3C640,203,800,149,960,144C1120,139,1280,181,1360,202.7L1440,224"
            />
          </svg>
        </div>
      )}

      {type === 'gradient' && (
        <div className="h-32 w-full bg-gradient-to-b from-transparent via-gold/5 to-transparent opacity-50" />
      )}
    </div>
  );
};

export default SectionDivider;
