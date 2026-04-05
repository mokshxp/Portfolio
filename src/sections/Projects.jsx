import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { projects } from '../data/portfolio';
import { useStore } from '../store/useStore';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 },
  }),
};

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const { openModal, setCursor, resetCursor } = useStore();

  return (
    <motion.div
      ref={ref}
      variants={fadeUp} custom={index} initial="hidden" animate={inView ? 'show' : 'hidden'}
      whileHover={{ y: -3, borderColor: 'var(--ink2)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onClick={() => openModal(project)}
      onMouseEnter={() => setCursor('project', 'View')}
      onMouseLeave={resetCursor}
      className="grid grid-cols-[72px_1fr_44px] gap-7 items-start p-8 border border-[var(--line)] rounded-2xl transition-colors"
      style={{ background: 'var(--surface)', cursor: 'none' }}
    >
      {/* Number */}
      <div className="font-mono text-[11px] pt-0.5" style={{ color: 'var(--ink3)' }}>
        {project.num} / 03
      </div>

      {/* Content */}
      <div>
        <div className="font-serif text-[24px] font-normal mb-2 tracking-[-0.3px]" style={{ color: 'var(--ink)' }}>
          {project.name}
        </div>
        <p className="text-[14px] leading-[1.7] mb-4 max-w-[580px]" style={{ color: 'var(--ink2)' }}>
          {project.desc}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <span key={t.label} className={`tag-${t.variant} px-2.5 py-1 rounded-full text-[11px] font-mono`}>
              {t.label}
            </span>
          ))}
        </div>
      </div>

      {/* Arrow */}
      <motion.div
        className="w-10 h-10 rounded-full border border-[var(--line)] flex items-center justify-center text-[15px] transition-colors mt-0.5 flex-shrink-0"
        style={{ color: 'var(--ink2)' }}
        whileHover={{ background: 'var(--ink)', color: 'var(--paper)', borderColor: 'var(--ink)' }}
      >
        ↗
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="py-24 border-t border-[var(--line)]">
      <div className="max-w-[1080px] mx-auto px-12">
        <motion.div
          ref={ref}
          variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'}
          className="mb-14"
        >
          <div className="font-mono text-[11px] tracking-[1.5px] uppercase mb-2.5" style={{ color: 'var(--ink3)' }}>Work</div>
          <h2 className="font-serif text-[clamp(34px,4vw,50px)] font-normal tracking-[-1px] leading-[1.05]" style={{ color: 'var(--ink)' }}>
            Selected projects
          </h2>
        </motion.div>

        <div className="flex flex-col gap-4">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
