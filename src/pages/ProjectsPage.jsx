import { motion } from 'framer-motion';
import Projects from '../sections/Projects';
import { useStore } from '../store/useStore';
import { useEffect } from 'react';

export default function ProjectsPage() {
    const { setActiveSection } = useStore();
    useEffect(() => { setActiveSection('projects'); }, [setActiveSection]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="pt-24"
        >
            <div className="max-w-[1080px] mx-auto px-12 mb-[-64px]">
                 <div className="font-mono text-[12px] tracking-[0.5px] mb-2" style={{ color: 'var(--ink3)' }}>
                    Moksh Gupta / Selected Works
                </div>
            </div>
            <Projects />
        </motion.div>
    );
}
