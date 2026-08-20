import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { COMPANY_INFO, NAVIGATION } from '../data/company';
import { cn } from '../lib/utils';
import Magnetic from './Magnetic';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-[100] transition-all duration-700 h-[70px] md:h-[80px] flex items-center",
        scrolled ? "bg-black/60 backdrop-blur-xl border-b border-white/5 h-[60px] md:h-[70px] shadow-2xl" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-full">
        {/* Logo - Left aligned */}
        <div className="flex-1 flex justify-start items-center">
          <motion.div whileTap={{ scale: 0.95 }}>
            <Link to="/" className="flex items-center group">
              <img 
                src={COMPANY_INFO.logoUrl} 
                alt={COMPANY_INFO.name} 
                className={cn(
                  "w-auto transition-all duration-700",
                  scrolled ? "h-10 md:h-12" : "h-14 md:h-16"
                )}
              />
            </Link>
          </motion.div>
        </div>

        {/* Center Navigation */}
        <div className="hidden lg:flex flex-[2] justify-center items-center space-x-8">
          {NAVIGATION.map((item) => (
            <div key={item.path} className={cn("relative group", item.children ? "flex items-center" : "")}>
              <Link
                to={item.path}
                className={cn(
                  "nav-link transition-all duration-500",
                  location.pathname === item.path || item.children?.some((child) => location.pathname === child.path) ? "text-gold" : ""
                )}
              >
                {item.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 h-[1px] bg-gold transition-all duration-500",
                  location.pathname === item.path || item.children?.some((child) => location.pathname === child.path) ? "w-full" : "w-0 group-hover:w-full"
                )} />
              </Link>
              {item.children && (
                <>
                  <ChevronDown size={14} className="ml-1 text-gold/70" />
                  <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-4 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                    <div className="border border-white/10 bg-black/95 p-2 shadow-2xl backdrop-blur-xl">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className={cn(
                            "block px-4 py-3 text-xs font-bold uppercase tracking-[0.16em] transition-colors hover:bg-white/5 hover:text-gold",
                            location.pathname === child.path ? "text-gold" : "text-white"
                          )}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Desktop CTA - Right aligned */}
        <div className="hidden lg:flex flex-1 justify-end items-center gap-4">
          <LanguageSwitcher />
          <Magnetic strength={0.2}>
            <motion.div whileTap={{ scale: 0.95 }}>
              <Link to="/get-a-quote" className="btn-gold !px-6 !py-3">
                GET A QUOTE
              </Link>
            </motion.div>
          </Magnetic>
        </div>

        {/* Mobile Toggle */}
        <motion.button 
          whileTap={{ scale: 0.9 }}
          className="lg:hidden text-gold p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            id="mobile-navigation"
            role="dialog"
            aria-label="Mobile navigation"
            className="fixed inset-0 z-[110] min-h-[100dvh] overflow-y-auto overscroll-contain bg-[#0D0F10] px-6 pb-10 pt-24 lg:hidden"
          >
            <div className="mt-10 flex flex-col space-y-7">
              {NAVIGATION.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div whileTap={{ scale: 0.95 }}>
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-[clamp(1.5rem,8vw,2.15rem)] font-black uppercase tracking-[0.12em] flex justify-between items-center gap-4 transition-colors duration-300",
                        location.pathname === item.path ? "text-gold" : "text-white hover:text-gold"
                      )}
                    >
                      {item.name}
                      <div className="w-8 h-[1px] bg-gold/50" />
                    </Link>
                    {item.children && (
                      <div className="mt-4 ml-4 flex flex-col gap-3 border-l border-gold/30 pl-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                              "text-sm font-bold uppercase tracking-[0.16em] transition-colors",
                              location.pathname === child.path ? "text-gold" : "text-white/70 hover:text-gold"
                            )}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAVIGATION.length * 0.1 }}
                whileTap={{ scale: 0.98 }}
                className="pt-10"
              >
                <LanguageSwitcher mobile />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (NAVIGATION.length + 1) * 0.1 }}
                whileTap={{ scale: 0.98 }}
                className="pt-2"
              >
                <Link to="/get-a-quote" onClick={() => setIsOpen(false)} className="btn-gold block w-full py-5 text-center text-sm font-black uppercase tracking-[0.2em] rounded-sm shadow-xl shadow-gold/10">
                  Get a Quote
                </Link>
              </motion.div>
            </div>
            
            <div className="mt-auto pb-12">
              <p className="text-gray-500 text-sm mb-4 tracking-widest uppercase">Contact Us</p>
              <p className="text-white font-medium">{COMPANY_INFO.phone}</p>
              <p className="text-white font-medium">{COMPANY_INFO.email}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
