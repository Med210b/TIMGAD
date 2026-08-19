import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './Navbar';
import Footer from './Footer';
import BackgroundElements from './BackgroundElements';
import { cn } from '../lib/utils';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { pathname } = useLocation();

  const whatsappNumber = '971555788779';
  const whatsappMessage = encodeURIComponent(
    'Hello TIMGAD Government Transaction Services, I would like to get more information about your services.'
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="flex flex-col min-h-screen">
      <BackgroundElements />
      <Navbar />

      <main
        className={cn(
          "flex-grow",
          pathname !== "/" && "pt-[100px] md:pt-[110px] lg:pt-[120px]"
        )}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />

      {/* Floating WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact TIMGAD on WhatsApp"
        initial={{ opacity: 0, scale: 0.7, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        transition={{
          duration: 0.4,
          ease: "easeOut"
        }}
        className="
          fixed
          right-5
          bottom-5
          md:right-7
          md:bottom-7
          z-[9999]
          w-14
          h-14
          md:w-16
          md:h-16
          rounded-full
          bg-[#25D366]
          flex
          items-center
          justify-center
          shadow-[0_8px_30px_rgba(0,0,0,0.35)]
          border-2
          border-white/20
          group
        "
      >
        {/* WhatsApp Icon */}
        <svg
          viewBox="0 0 32 32"
          className="w-7 h-7 md:w-8 md:h-8 fill-white"
          aria-hidden="true"
        >
          <path d="M19.11 17.21c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.15-1.34-.79-.7-1.32-1.57-1.48-1.84-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01s-.48.07-.73.34c-.25.27-.95.93-.95 2.27 0 1.34.97 2.63 1.11 2.81.14.18 1.9 2.9 4.61 4.07.64.28 1.14.45 1.53.57.64.2 1.22.17 1.68.1.51-.08 1.6-.66 1.83-1.29.23-.63.23-1.17.16-1.29-.07-.11-.25-.18-.52-.32z" />
          <path d="M16.01 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.59 4.39 1.63 6.24L3.14 28.8l6.7-1.66a12.74 12.74 0 0 0 6.17 1.58h.01c7.06 0 12.8-5.74 12.8-12.8 0-3.42-1.33-6.64-3.75-9.06A12.72 12.72 0 0 0 16.01 3.2zm0 23.43h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-3.98.99 1.06-3.88-.25-.4a10.61 10.61 0 0 1-1.63-5.63c0-5.85 4.76-10.61 10.61-10.61 2.83 0 5.49 1.1 7.49 3.11a10.54 10.54 0 0 1 3.11 7.5c0 5.85-4.76 10.61-10.61 10.61z" />
        </svg>

        {/* Tooltip */}
        <span
          className="
            absolute
            right-full
            mr-3
            top-1/2
            -translate-y-1/2
            whitespace-nowrap
            rounded-md
            bg-[#111]
            text-white
            px-3
            py-2
            text-xs
            font-medium
            opacity-0
            pointer-events-none
            group-hover:opacity-100
            transition-opacity
            duration-200
            shadow-lg
            border
            border-[#c9a227]/30
          "
        >
          Chat with us on WhatsApp
        </span>
      </motion.a>
    </div>
  );
};

export default Layout;