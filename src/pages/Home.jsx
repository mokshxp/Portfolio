import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../store/useStore';
import Hero from '../sections/Hero';
import Marquee from '../components/Marquee';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Learning from '../sections/Learning';
import Goals from '../sections/Goals';
import Contact from '../sections/Contact';

export default function Home() {
  const { setActiveSection } = useStore();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [setActiveSection]);

  return (
    <motion.div
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       exit={{ opacity: 0 }}
       transition={{ duration: 0.5 }}
    >
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Projects />
      <Learning />
      <Goals />
      <Contact />
    </motion.div>
  );
}
