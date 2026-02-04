import { useState, useMemo } from 'react';
import { cn } from '@/lib/utils';
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
      <div className="mb-6">
        <h1 className="mb-2 text-3xl font-bold">Episodes</h1>
        <p className="text-muted-foreground">
          {filteredEpisodes.length} episodes across Adventure Time, Distant Lands, and Fionna &
          Cake.
        </p>
      </div>

      {/* Series filter tabs */}
      <div className="mb-6 flex flex-wrap gap-2">
        {SERIES_OPTIONS.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setSelectedSeries(id)}
            className={cn(
              'rounded-md px-3 py-1.5 text-sm font-medium transition-colors',
              selectedSeries === id
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground',
            )}
          >
            {label}
          </button>
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
              <h2 className="mb-4 text-xl font-semibold">{sectionTitle}</h2>
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

function EpisodeCard({ episode }: { episode: Episode }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="cursor-pointer rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/30"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline gap-2">
            <span className="text-sm font-medium text-muted-foreground">
              E{episode.episodeNumber.toString().padStart(2, '0')}
            </span>
            <h3 className="font-medium text-card-foreground">{episode.title}</h3>
          </div>
          {expanded && episode.synopsis && (
            <p className="mt-2 text-sm text-muted-foreground">{episode.synopsis}</p>
          )}
        </div>
        <span className="shrink-0 text-xs text-muted-foreground">
          {formatDate(episode.airDate)}
        </span>
      </div>
    </div>
  );
}

function formatDate(dateStr: string): string {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}
