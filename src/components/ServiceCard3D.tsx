import React, { useRef, useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'motion/react';
import { LucideIcon, ArrowRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

interface ServiceCard3DProps {
  title: string;
  description: string;
  iconName: string;
  path: string;
  image?: string;
  className?: string;
}

const ServiceCard3D: React.FC<ServiceCard3DProps> = ({ title, description, iconName, path, image, className }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Motion values for smooth 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Springs for smoother movement
  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 25 });

  // Transforms for rotation (Max 4 degrees for extreme luxury subtlety)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["4deg", "-4deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-4deg", "4deg"]);

  // Transforms for light/glow position
  const lightX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const lightY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);
  const imageX = useTransform(mouseXSpring, [-0.5, 0.5], [-10, 10]);
  const imageY = useTransform(mouseYSpring, [-0.5, 0.5], [-10, 10]);

  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const IconComponent = (LucideIcons as any)[iconName] as LucideIcon || LucideIcons.HelpCircle;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => {
    if (isMobile) return;
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <Link to={path} className="block group h-full perspective-1200">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        whileTap={{ scale: 0.98 }}
        style={{
          rotateX: isMobile ? 0 : rotateX,
          rotateY: isMobile ? 0 : rotateY,
          transformStyle: 'preserve-3d',
        }}
        className={cn(
          "glass-card p-8 h-full relative overflow-hidden transition-all duration-700 bg-secondary-bg hover:bg-black/40 border-white/5 hover:border-gold/30 flex flex-col",
          className
        )}
      >
        {/* Parallax Image Layer */}
        {image && (
          <div className="absolute inset-0 z-0 opacity-[0.08] group-hover:opacity-[0.15] transition-opacity duration-1000">
            <motion.img 
              src={image} 
              alt="" 
              className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-[2000ms]"
              style={{
                x: isMobile ? 0 : imageX,
                y: isMobile ? 0 : imageY,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary-bg via-transparent to-transparent" />
          </div>
        )}

        {/* Dynamic Light/Glow Effect */}
        {!isMobile && (
          <motion.div 
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-10"
            style={{
              background: `radial-gradient(circle at ${lightX.get()} ${lightY.get()}, rgba(201, 154, 50, 0.15) 0%, transparent 50%)`
            }}
          />
        )}

        {/* Inner Content with its own 3D depth */}
        <div className="relative z-20 flex flex-col h-full" style={{ transform: 'translateZ(30px)' }}>
          <div className="w-14 h-14 bg-gold/10 rounded-sm flex items-center justify-center mb-10 group-hover:bg-gold/20 transition-all duration-500">
            <IconComponent className="text-gold" size={28} />
          </div>
          
          <h3 className="text-lg font-bold mb-6 transition-colors duration-400 uppercase tracking-[0.15em] leading-tight">
            {title}
          </h3>
          
          <p className="text-gray-500 text-sm leading-relaxed mb-10 font-serif-body opacity-90 group-hover:opacity-100 transition-opacity flex-grow">
            {description}
          </p>
          
          <div className="flex items-center text-gold text-[10px] font-bold tracking-[0.3em] opacity-60 group-hover:opacity-100 transition-all duration-500 uppercase mt-auto">
            <span className="relative overflow-hidden group/btn py-2">
              EXPLORE SERVICE
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </span>
            <ArrowRight size={14} className="ml-3 group-hover:translate-x-2 transition-transform" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ServiceCard3D;
