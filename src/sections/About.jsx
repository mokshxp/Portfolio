import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useGitHubStats } from '../hooks/useGitHubStats';
import { useStore } from '../store/useStore';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 },
  }),
};

function StatCard({ value, label, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  return (
    <motion.div
      ref={ref}
      variants={fadeUp} custom={delay} initial="hidden" animate={inView ? 'show' : 'hidden'}
      whileHover={{ background: 'var(--paper)' }}
      className="p-7 transition-colors"
      style={{ background: 'var(--card-bg)' }}
    >
      <div className="font-serif text-[44px] leading-none mb-1" style={{ color: 'var(--ink)' }}>{value}</div>
      <div className="font-mono text-[11px]" style={{ color: 'var(--ink3)' }}>{label}</div>
    </motion.div>
  );
}

function GitHubStat({ value, label, loading }) {
  return (
    <div className="text-center">
      {loading ? (
        <div className="skeleton h-8 w-16 mx-auto mb-1" />
      ) : (
        <div className="font-serif text-3xl" style={{ color: 'var(--ink)' }}>{value}</div>
      )}
      <div className="font-mono text-[11px]" style={{ color: 'var(--ink3)' }}>{label}</div>
    </div>
  );
}

export default function About() {
  const { stats, loading } = useGitHubStats();
  const { setCursor, resetCursor } = useStore();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="py-24 border-t border-[var(--line)]">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-2 gap-16 items-start max-[900px]:grid-cols-1 max-[900px]:gap-10">

          {/* ── Left ──────────────────────────────────────── */}
          <div ref={ref}>
            <motion.div
              variants={fadeUp} custom={0} initial="hidden" animate={inView ? 'show' : 'hidden'}
              className="mb-14"
            >
              <div className="font-mono text-[11px] tracking-[1.5px] uppercase mb-2.5" style={{ color: 'var(--ink3)' }}>About</div>
              <h2 className="font-serif text-[clamp(34px,4vw,50px)] font-normal tracking-[-1px] leading-[1.05]" style={{ color: 'var(--ink)' }}>
                The developer<br />behind the code
              </h2>
            </motion.div>
            <motion.div
              variants={fadeUp} custom={1} initial="hidden" animate={inView ? 'show' : 'hidden'}
              className="space-y-4 text-[16px] leading-[1.8]"
              style={{ color: 'var(--ink2)' }}
            >
              <p>
                I'm <strong className="font-medium" style={{ color: 'var(--ink)' }}>Moksh</strong> — a highly motivated, self-driven developer with one clear mission: build things that matter and reach the highest levels of the industry.
              </p>
              <p>
                I don't collect tutorials. I <strong className="font-medium" style={{ color: 'var(--ink)' }}>implement</strong>. Every concept I learn becomes real code, a working project, a system that runs.
              </p>
              <p>
                Currently mastering <strong className="font-medium" style={{ color: 'var(--ink)' }}>Large Language Models</strong>, <strong className="font-medium" style={{ color: 'var(--ink)' }}>Neural Architectures</strong>, and <strong className="font-medium" style={{ color: 'var(--ink)' }}>AI Orchestration</strong> — with a focus on building systems that reason and scale.
              </p>
            </motion.div>

            {/* GitHub live stats */}
            <motion.div
              variants={fadeUp} custom={2} initial="hidden" animate={inView ? 'show' : 'hidden'}
              className="mt-8 p-5 rounded-xl border border-[var(--line)]"
              style={{ background: 'var(--card-bg)' }}
            >
              <div className="flex items-center gap-2 mb-4">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--ink2)' }}>
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
                <span className="font-mono text-[11px] tracking-wide uppercase" style={{ color: 'var(--ink3)' }}>
                  GitHub Live
                </span>
                {!loading && (
                  <span className="ml-auto flex items-center gap-1 font-mono text-[10px]" style={{ color: 'var(--green-text)' }}>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--green)' }} />
                    Live data
                  </span>
                )}
              </div>
              <div className="grid grid-cols-3 gap-4">
                <GitHubStat value={loading ? '–' : stats?.publicRepos} label="Repos" loading={loading} />
                <GitHubStat value={loading ? '–' : stats?.followers} label="Followers" loading={loading} />
                <GitHubStat value={loading ? '–' : stats?.totalStars} label="Stars" loading={loading} />
              </div>
            </motion.div>
          </div>

          {/* ── Right: stat grid ──────────────────────────── */}
          <div>
            <div
              className="grid grid-cols-2 gap-px rounded-xl overflow-hidden border border-[var(--line)]"
              style={{ background: 'var(--line)' }}
            >
              <StatCard value="3+" label="Projects built" delay={0} />
              <StatCard value="5+" label="Tech stacks" delay={0.05} />
              <StatCard value="∞" label="Drive & curiosity" delay={0.1} />
              <StatCard value="01" label="Clear mission" delay={0.15} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
