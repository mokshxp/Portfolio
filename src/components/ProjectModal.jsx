import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../store/useStore';


export default function ProjectModal() {
  const { modalProject, closeModal, setCursor, resetCursor } = useStore();

  return (
    <AnimatePresence>
      {modalProject && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[200] bg-black/50 backdrop-blur-sm"
            onClick={closeModal}
          />

          {/* Panel */}
          <motion.div
            key="panel"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 250 }}
            className="fixed right-0 top-0 bottom-0 z-[201] w-full max-w-[600px] overflow-y-auto"
            data-lenis-prevent
            style={{ background: 'var(--paper)', borderLeft: '1px solid var(--line)' }}
          >
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between px-8 py-5 border-b border-[var(--line)]"
              style={{ background: 'var(--paper)' }}>
              <div>
                <div className="font-mono text-[11px] tracking-widest uppercase mb-1" style={{ color: 'var(--ink3)' }}>
                  {modalProject.num} / 03
                </div>
                <h2 className="font-serif text-3xl font-normal tracking-tight" style={{ color: 'var(--ink)' }}>
                  {modalProject.name}
                </h2>
              </div>
              <button
                onClick={closeModal}
                onMouseEnter={() => setCursor('link')}
                onMouseLeave={resetCursor}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-[var(--line)] hover:border-[var(--ink2)] transition-colors text-[var(--ink2)]"
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <div className="px-8 py-8 space-y-8">

              {/* Gradient banner / Image preview */}
              <div
                className={`h-[320px] rounded-2xl overflow-hidden flex items-center justify-center text-7xl bg-gradient-to-br ${modalProject.gradient}`}
                style={{ border: '1px solid var(--line)' }}
              >
                {modalProject.image ? (
                  <img src={modalProject.image} alt={modalProject.name} className="w-full h-full object-cover" />
                ) : (
                  modalProject.id === 'skilio' ? '🎯' : modalProject.id === 'pulsepoint' ? '🏥' : '🎮'
                )}
              </div>

              {/* Tagline */}
              <p className="font-serif italic text-xl" style={{ color: 'var(--ink2)' }}>
                {modalProject.tagline}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {modalProject.tags.map((t) => (
                  <span key={t.label} className={`tag-${t.variant} px-3 py-1 rounded-full text-[11px] font-mono`}>
                    {t.label}
                  </span>
                ))}
              </div>

              {/* Long description */}
              <div className="space-y-3">
                {modalProject.longDesc.split('\n').map((line, i) => (
                  line.trim() ? (
                    <p key={i} className="text-[14px] leading-relaxed"
                      style={{ color: line.startsWith('•') ? 'var(--ink)' : line.endsWith(':') ? 'var(--ink)' : 'var(--ink2)' }}>
                      {line.startsWith('•') ? (
                        <span className="flex gap-2">
                          <span style={{ color: 'var(--ink3)' }}>→</span>
                          <span>{line.slice(2)}</span>
                        </span>
                      ) : line.endsWith(':') ? (
                        <strong className="font-medium">{line}</strong>
                      ) : line}
                    </p>
                  ) : null
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex gap-3 pt-4">
                <a
                  href={modalProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setCursor('link')}
                  onMouseLeave={resetCursor}
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-medium text-[13px] transition-opacity hover:opacity-80"
                  style={{ background: 'var(--ink)', color: 'var(--paper)' }}
                >
                  Live demo ↗
                </a>
                <a
                  href={modalProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setCursor('link')}
                  onMouseLeave={resetCursor}
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-medium text-[13px] border border-[var(--line)] hover:border-[var(--ink2)] transition-colors"
                  style={{ color: 'var(--ink)' }}
                >
                  View source
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
