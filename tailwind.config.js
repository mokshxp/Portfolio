/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['Geist', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', 'monospace'],
      },
      colors: {
        ink: {
          DEFAULT: 'var(--ink)',
          2: 'var(--ink2)',
          3: 'var(--ink3)',
        },
        paper: 'var(--paper)',
        surface: 'var(--card-bg)',
        green: {
          DEFAULT: 'var(--green)',
          bg: 'var(--green-bg)',
          text: 'var(--green-text)',
        },
        amber: {
          bg: 'var(--amber-bg)',
          text: 'var(--amber-text)',
        },
        violet: {
          bg: 'var(--violet-bg)',
          text: 'var(--violet-text)',
        },
      },
      animation: {
        pulse2: 'pulse2 2s infinite',
        blink: 'blink 1.1s step-end infinite',
        marquee: 'marquee 22s linear infinite',
      },
      keyframes: {
        pulse2: {
          '0%,100%': { opacity: 1 },
          '50%': { opacity: 0.35 },
        },
        blink: {
          '50%': { opacity: 0 },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
