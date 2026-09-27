'use client';

import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';
const storageKey = 'leo-portfolio-theme';

export default function ThemeSwitch() {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const readTheme = () =>
      setTheme(
        document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light',
      );
    readTheme();
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const systemChange = () => {
      try {
        if (localStorage.getItem(storageKey)) {
          return;
        }
      } catch {
        /* Storage can be unavailable. */
      }
      document.documentElement.dataset.theme = media.matches ? 'dark' : 'light';
      readTheme();
    };
    const storageChange = (event: StorageEvent) => {
      if (event.key !== storageKey && event.key !== null) {
        return;
      }
      document.documentElement.dataset.theme =
        event.newValue === 'light' || event.newValue === 'dark'
          ? event.newValue
          : media.matches
            ? 'dark'
            : 'light';
      readTheme();
    };
    media.addEventListener('change', systemChange);
    window.addEventListener('storage', storageChange);
    return () => {
      media.removeEventListener('change', systemChange);
      window.removeEventListener('storage', storageChange);
    };
  }, []);

  function choose(next: Theme) {
    document.documentElement.dataset.theme = next;
    setTheme(next);
    try {
      localStorage.setItem(storageKey, next);
    } catch {
      /* The current session still works. */
    }
  }

  return (
    <div className="theme-switch" role="group" aria-label="Appearance">
      {(['light', 'dark'] as const).map((mode) => (
        <button
          key={mode}
          type="button"
          aria-pressed={theme === mode}
          onClick={() => choose(mode)}
        >
          {mode === 'light' ? 'Light' : 'Dark'}
        </button>
      ))}
    </div>
  );
}
