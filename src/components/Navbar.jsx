import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useStore } from '../store/useStore';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { href: '/#about',    label: 'About',    section: 'about' },
  { href: '/#skills',   label: 'Skills',   section: 'skills' },
  { href: '/projects',  label: 'Projects', section: 'projects' },
  { href: '/#contact',  label: 'Contact',  section: 'contact' },
];

export default function Navbar() {
  const { activeSection, setCursor, resetCursor } = useStore();
  const location = useLocation();

  const navigate = useNavigate();

  const handleAnchor = (e, href) => {
    // If it's a simple path like /projects, let <Link> handle it (but we can force navigate if needed)
    if (!href.includes('#')) return;

    e.preventDefault();
    const [path, hash] = href.split('#');

    // If we're on the wrong page, navigate first
    if (location.pathname !== path && path !== '/') {
      navigate(href);
      return;
    }

    // Scroll if we're on the right page
    const id = hash.replace('', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (path === '/') {
      // If we are on home but clicked #id and it's not present (maybe we navigated home)
      navigate(href);
    }
  };

  return (
    <motion.nav
      initial={{ y: -58 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between h-[58px] px-6 border-b border-[var(--line)]"
      style={{ background: 'var(--paper)', backdropFilter: 'blur(12px)' }}
    >
      {/* Logo */}
      <Link
        to="/"
        className="font-mono text-[13px] font-medium leading-none"
        style={{ color: 'var(--ink)' }}
        onMouseEnter={() => setCursor('link')}
        onMouseLeave={resetCursor}
      >
        Moksh Gupta<span style={{ color: 'var(--ink3)' }}>_</span>
      </Link>

      {/* Links */}
      <div className="flex items-center gap-7">
        {navLinks.map(({ href, label, section }) => {
          const isActive = location.pathname === '/projects'
            ? section === 'projects'
            : activeSection === section;

          // Use Link for everything to keep it SPA
          return (
            <Link
              key={href}
              to={href}
              onClick={(e) => handleAnchor(e, href)}
              onMouseEnter={() => setCursor('link')}
              onMouseLeave={resetCursor}
              className="relative text-[13px] transition-colors"
              style={{ color: isActive ? 'var(--ink)' : 'var(--ink2)' }}
            >
              {label}
              {isActive && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-[1px] left-0 right-0 h-px"
                  style={{ background: 'var(--ink)' }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </Link>
          );
        })}

        {/* Divider */}
        <div className="w-px h-4" style={{ background: 'var(--line)' }} />

        {/* Theme toggle */}
        <div onMouseEnter={() => setCursor('link')} onMouseLeave={resetCursor}>
          <ThemeToggle />
        </div>

        {/* Status badge */}
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full font-mono text-[12px] font-medium"
          style={{ background: 'var(--green-bg)', color: 'var(--green-text)' }}>
          <span className="w-1.5 h-1.5 rounded-full animate-pulse2" style={{ background: 'var(--green)' }} />
          Open to work
        </div>
      </div>
    </motion.nav>
  );
}
