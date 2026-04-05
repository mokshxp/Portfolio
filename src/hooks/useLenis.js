import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

let lenisInstance = null;

export function useLenis() {
  const rafRef = useRef(null);

  useEffect(() => {
    lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenisInstance.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    }
    rafRef.current = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafRef.current);
      lenisInstance.destroy();
      lenisInstance = null;
    };
  }, []);

  return lenisInstance;
}

export function getLenis() {
  return lenisInstance;
}
