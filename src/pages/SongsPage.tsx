import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import songs from '@/data/songs.json';
import episodes from '@/data/episodes.json';
import type { Song, Episode, Series } from '@/types';

const SERIES_OPTIONS: { id: Series | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'adventure-time', label: 'Adventure Time' },
  { id: 'distant-lands', label: 'Distant Lands' },
  { id: 'fionna-and-cake', label: 'Fionna & Cake' },
];

export function SongsPage() {
  const [selectedSeries, setSelectedSeries] = useState<Series | 'all'>('all');
  const [search, setSearch] = useState('');

  const episodeMap = useMemo(() => {
    const map = new Map<string, Episode>();
    for (const ep of episodes as Episode[]) {
      map.set(ep.id, ep);
    }
    return map;
  }, []);

  /** Derive the series a song belongs to from its first episode. */
  const songSeries = useMemo(() => {
    const map = new Map<string, Set<Series>>();
    for (const song of songs as Song[]) {
      const seriesSet = new Set<Series>();
      for (const epId of song.episodeIds) {
        const ep = episodeMap.get(epId);
        if (ep) seriesSet.add(ep.series);
      }
      // Songs with no episodes (e.g. island-song) default to AT
      if (seriesSet.size === 0) seriesSet.add('adventure-time');
      map.set(song.id, seriesSet);
    }
    return map;
  }, [episodeMap]);

  const filtered = useMemo(() => {
    let list = songs as Song[];
    if (selectedSeries !== 'all') {
      list = list.filter((s) => songSeries.get(s.id)?.has(selectedSeries));
    }
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter(
        (s) =>
          s.title.toLowerCase().includes(q) ||
          s.performer?.toLowerCase().includes(q) ||
          s.composer?.toLowerCase().includes(q) ||
          s.notes?.toLowerCase().includes(q),
      );
    }
    return list;
  }, [selectedSeries, search, songSeries]);

  return (
    <div>
      <PageHeader title={`Songs (${filtered.length})`} centered={false} />

      <div className="mb-6 flex flex-wrap items-center gap-2">
        <div className="relative flex-1">
          <Search
            className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <input
            type="text"
            placeholder="Search songs..."
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
      </div>

      {filtered.length === 0 ? (
        <p className="py-8 text-center text-sm text-muted-foreground">
          No songs match your search.
        </p>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2">
          {filtered.map((song) => (
            <SongCard key={song.id} song={song as Song} />
          ))}
        </div>
      )}
    </div>
  );
}

function SongCard({ song }: { song: Song }) {
  const epCount = song.episodeIds.length;

  return (
    <Link
      to={`/songs/${song.id}`}
      className="row-span-2 grid grid-rows-[subgrid] rounded-lg border border-border bg-card transition-colors hover:border-primary/50"
    >
      <div className="border-b border-border/50 px-4 py-3">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="font-medium text-card-foreground">{song.title}</h3>
            {song.performer && (
              <p className="mt-0.5 text-xs text-muted-foreground">{song.performer}</p>
            )}
          </div>
          <div className="flex shrink-0 items-center gap-1.5">
            {song.composer && (
              <Badge variant="outline" className="text-xs">
                {song.composer}
              </Badge>
            )}
            {epCount > 0 && (
              <Badge variant="secondary" className="text-xs">
                {epCount} ep{epCount !== 1 ? 's' : ''}
              </Badge>
            )}
          </div>
        </div>
      </div>
      {song.notes && (
        <p className="line-clamp-2 px-4 py-3 text-sm text-muted-foreground">{song.notes}</p>
      )}
    </Link>
  );
}
