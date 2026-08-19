import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const lenisRef = useRef<Lenis | null>(null);
  const location = useLocation();

  const resetNativeScroll = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  // Run before paint so route changes never reveal a previously saved bottom
  // position while Lenis is mounting or recalculating its document size.
  useLayoutEffect(() => {
    resetNativeScroll();
  }, [location.pathname]);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;
    lenis.scrollTo(0, { immediate: true, force: true });

    // Use requestAnimationFrame to update Lenis
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    let rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Keep Lenis' internal position in sync with the native position after a
  // route mounts. The next frame runs after the new page has been measured.
  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      lenisRef.current?.scrollTo(0, { immediate: true, force: true });
      resetNativeScroll();
    });

    return () => cancelAnimationFrame(frameId);
  }, [location.pathname]);

  return <>{children}</>;
};

export default SmoothScroll;
