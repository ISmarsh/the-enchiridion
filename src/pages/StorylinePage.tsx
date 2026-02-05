import { useMemo, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ChevronDown, Search, X } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { EpisodeCard } from '@/components/EpisodeCard';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import storylines from '@/data/storylines.json';
import episodes from '@/data/episodes.json';
import characters from '@/data/characters.json';
import type { Storyline, Episode, Character, Series } from '@/types';

const SERIES_LABEL: Record<Series, string> = {
  'adventure-time': 'Adventure Time',
  'distant-lands': 'Distant Lands',
  'fionna-and-cake': 'Fionna & Cake',
};

export function StorylinePage() {
  const { id } = useParams<{ id: string }>();

  const storylineMap = useMemo(() => {
    const map = new Map<string, Storyline>();
    for (const sl of storylines as Storyline[]) {
      map.set(sl.id, sl);
    }
    return map;
  }, []);

  const episodeMap = useMemo(() => {
    const map = new Map<string, Episode>();
    for (const ep of episodes as Episode[]) {
      map.set(ep.id, ep);
    }
    return map;
  }, []);

  const characterMap = useMemo(() => {
    const map = new Map<string, Character>();
    for (const c of characters as Character[]) {
      map.set(c.id, c);
    }
    return map;
  }, []);

  const storyline = id ? storylineMap.get(id) : undefined;

  if (!storyline) {
    return <Navigate to="/storylines" replace />;
  }

  const charIds = storyline.characterIds ?? [];
  const storyEpisodes = (storyline.episodeOrder ?? [])
    .map((epId) => episodeMap.get(epId))
    .filter((ep): ep is Episode => ep !== undefined);

  return (
    <div>
      <PageHeader title={storyline.name} subtitle={storyline.description} centered={false} />

      {/* Metadata */}
      <div className="mb-8 flex flex-wrap items-center gap-2">
        <Badge variant="outline">{storyline.category} arc</Badge>
        <Badge variant="secondary">
          {storyEpisodes.length} episode{storyEpisodes.length !== 1 ? 's' : ''}
        </Badge>
      </div>

      {/* Characters */}
      {charIds.length > 0 && (
        <section className="mb-8">
          <h2 className="mb-4 flex items-center gap-3 text-lg font-semibold">
            <span>Key Characters</span>
            <div className="ornamental-rule flex-1" aria-hidden="true" />
          </h2>
          <div className="flex flex-wrap gap-2">
            {charIds.map((cid) => {
              const char = characterMap.get(cid);
              if (!char) return null;
              return (
                <Link key={cid} to={`/characters/${cid}`}>
                  <Badge
                    variant="secondary"
                    className="cursor-pointer transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    {char.name}
                  </Badge>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* Notes */}
      {storyline.notes && (
        <section className="mb-8">
          <h2 className="mb-4 flex items-center gap-3 text-lg font-semibold">
            <span>Notes</span>
            <div className="ornamental-rule flex-1" aria-hidden="true" />
          </h2>
          <p className="text-sm text-muted-foreground">{storyline.notes}</p>
        </section>
      )}

      {/* Episodes */}
      {storyEpisodes.length > 0 && <EpisodesSection episodes={storyEpisodes} />}
    </div>
  );
}

function EpisodesSection({ episodes }: { episodes: Episode[] }) {
  const [search, setSearch] = useState('');
  const [selectedSeries, setSelectedSeries] = useState<Series | 'all'>('all');
  const [collapsedSeasons, setCollapsedSeasons] = useState<Set<string>>(new Set());

  const toggleSeason = (key: string) => {
    setCollapsedSeasons((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const seriesInEpisodes = useMemo(() => {
    const set = new Set(episodes.map((ep) => ep.series));
    return [...set] as Series[];
  }, [episodes]);

  const showSeriesFilter = seriesInEpisodes.length > 1;

  const filtered = useMemo(() => {
    let eps = episodes;
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
  }, [episodes, selectedSeries, search]);

  const grouped = useMemo(() => {
    const groups = new Map<string, Episode[]>();
    for (const ep of filtered) {
      const key = `${ep.series}-s${ep.seasonNumber}`;
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key)!.push(ep);
    }
    for (const eps of groups.values()) {
      eps.sort((a, b) => a.episodeNumber - b.episodeNumber);
    }
    return groups;
  }, [filtered]);

  const allSeasonKeys = useMemo(() => Array.from(grouped.keys()), [grouped]);
  const allCollapsed =
    allSeasonKeys.length > 0 && allSeasonKeys.every((k) => collapsedSeasons.has(k));
  const toggleAllSeasons = () => {
    setCollapsedSeasons(allCollapsed ? new Set() : new Set(allSeasonKeys));
  };

  return (
    <section className="mb-8">
      <h2 className="mb-4 flex items-center gap-3 text-lg font-semibold">
        <span>Episodes ({episodes.length})</span>
        <div className="ornamental-rule flex-1" aria-hidden="true" />
      </h2>

      <div className="mb-4 flex flex-wrap items-center gap-2">
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
        {showSeriesFilter && (
          <div className="flex gap-1.5">
            <Button
              size="sm"
              variant={selectedSeries === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedSeries('all')}
            >
              All
            </Button>
            {seriesInEpisodes.map((s) => (
              <Button
                key={s}
                size="sm"
                variant={selectedSeries === s ? 'default' : 'outline'}
                onClick={() => setSelectedSeries(s)}
              >
                {SERIES_LABEL[s]}
              </Button>
            ))}
          </div>
        )}
        <Button size="sm" variant="ghost" onClick={toggleAllSeasons}>
          {allCollapsed ? 'Expand all' : 'Collapse all'}
        </Button>
      </div>

      {filtered.length === 0 ? (
        <p className="py-4 text-center text-sm text-muted-foreground">
          No episodes match your search.
        </p>
      ) : (
        <div className="space-y-8">
          {Array.from(grouped.entries()).map(([key, eps]) => {
            const firstEp = eps[0];
            const isOpen = !collapsedSeasons.has(key);
            return (
              <section key={key}>
                <button
                  type="button"
                  onClick={() => toggleSeason(key)}
                  className="mb-3 flex w-full cursor-pointer items-center gap-2 text-left text-sm font-medium text-muted-foreground"
                  aria-expanded={isOpen}
                >
                  <span>
                    {SERIES_LABEL[firstEp.series]} &mdash; Season {firstEp.seasonNumber}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
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
      )}
    </section>
  );
}
