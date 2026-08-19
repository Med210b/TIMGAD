import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

interface TiltCardProps {
  title: string;
  description: string;
  iconName: string;
  path: string;
  className?: string;
}

const TiltCard: React.FC<TiltCardProps> = ({ title, description, iconName, path, className }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [lightPos, setLightPos] = useState({ x: 50, y: 50 });

  const IconComponent = (LucideIcons as any)[iconName] as LucideIcon || LucideIcons.HelpCircle;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = (mouseX / width - 0.5) * 20; // Max 10deg rotation
    const yPct = (mouseY / height - 0.5) * -20;

    setRotate({ x: yPct, y: xPct });
    setLightPos({ x: (mouseX / width) * 100, y: (mouseY / height) * 100 });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setLightPos({ x: 50, y: 50 });
  };

  return (
    <Link to={path} className="block group h-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ rotateX: rotate.x, rotateY: rotate.y }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{ transformStyle: 'preserve-3d' }}
        className={cn(
          "glass-card p-10 h-full relative overflow-hidden group-hover:border-gold/60 border-white/5 transition-all duration-700 bg-secondary-bg/40 hover:bg-secondary-bg/80",
          className
        )}
      >
        {/* Dynamic Light Effect */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: `radial-gradient(circle at ${lightPos.x}% ${lightPos.y}%, rgba(212, 162, 58, 0.25) 0%, transparent 60%)`
          }}
        />

        <div style={{ transform: 'translateZ(60px)' }}>
          <div className="w-20 h-20 bg-gold/15 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-gold/30 transition-all duration-500 shadow-xl shadow-black/20">
            <IconComponent className="text-gold-bright" size={40} />
          </div>
          
          <h3 className="text-2xl font-black mb-5 group-hover:text-gold-bright transition-colors duration-300 uppercase tracking-[0.1em]">
            {title}
          </h3>
          
          <p className="text-gray-300 text-[15px] leading-relaxed mb-8 group-hover:text-white transition-colors">
            {description}
          </p>
          
          <div className="flex items-center text-gold-bright text-xs font-black tracking-[0.3em] opacity-40 group-hover:opacity-100 transform translate-x-0 transition-all duration-500 uppercase">
            EXPLORE SERVICE <LucideIcons.ArrowRight size={16} className="ml-3 group-hover:translate-x-2 transition-transform" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default TiltCard;
