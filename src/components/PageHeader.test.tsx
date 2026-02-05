import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { PageHeader } from './PageHeader';

describe('PageHeader', () => {
  it('renders the title as an h1', () => {
    render(<PageHeader title="Test Title" />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Test Title');
  });

  it('renders the subtitle when provided', () => {
    render(<PageHeader title="Title" subtitle="A subtitle" />);

    expect(screen.getByText('A subtitle')).toBeInTheDocument();
  });

  it('does not render a subtitle paragraph when omitted', () => {
    const { container } = render(<PageHeader title="Title" />);

    expect(container.querySelector('p')).not.toBeInTheDocument();
  });

  it('renders the ornamental rule', () => {
    const { container } = render(<PageHeader title="Title" />);

    expect(container.querySelector('.ornamental-rule')).toBeInTheDocument();
  });

  it('centers content by default', () => {
    const { container } = render(<PageHeader title="Title" />);

    expect(container.firstElementChild).toHaveClass('text-center');
  });

  it('left-aligns when centered is false', () => {
    const { container } = render(<PageHeader title="Title" centered={false} />);

    expect(container.firstElementChild).not.toHaveClass('text-center');
  });
});
