import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { goals } from '../data/portfolio';
import { useStore } from '../store/useStore';
import { Target, Construction, Rocket, Cpu, Settings, TrendingUp } from 'lucide-react';

const icons = { Target, Construction, Rocket, Cpu, Settings, TrendingUp };

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 },
  }),
};

function GoalCard({ icon, title, desc, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const { setCursor, resetCursor } = useStore();

  return (
    <motion.div
      ref={ref}
      variants={fadeUp} custom={delay} initial="hidden" animate={inView ? 'show' : 'hidden'}
      whileHover={{ y: -3, borderColor: 'var(--ink3)' }}
      onMouseEnter={() => setCursor('link')}
      onMouseLeave={resetCursor}
      className="p-8 rounded-xl border border-[var(--line)] transition-colors"
      style={{ background: 'var(--surface)' }}
    >
      <div className="mb-5" style={{ color: 'var(--ink2)' }}>
        {(() => {
          const Icon = icons[icon];
          return Icon ? <Icon size={26} strokeWidth={1.5} /> : null;
        })()}
      </div>
      <div className="font-medium text-[14px] mb-2" style={{ color: 'var(--ink)' }}>{title}</div>
      <p className="text-[13px] leading-[1.65]" style={{ color: 'var(--ink2)' }}>{desc}</p>
    </motion.div>
  );
}

export default function Goals() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="goals" className="py-24 border-t border-[var(--line)]">
      <div className="max-w-[1080px] mx-auto px-12">
        <motion.div
          ref={ref}
          variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'}
          className="mb-14"
        >
          <div className="font-mono text-[11px] tracking-[1.5px] uppercase mb-2.5" style={{ color: 'var(--ink3)' }}>Ambition</div>
          <h2 className="font-serif text-[clamp(34px,4vw,50px)] font-normal tracking-[-1px] leading-[1.05]" style={{ color: 'var(--ink)' }}>
            Where I'm headed
          </h2>
        </motion.div>

        <div className="grid grid-cols-3 gap-4 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
          {goals.map((g, i) => (
            <GoalCard key={g.title} {...g} delay={i * 0.05} />
          ))}
        </div>
      </div>
    </section>
  );
}
