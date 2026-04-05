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
          DEFAULT: '#111110',
          2: '#6b6b66',
          3: '#a8a89e',
        },
        paper: '#faf9f6',
        surface: '#f2f0eb',
        green: {
          DEFAULT: '#166534',
          bg: '#dcfce7',
          text: '#14532d',
        },
        amber: {
          bg: '#fef3c7',
          text: '#92400e',
        },
        violet: {
          bg: '#ede9fe',
          text: '#5b21b6',
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
