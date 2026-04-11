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
      whileHover={{ y: -6, borderColor: 'var(--line-strong)' }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      onClick={() => openModal(project)}
      onMouseEnter={() => setCursor('project', 'Explore')}
      onMouseLeave={resetCursor}
      className="group relative grid grid-cols-[80px_1fr_180px_48px] gap-8 items-center p-10 border border-[var(--line)] rounded-[32px] transition-all duration-500 overflow-hidden bg-[var(--card-bg)]"
      style={{ cursor: 'none' }}
    >
      {/* Background Glow */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br ${project.gradient} pointer-events-none`} />

      {/* Number Indicator */}
      <div className="relative flex flex-col items-center">
        <span className="font-mono text-[10px] tracking-[2px] opacity-40 mb-1" style={{ color: 'var(--ink)' }}>INDEX</span>
        <div className="font-serif text-[28px] italic leading-none" style={{ color: 'var(--ink2)' }}>
          {project.num}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <div className="flex items-baseline gap-4 mb-3">
          <h3 className="font-serif text-[32px] font-normal leading-none tracking-[-0.5px]" style={{ color: 'var(--ink)' }}>
            {project.name}
          </h3>
          <span className="font-mono text-[11px] opacity-40 uppercase tracking-widest hidden sm:block">/ {project.tagline || 'Portfolio'}</span>
        </div>
        
        <p className="text-[15px] leading-[1.6] mb-6 max-w-[620px] font-normal" style={{ color: 'var(--ink2)' }}>
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span key={t.label} className={`tag-pill tag-${t.variant}`}>
              {t.label}
            </span>
          ))}
        </div>
      </div>

      {/* Refined Image Thumbnail */}
      <div className="relative h-[110px] w-full rounded-2xl overflow-hidden border border-[var(--line)] bg-[var(--card-bg)] max-[1100px]:hidden group-hover:scale-[1.02] transition-transform duration-500 shadow-sm">
        {project.image ? (
            <img src={project.image} alt={project.name} className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700" />
        ) : (
            <div className={`w-full h-full bg-gradient-to-br ${project.gradient} opacity-40`} />
        )}
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
      </div>

      {/* Action Button */}
      <div className="relative flex justify-end">
        <motion.div
           className="w-12 h-12 rounded-full border border-[var(--line-strong)] flex items-center justify-center text-[18px] transition-all duration-500 bg-transparent group-hover:bg-[var(--ink)] group-hover:text-[var(--paper)] group-hover:border-[var(--ink)]"
           style={{ color: 'var(--ink)' }}
        >
          <span className="group-hover:rotate-45 transition-transform duration-500">↗</span>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="py-24 border-t border-[var(--line)]">
      <div className="max-w-[1280px] mx-auto px-6">
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

        <div className="flex flex-col gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
