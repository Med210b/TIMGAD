import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue } from 'motion/react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Magnetic from './Magnetic';
import { cn } from '../lib/utils';
import { SLIDES } from '../data/company';

const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef<HTMLElement>(null);
  
  // Cursor Parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const contentX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), { stiffness: 50, damping: 20 });
  const contentY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-15, 15]), { stiffness: 50, damping: 20 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "15%"]), {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  return (
    <section 
      ref={containerRef} 
      onMouseMove={handleMouseMove}
      className="relative w-full overflow-hidden bg-black flex items-center aspect-[3/4] sm:aspect-video md:aspect-auto md:h-[85vh] lg:h-[90vh] min-h-[500px] max-h-[1000px]"
    >
      {/* Background Videos with AnimatePresence for Cinematic Crossfade */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0"
            style={{ y: backgroundY }}
          >
            <video
              src={SLIDES[current].video}
              autoPlay
              muted
              playsInline
              onEnded={nextSlide}
              className="w-full h-full object-cover brightness-[0.7]"
            />
            
            {/* Cinematic Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-16">
        <motion.div 
          style={{ x: contentX, y: contentY }}
          className="max-w-[750px]"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
              className="space-y-6 md:space-y-8"
            >
              <motion.p 
                initial={{ opacity: 0, letterSpacing: "1em" }}
                animate={{ opacity: 0.8, letterSpacing: "0.5em" }}
                className="eyebrow"
              >
                {SLIDES[current].eyebrow}
              </motion.p>
              
              <h1 className="h-hero text-white">
                {SLIDES[current].title.part1} <br />
                <span className="gold-gradient">{SLIDES[current].title.highlight}</span> <br />
                {SLIDES[current].title.part2}
              </h1>
              
              <p className="p-main text-ivory/70 max-w-xl font-serif-body">
                {SLIDES[current].description}
              </p>
              
              <div className="flex pt-6">
                <Magnetic strength={0.15}>
                  <motion.div whileTap={{ scale: 0.95 }}>
                    <Link 
                      to={SLIDES[current].buttonPath} 
                      className="btn-gold"
                    >
                      {SLIDES[current].buttonLabel} 
                    </Link>
                  </motion.div>
                </Magnetic>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Progress Indicators - Minimalist Design */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex space-x-6">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="group relative py-4"
            aria-label={`Go to slide ${i + 1}`}
          >
            <div className={`h-[1px] transition-all duration-1000 ${
              current === i ? 'w-16 bg-gold' : 'w-8 bg-white/20 group-hover:bg-white/40'
            }`} />
            <span className={cn(
              "absolute -top-2 left-0 text-[10px] font-bold tracking-widest transition-opacity duration-700",
              current === i ? "opacity-100 text-gold" : "opacity-0"
            )}>
              0{i + 1}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
