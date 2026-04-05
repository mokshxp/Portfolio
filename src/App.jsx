import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import { useStore } from './store/useStore';
import { useLenis } from './hooks/useLenis';

// Components
import Navbar from './components/Navbar';
import Cursor from './components/Cursor';
import ProjectModal from './components/ProjectModal';

// Pages
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';

export default function App() {
  const { isDark, initTheme } = useStore();
  const location = useLocation();
  useLenis();

  useEffect(() => {
    initTheme();
  }, [initTheme]);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className={isDark ? 'dark' : ''}>
      <Toaster position="bottom-center" toastOptions={{
          style: {
            background: 'var(--surface)',
            color: 'var(--ink)',
            border: '1px solid var(--line)',
            fontSize: '13px',
            fontFamily: 'Geist',
            borderRadius: '10px',
            padding: '12px 24px',
          },
      }} />

      <Cursor />
      <Navbar />
      <ProjectModal />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
