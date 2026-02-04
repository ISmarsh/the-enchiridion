/**
 * useTheme — custom hook for managing the active site theme
 *
 * Stores a theme name and sets data-theme on <html> for CSS to resolve.
 * Each theme defines a full set of semantic tokens in index.css.
 *
 * Defaults to 'enchiridion-dark'.
 */

import { useState, useEffect } from 'react';

const STORAGE_KEY = 'app-theme';
const DEFAULT_THEME = 'enchiridion-dark';

function getInitialTheme(): string {
  return localStorage.getItem(STORAGE_KEY) ?? DEFAULT_THEME;
}

export function useTheme() {
  const [theme, setTheme] = useState<string>(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  return { theme, setTheme } as const;
}
