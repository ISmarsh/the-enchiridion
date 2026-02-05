import { useState, useMemo } from 'react';
import { PageHeader } from '@/components/PageHeader';
import { EpisodeCard } from '@/components/EpisodeCard';
import { Button } from '@/components/ui/button';
import episodes from '@/data/episodes.json';
import type { Episode, Series } from '@/types';

const SERIES_OPTIONS: { id: Series | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'adventure-time', label: 'Adventure Time' },
  { id: 'distant-lands', label: 'Distant Lands' },
  { id: 'fionna-and-cake', label: 'Fionna & Cake' },
];

export function EpisodesPage() {
  const [selectedSeries, setSelectedSeries] = useState<Series | 'all'>('all');

  const filteredEpisodes = useMemo(() => {
    const eps = episodes as Episode[];
    if (selectedSeries === 'all') return eps;
    return eps.filter((ep) => ep.series === selectedSeries);
  }, [selectedSeries]);

  // Group episodes by series and season
  const groupedEpisodes = useMemo(() => {
    const groups: Map<string, Episode[]> = new Map();

    for (const ep of filteredEpisodes) {
      const key = `${ep.series}-s${ep.seasonNumber}`;
      if (!groups.has(key)) {
        groups.set(key, []);
      }
      groups.get(key)!.push(ep);
    }

    // Sort episodes within each group by episode number
    for (const eps of groups.values()) {
      eps.sort((a, b) => a.episodeNumber - b.episodeNumber);
    }

    return groups;
  }, [filteredEpisodes]);

  const seriesLabel = (series: Series) => {
    switch (series) {
      case 'adventure-time':
        return 'Adventure Time';
      case 'distant-lands':
        return 'Distant Lands';
      case 'fionna-and-cake':
        return 'Fionna & Cake';
    }
  };

  return (
    <div>
      <PageHeader
        title="Episodes"
        subtitle={`${filteredEpisodes.length} episodes across Adventure Time, Distant Lands, and Fionna & Cake.`}
        centered={false}
      />

      {/* Series filter tabs */}
      <div className="mb-6 flex flex-wrap gap-2">
        {SERIES_OPTIONS.map(({ id, label }) => (
          <Button
            key={id}
            size="sm"
            variant={selectedSeries === id ? 'default' : 'outline'}
            onClick={() => setSelectedSeries(id)}
          >
            {label}
          </Button>
        ))}
      </div>

      {/* Episode list grouped by season */}
      <div className="space-y-8">
        {Array.from(groupedEpisodes.entries()).map(([key, eps]) => {
          const firstEp = eps[0];
          const sectionTitle =
            selectedSeries === 'all'
              ? `${seriesLabel(firstEp.series)} - Season ${firstEp.seasonNumber}`
              : `Season ${firstEp.seasonNumber}`;

          return (
            <section key={key}>
              <h2 className="mb-4 flex items-center gap-3 text-lg font-semibold">
                <span>{sectionTitle}</span>
                <div className="ornamental-rule flex-1" aria-hidden="true" />
              </h2>
              <div className="space-y-3">
                {eps.map((ep) => (
                  <EpisodeCard key={ep.id} episode={ep} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
