import { useMemo, useState } from 'react';
import { ChevronDown, Search, X } from 'lucide-react';
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
  const [search, setSearch] = useState('');
  const [collapsedSeasons, setCollapsedSeasons] = useState<Set<string>>(new Set());

  const filteredEpisodes = useMemo(() => {
    let eps = episodes as Episode[];
    if (selectedSeries !== 'all') {
      eps = eps.filter((ep) => ep.series === selectedSeries);
    }
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      eps = eps.filter(
        (ep) => ep.title.toLowerCase().includes(q) || ep.synopsis?.toLowerCase().includes(q),
      );
    }
    return eps;
  }, [selectedSeries, search]);

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

  const toggleSeason = (key: string) => {
    setCollapsedSeasons((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const allSeasonKeys = useMemo(() => Array.from(groupedEpisodes.keys()), [groupedEpisodes]);
  const allCollapsed =
    allSeasonKeys.length > 0 && allSeasonKeys.every((k) => collapsedSeasons.has(k));
  const toggleAllSeasons = () => {
    setCollapsedSeasons(allCollapsed ? new Set() : new Set(allSeasonKeys));
  };

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
        title={`${selectedSeries === 'all' ? 'All Series' : seriesLabel(selectedSeries)} Episodes (${filteredEpisodes.length})`}
        centered={false}
      />

      {/* Search and filter */}
      <div className="mb-6 flex flex-wrap items-center gap-2">
        <div className="relative flex-1">
          <Search
            className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <input
            type="text"
            placeholder="Search episodes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-9 w-full rounded-md border border-border bg-background pl-9 pr-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
          {search && (
            <button
              type="button"
              onClick={() => setSearch('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
        <div className="flex gap-1.5">
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
        <Button size="sm" variant="ghost" onClick={toggleAllSeasons}>
          {allCollapsed ? 'Expand all' : 'Collapse all'}
        </Button>
      </div>

      {/* Episode grid grouped by season */}
      {filteredEpisodes.length === 0 && (
        <p className="py-8 text-center text-sm text-muted-foreground">
          No episodes match your search.
        </p>
      )}
      <div className="space-y-8">
        {Array.from(groupedEpisodes.entries()).map(([key, eps]) => {
          const firstEp = eps[0];
          const sectionTitle =
            selectedSeries === 'all'
              ? `${seriesLabel(firstEp.series)} - Season ${firstEp.seasonNumber}`
              : `Season ${firstEp.seasonNumber}`;
          const isOpen = !collapsedSeasons.has(key);

          return (
            <section key={key}>
              <button
                type="button"
                onClick={() => toggleSeason(key)}
                className="mb-4 flex w-full cursor-pointer items-center gap-3 text-left text-lg font-semibold"
                aria-expanded={isOpen}
              >
                <span>{sectionTitle}</span>
                <div className="ornamental-rule flex-1" aria-hidden="true" />
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>
              {isOpen && (
                <div className="grid gap-3 sm:grid-cols-2">
                  {eps.map((ep) => (
                    <EpisodeCard key={ep.id} episode={ep} />
                  ))}
                </div>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}
