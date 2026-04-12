import { Suspense } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { useStore } from '../store/useStore';
import HeroCanvas from '../components/HeroCanvas';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 },
  }),
};

export default function Hero() {
  const { setCursor, resetCursor } = useStore();

  const handleAnchor = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-[58px] overflow-hidden"
    >
      {/* Three.js background */}
      <Suspense fallback={null}>
        <HeroCanvas />
      </Suspense>

      <div className="w-full max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-[1fr_400px] gap-10 items-center max-[900px]:grid-cols-1 max-[900px]:gap-10">

          {/* ── Left ─────────────────────────────────────────── */}
          <div>
            <motion.div
              variants={fadeUp} custom={0} initial="hidden" animate="show"
              className="font-mono text-[12px] tracking-[0.5px] mb-6"
              style={{ color: 'var(--ink3)' }}
            >
              Developer — India
            </motion.div>

            <motion.h1
              variants={fadeUp} custom={1} initial="hidden" animate="show"
              className="font-serif text-[clamp(44px,6.5vw,86px)] font-normal leading-[1.0] tracking-[-2px] mb-6"
              style={{ color: 'var(--ink)' }}
            >
              I'm Moksh — <br />
              building things<br />
              that <em className="italic" style={{ color: 'var(--ink2)' }}>actually</em> work.
            </motion.h1>

            <motion.div
              variants={fadeUp} custom={2} initial="hidden" animate="show"
              className="text-[16px] leading-[1.75] max-w-[440px] mb-10 h-[56px]"
              style={{ color: 'var(--ink2)' }}
            >
              <TypeAnimation
                sequence={[
                  'AI Engineer & Full-stack dev.',
                  1500,
                  'I build intelligent systems.',
                  1500,
                  'Solving intelligence is the mission.',
                  1500,
                  'Research + Build + Iterate.',
                  1500,
                ]}
                wrapper="span"
                speed={55}
                repeat={Infinity}
                cursor
              />
            </motion.div>

            <motion.div
              variants={fadeUp} custom={3} initial="hidden" animate="show"
              className="flex gap-3 flex-wrap"
            >
              <button
                onClick={() => handleAnchor('projects')}
                onMouseEnter={() => setCursor('link')}
                onMouseLeave={resetCursor}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-[13px] transition-opacity hover:opacity-80"
                style={{ background: 'var(--ink)', color: 'var(--paper)', border: '1.5px solid transparent' }}
              >
                See my work →
              </button>
              <button
                onClick={() => handleAnchor('contact')}
                onMouseEnter={() => setCursor('link')}
                onMouseLeave={resetCursor}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-[13px] transition-colors"
                style={{ background: 'transparent', color: 'var(--ink)', border: '1.5px solid var(--line)' }}
                onMouseOver={e => e.currentTarget.style.borderColor = 'var(--ink2)'}
                onMouseOut={e => e.currentTarget.style.borderColor = 'var(--line)'}
              >
                Say hello
              </button>
              <a
                href="/resume.pdf"
                download
                onMouseEnter={() => setCursor('link')}
                onMouseLeave={resetCursor}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-[13px] transition-colors font-mono"
                style={{ background: 'transparent', color: 'var(--ink2)', border: '1.5px solid var(--line)' }}
                onMouseOver={e => { e.currentTarget.style.borderColor = 'var(--ink2)'; e.currentTarget.style.color = 'var(--ink)'; }}
                onMouseOut={e => { e.currentTarget.style.borderColor = 'var(--line)'; e.currentTarget.style.color = 'var(--ink2)'; }}
              >
                ↓ Resume
              </a>
            </motion.div>
          </div>

          {/* ── Terminal card ─────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl overflow-hidden border border-[var(--line)]"
            style={{ background: 'var(--card-bg)' }}
          >
            {/* Title bar */}
            <div className="px-4 py-3.5 border-b border-[var(--line)] flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              <span className="font-mono text-[11px] ml-1" style={{ color: 'var(--ink3)' }}>profile.json</span>
            </div>
            {/* Code */}
            <div className="px-6 py-5 font-mono text-[12.5px] leading-[2.1]">
              <span className="syn-cmt">{'// who i am'}</span><br />
              {'{'}<br />
              <span className="ml-4"><span className="syn-key">"name"</span>: <span className="syn-str">"Moksh Gupta"</span>,</span><br />
              <span className="ml-4"><span className="syn-key">"focus"</span>: <span className="syn-str">"ML + Agents + Full-stack"</span>,</span><br />
              <span className="ml-4"><span className="syn-key">"location"</span>: <span className="syn-str">"India"</span>,</span><br />
              <span className="ml-4"><span className="syn-key">"projects"</span>: <span className="syn-num">3</span>,</span><br />
              <span className="ml-4"><span className="syn-key">"goal"</span>: <span className="syn-str">"SOTA AI"</span>,</span><br />
              <span className="ml-4"><span className="syn-key">"building"</span>: <span className="syn-num">true</span>,</span><br />
              <span className="ml-4"><span className="syn-key">"available"</span>: <span className="syn-num">true</span></span><br />
              {'}'}<span className="inline-block w-[7px] h-[13px] ml-0.5 align-middle animate-blink" style={{ background: 'var(--ink)' }} />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
