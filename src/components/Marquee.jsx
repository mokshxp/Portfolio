import { motion } from 'framer-motion';
import { marqueeWords } from '../data/portfolio';

export default function Marquee() {
  const doubled = [...marqueeWords, ...marqueeWords];

  return (
    <div
      className="py-9 border-t border-b border-[var(--line)] overflow-hidden"
      style={{ background: 'var(--paper)' }}
    >
      <motion.div
        className="flex w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 22, ease: 'linear', repeat: Infinity }}
        whileHover={{ animationPlayState: 'paused' }}
      >
        {doubled.map((word, i) => (
          <span
            key={i}
            className="font-serif italic text-[clamp(26px,3.5vw,42px)] whitespace-nowrap px-9 border-r border-[var(--line)] transition-colors"
            style={{ color: 'var(--ink3)' }}
            onMouseEnter={e => e.target.style.color = 'var(--ink)'}
            onMouseLeave={e => e.target.style.color = 'var(--ink3)'}
          >
            {word}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
