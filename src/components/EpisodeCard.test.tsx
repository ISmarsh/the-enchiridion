import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { EpisodeCard } from './EpisodeCard';
import type { Episode } from '@/types';

const mockEpisode: Episode = {
  id: 'at-s01e01',
  series: 'adventure-time',
  seasonNumber: 1,
  episodeNumber: 1,
  title: 'Slumber Party Panic',
  airDate: '2010-04-05',
  synopsis: 'Finn and Jake must save the Candy Kingdom.',
  characterIds: ['finn', 'jake'],
  storylineIds: [],
  songIds: [],
};

describe('EpisodeCard', () => {
  it('renders episode number, title, and air date', () => {
    render(<EpisodeCard episode={mockEpisode} />);

    expect(screen.getByText('E01')).toBeInTheDocument();
    expect(screen.getByText('Slumber Party Panic')).toBeInTheDocument();
    expect(screen.getByText('Apr 5, 2010')).toBeInTheDocument();
  });

  it('renders synopsis as visible text', () => {
    render(<EpisodeCard episode={mockEpisode} />);

    expect(screen.getByText(/Finn and Jake must save/)).toBeVisible();
  });

  it('renders without synopsis gracefully', () => {
    const epWithoutSynopsis = { ...mockEpisode, synopsis: '' };
    const { container } = render(<EpisodeCard episode={epWithoutSynopsis} />);

    expect(container.querySelectorAll('p')).toHaveLength(0);
  });
});
