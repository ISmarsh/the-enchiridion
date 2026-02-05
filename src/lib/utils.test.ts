import { describe, it, expect } from 'vitest';
import { cn, toRomanNumeral } from './utils';

describe('cn', () => {
  it('merges class names', () => {
    expect(cn('foo', 'bar')).toBe('foo bar');
  });

  it('handles conditional classes', () => {
    const showBar = false;
    const showBaz = true;
    expect(cn('foo', showBar && 'bar', 'baz')).toBe('foo baz');
    expect(cn('foo', showBaz && 'bar', 'baz')).toBe('foo bar baz');
  });

  it('deduplicates conflicting Tailwind classes', () => {
    // twMerge should keep the last conflicting class
    expect(cn('p-4', 'p-2')).toBe('p-2');
    expect(cn('text-red-500', 'text-blue-500')).toBe('text-blue-500');
  });

  it('handles undefined and null', () => {
    expect(cn('foo', undefined, null, 'bar')).toBe('foo bar');
  });

  it('handles arrays', () => {
    expect(cn(['foo', 'bar'])).toBe('foo bar');
  });
});

describe('toRomanNumeral', () => {
  it('converts 1–4 to Roman numerals', () => {
    expect(toRomanNumeral(1)).toBe('I');
    expect(toRomanNumeral(2)).toBe('II');
    expect(toRomanNumeral(3)).toBe('III');
    expect(toRomanNumeral(4)).toBe('IV');
  });

  it('falls back to string for out-of-range values', () => {
    expect(toRomanNumeral(11)).toBe('11');
    expect(toRomanNumeral(0)).toBe('0');
  });
});
