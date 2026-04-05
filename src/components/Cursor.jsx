import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useStore } from '../store/useStore';

export default function Cursor() {
  const { cursorVariant, cursorLabel } = useStore();

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [mouseX, mouseY]);

  const variants = {
    default: {
      width: 8,
      height: 8,
      backgroundColor: 'var(--ink)',
      border: 'none',
      borderRadius: '50%',
    },
    link: {
      width: 44,
      height: 44,
      backgroundColor: 'transparent',
      border: '1.5px solid var(--ink2)',
      borderRadius: '50%',
    },
    project: {
      width: 80,
      height: 80,
      backgroundColor: 'var(--ink)',
      border: 'none',
      borderRadius: '50%',
    },
    text: {
      width: 44,
      height: 44,
      backgroundColor: 'transparent',
      border: '1.5px solid var(--ink)',
      borderRadius: '50%',
    },
  };

  return (
    <motion.div
      className="fixed z-[9999] pointer-events-none flex items-center justify-center"
      style={{
        left: cursorX,
        top: cursorY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      variants={variants}
      animate={cursorVariant}
      transition={{ type: 'spring', damping: 25, stiffness: 300 }}
    >
      {cursorVariant === 'project' && cursorLabel && (
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="text-paper text-[10px] font-mono font-medium tracking-wide pointer-events-none select-none"
        >
          {cursorLabel}
        </motion.span>
      )}
    </motion.div>
  );
}
