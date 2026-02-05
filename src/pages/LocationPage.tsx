import { useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PageHeader } from '@/components/PageHeader';
import { EpisodeCard } from '@/components/EpisodeCard';
import { Badge } from '@/components/ui/badge';
import locations from '@/data/locations.json';
import episodes from '@/data/episodes.json';
import characters from '@/data/characters.json';
import storylines from '@/data/storylines.json';
import type { Location, Episode, Character, Storyline } from '@/types';

export function LocationPage() {
  const { id } = useParams<{ id: string }>();

  const locationMap = useMemo(() => {
    const map = new Map<string, Location>();
    for (const loc of locations as Location[]) {
      map.set(loc.id, loc);
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

  const storylineMap = useMemo(() => {
    const map = new Map<string, Storyline>();
    for (const sl of storylines as Storyline[]) {
      map.set(sl.id, sl);
    }
    return map;
  }, []);

  const location = id ? locationMap.get(id) : undefined;

  if (!location) {
    return <Navigate to="/locations" replace />;
  }

  const charIds = location.characterIds ?? [];
  const storylineIds = location.storylineIds ?? [];
  const locationEpisodes = (location.episodeIds ?? [])
    .map((epId) => episodeMap.get(epId))
    .filter((ep): ep is Episode => ep !== undefined);

  return (
    <div>
      <PageHeader title={location.name} subtitle={location.description} centered={false} />

      {/* Metadata */}
      <div className="mb-8 flex flex-wrap items-center gap-2">
        <Badge variant="outline">{location.category}</Badge>
        {location.series.map((s) => (
          <Badge key={s} variant="secondary">
            {s === 'adventure-time'
              ? 'Adventure Time'
              : s === 'distant-lands'
                ? 'Distant Lands'
                : 'Fionna & Cake'}
          </Badge>
        ))}
        {locationEpisodes.length > 0 && (
          <Badge variant="secondary">
            {locationEpisodes.length} episode{locationEpisodes.length !== 1 ? 's' : ''}
          </Badge>
        )}
      </div>

      {/* Characters */}
      {charIds.length > 0 && (
        <section className="mb-8">
          <h2 className="mb-4 flex items-center gap-3 text-lg font-semibold">
            <span>Notable Residents</span>
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

      {/* Storylines */}
      {storylineIds.length > 0 && (
        <section className="mb-8">
          <h2 className="mb-4 flex items-center gap-3 text-lg font-semibold">
            <span>Related Storylines</span>
            <div className="ornamental-rule flex-1" aria-hidden="true" />
          </h2>
          <div className="flex flex-wrap gap-2">
            {storylineIds.map((slId) => {
              const sl = storylineMap.get(slId);
              if (!sl) return null;
              return (
                <Link key={slId} to={`/storylines/${slId}`}>
                  <Badge
                    variant="secondary"
                    className="cursor-pointer transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    {sl.name}
                  </Badge>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* Notes */}
      {location.notes && (
        <section className="mb-8">
          <h2 className="mb-4 flex items-center gap-3 text-lg font-semibold">
            <span>Notes</span>
            <div className="ornamental-rule flex-1" aria-hidden="true" />
          </h2>
          <p className="text-sm text-muted-foreground">{location.notes}</p>
        </section>
      )}

      {/* Episodes */}
      {locationEpisodes.length > 0 && (
        <section className="mb-8">
          <h2 className="mb-4 flex items-center gap-3 text-lg font-semibold">
            <span>Key Episodes ({locationEpisodes.length})</span>
            <div className="ornamental-rule flex-1" aria-hidden="true" />
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {locationEpisodes.map((ep) => (
              <EpisodeCard key={ep.id} episode={ep} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
