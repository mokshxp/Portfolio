import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { learningItems } from '../data/portfolio';
import { useLeetCodeStats } from '../hooks/useLeetCodeStats';
import { useStore } from '../store/useStore';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 },
  }),
};

function LearningCard({ label, pct, status, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const { setCursor, resetCursor } = useStore();

  return (
    <motion.div
      ref={ref}
      variants={fadeUp} custom={delay} initial="hidden" animate={inView ? 'show' : 'hidden'}
      whileHover={{ y: -2, borderColor: 'var(--ink3)' }}
      onMouseEnter={() => setCursor('link')}
      onMouseLeave={resetCursor}
      className="p-6 rounded-xl border border-[var(--line)] transition-colors"
      style={{ background: 'var(--surface)' }}
    >
      <div className="font-medium text-[13px] mb-4" style={{ color: 'var(--ink)' }}>{label}</div>
      <div className="h-[3px] rounded-full mb-2" style={{ background: 'var(--line)' }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : { width: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: delay + 0.1 }}
          className="h-full rounded-full"
          style={{ background: 'var(--ink)' }}
        />
      </div>
      <div className="font-mono text-[11px]" style={{ color: 'var(--ink3)' }}>
        {pct}% — {status}
      </div>
    </motion.div>
  );
}

export default function Learning() {
  const { stats, loading } = useLeetCodeStats();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="learning" className="py-24 border-t border-[var(--line)]">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-14">
          <motion.div
            ref={ref}
            variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'}
          >
            <div className="font-mono text-[11px] tracking-[1.5px] uppercase mb-2.5" style={{ color: 'var(--ink3)' }}>Progress</div>
            <h2 className="font-serif text-[clamp(34px,4vw,50px)] font-normal tracking-[-1px] leading-[1.05]" style={{ color: 'var(--ink)' }}>
              Currently learning
            </h2>
          </motion.div>

          {/* LeetCode stats card */}
          <motion.div
            variants={fadeUp} custom={1} initial="hidden" animate={inView ? 'show' : 'hidden'}
            whileHover={{ y: -4, borderColor: 'var(--line-strong)' }}
            className="group relative p-6 rounded-[24px] border border-[var(--line)] w-full md:w-auto min-w-[300px] overflow-hidden transition-all duration-500"
            style={{ background: 'var(--surface)' }}
          >
             <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-amber-500/5 to-orange-500/5 pointer-events-none" />
             
             <div className="relative z-10">
               <div className="flex items-center gap-2 mb-6">
                  <div className="p-2 rounded-lg bg-[var(--paper)] border border-[var(--line)]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#FFA116' }}>
                      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.91a5.425 5.425 0 0 0-1.13 3.375 5.33 5.33 0 0 0 1.48 3.658 5.33 5.33 0 0 0 3.657 1.48 5.425 5.425 0 0 0 3.374-1.13l1.168-.92a.998.998 0 0 0-.32-1.733L10.55 16l-1.164.863a3.44 3.44 0 0 1-2.138.716 3.38 3.38 0 0 1-2.322-.94 3.38 3.38 0 0 1-.94-2.322 3.44 3.44 0 0 1 .717-2.138l3.851-4.907 5.443-5.831a.998.998 0 0 0-.513-1.441zm5.344 6.05a.998.998 0 0 0-.513 1.441l.512.551-3.853 4.908a.998.998 0 0 0 .32 1.732l1.043.396-1.167.92a3.44 3.44 0 0 1-2.138.717 3.38 3.38 0 0 1-2.322-.94l-.941.941a5.33 5.33 0 0 0 3.658 1.48 5.425 5.425 0 0 0 3.374-1.13l3.854-4.91A1.374 1.374 0 0 0 20.4 10.9l-5.443-5.83a1.374 1.374 0 0 0-1.13-.82z"/>
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] tracking-wider uppercase opacity-50" style={{ color: 'var(--ink)' }}>
                      LeetCode Stats
                    </span>
                    <span className="font-mono text-[10px] font-medium" style={{ color: 'var(--ink2)' }}>
                      {loading ? 'Fetching...' : `Rank #${stats?.ranking?.toLocaleString()}`}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8 mb-6">
                  <div>
                    <div className="font-serif text-4xl italic leading-none mb-1" style={{ color: 'var(--ink)' }}>{loading ? '–' : stats?.total}</div>
                    <div className="font-mono text-[10px] uppercase tracking-widest opacity-50" style={{ color: 'var(--ink)' }}>Solved</div>
                  </div>
                  <div>
                    <div className="font-serif text-4xl italic leading-none mb-1" style={{ color: 'var(--ink)' }}>{loading ? '–' : stats?.streak}</div>
                    <div className="font-mono text-[10px] uppercase tracking-widest opacity-50" style={{ color: 'var(--ink)' }}>Day Streak</div>
                  </div>
                </div>

                <div className="space-y-4">
                   <div className="space-y-1.5">
                      <div className="flex justify-between font-mono text-[9px] uppercase tracking-wider" style={{ color: 'var(--ink2)' }}>
                          <span>Easy</span>
                          <span>{stats?.easy}</span>
                      </div>
                      <div className="h-1 rounded-full bg-[var(--line)] overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: loading ? 0 : `${(stats?.easy / stats?.total) * 100}%` }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                            className="h-full bg-emerald-500/80" 
                          />
                      </div>
                   </div>
                   <div className="space-y-1.5">
                      <div className="flex justify-between font-mono text-[9px] uppercase tracking-wider" style={{ color: 'var(--ink2)' }}>
                          <span>Medium</span>
                          <span>{stats?.medium}</span>
                      </div>
                      <div className="h-1 rounded-full bg-[var(--line)] overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: loading ? 0 : `${(stats?.medium / stats?.total) * 100}%` }}
                            transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
                            className="h-full bg-orange-500/80" 
                          />
                      </div>
                   </div>
                   <div className="space-y-1.5">
                      <div className="flex justify-between font-mono text-[9px] uppercase tracking-wider" style={{ color: 'var(--ink2)' }}>
                          <span>Hard</span>
                          <span>{stats?.hard}</span>
                      </div>
                      <div className="h-1 rounded-full bg-[var(--line)] overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: loading ? 0 : `${(stats?.hard / stats?.total) * 100}%` }}
                            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                            className="h-full bg-rose-500/80" 
                          />
                      </div>
                   </div>
                </div>
             </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-4 gap-4 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
          {learningItems.map((item, i) => (
            <LearningCard key={item.label} {...item} delay={i * 0.05} />
          ))}
        </div>
      </div>
    </section>
  );
}
