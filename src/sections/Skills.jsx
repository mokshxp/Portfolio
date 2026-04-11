import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '../data/portfolio';
import { useStore } from '../store/useStore';
import { CodeXml, Globe, Layers, Cpu } from 'lucide-react';

const icons = { CodeXml, Globe, Layers, Cpu };

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.07 },
  }),
};

function SkillCard({ icon, label, tags, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const { setCursor, resetCursor } = useStore();

  return (
    <motion.div
      ref={ref}
      variants={fadeUp} custom={delay} initial="hidden" animate={inView ? 'show' : 'hidden'}
      whileHover={{ y: -4, borderColor: 'var(--ink3)' }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      onMouseEnter={() => setCursor('link')}
      onMouseLeave={resetCursor}
      className="p-5 rounded-xl border border-[var(--line)]"
      style={{ background: 'var(--card-bg)' }}
    >
      <div className="mb-4" style={{ color: 'var(--ink2)' }}>
        {(() => {
          const Icon = icons[icon];
          return Icon ? <Icon size={22} strokeWidth={1.5} /> : null;
        })()}
      </div>
      <div className="font-medium text-[13px] mb-3" style={{ color: 'var(--ink)' }}>{label}</div>
      <div className="flex flex-wrap gap-1.5">
        {tags.map((t) => (
          <span key={t}
            className="px-2.5 py-1 rounded-full text-[11px] font-mono border border-[var(--line)] transition-colors"
            style={{ color: 'var(--ink2)' }}
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="skills" className="py-24 border-t border-[var(--line)]">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          ref={ref}
          variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'}
          className="mb-14"
        >
          <div className="font-mono text-[11px] tracking-[1.5px] uppercase mb-2.5" style={{ color: 'var(--ink3)' }}>Skills</div>
          <h2 className="font-serif text-[clamp(34px,4vw,50px)] font-normal tracking-[-1px] leading-[1.05]" style={{ color: 'var(--ink)' }}>
            What I work with
          </h2>
        </motion.div>

        <div className="grid grid-cols-4 gap-4 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
          {skills.map((s, i) => (
            <SkillCard key={s.label} {...s} delay={i * 0.05} />
          ))}
        </div>
      </div>
    </section>
  );
}
