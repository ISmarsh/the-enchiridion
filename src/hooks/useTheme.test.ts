import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import { useTheme } from './useTheme';

describe('useTheme', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
  });

  it('defaults to enchiridion-dark', () => {
    const { result } = renderHook(() => useTheme());
    expect(result.current.theme).toBe('enchiridion-dark');
  });

  it('restores theme from localStorage', () => {
    localStorage.setItem('app-theme', 'finn');

    const { result } = renderHook(() => useTheme());
    expect(result.current.theme).toBe('finn');
  });

  it('allows setting any theme', () => {
    const { result } = renderHook(() => useTheme());

    act(() => {
      result.current.setTheme('marceline');
    });

    expect(result.current.theme).toBe('marceline');
  });

  it('persists theme to localStorage', () => {
    const { result } = renderHook(() => useTheme());

    act(() => {
      result.current.setTheme('enchiridion-light');
    });

    expect(localStorage.getItem('app-theme')).toBe('enchiridion-light');
  });

  it('sets data-theme attribute on document element', () => {
    const { result } = renderHook(() => useTheme());

    act(() => {
      result.current.setTheme('iceking');
    });

    expect(document.documentElement.getAttribute('data-theme')).toBe('iceking');
  });

  it('updates data-theme when switching themes', () => {
    const { result } = renderHook(() => useTheme());

    act(() => {
      result.current.setTheme('finn');
    });
    expect(document.documentElement.getAttribute('data-theme')).toBe('finn');

    act(() => {
      result.current.setTheme('enchiridion-dark');
    });
    expect(document.documentElement.getAttribute('data-theme')).toBe('enchiridion-dark');
  });
});
