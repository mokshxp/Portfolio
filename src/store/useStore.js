import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useStore = create(
  persist(
    (set) => ({
      // ── Theme ──────────────────────────────────────────────────
      isDark: false,
      toggleTheme: () =>
        set((state) => {
          const next = !state.isDark;
          if (next) {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
          return { isDark: next };
        }),
      initTheme: () =>
        set((state) => {
          if (state.isDark) {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
          return state;
        }),

      // ── Active section (navbar highlight) ─────────────────────
      activeSection: 'hero',
      setActiveSection: (section) => set({ activeSection: section }),

      // ── Project modal ──────────────────────────────────────────
      modalProject: null,
      openModal: (project) => {
        set({ modalProject: project });
        document.body.classList.add('modal-open');
      },
      closeModal: () => {
        set({ modalProject: null });
        document.body.classList.remove('modal-open');
      },

      // ── Cursor state ───────────────────────────────────────────
      cursorLabel: '',
      cursorVariant: 'default', // 'default' | 'link' | 'project' | 'text'
      setCursor: (variant, label = '') => set({ cursorVariant: variant, cursorLabel: label }),
      resetCursor: () => set({ cursorVariant: 'default', cursorLabel: '' }),
    }),
    {
      name: 'portfolio-store',
      partialize: (state) => ({ isDark: state.isDark }),
    }
  )
);
