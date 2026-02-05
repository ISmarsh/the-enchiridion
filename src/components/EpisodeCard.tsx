import { Badge } from '@/components/ui/badge';
import type { Episode } from '@/types';

export function EpisodeCard({ episode }: { episode: Episode }) {
  return (
    <details className="group rounded-lg border border-border bg-card">
      <summary className="flex cursor-pointer items-start justify-between gap-4 p-4 [&::-webkit-details-marker]:hidden">
        <div className="flex items-baseline gap-2">
          <Badge variant="outline" className="shrink-0 font-mono text-xs text-card-foreground">
            E{episode.episodeNumber.toString().padStart(2, '0')}
          </Badge>
          <h3 className="font-medium text-card-foreground">{episode.title}</h3>
        </div>
        <span className="shrink-0 text-xs text-muted-foreground">
          {formatDate(episode.airDate)}
        </span>
      </summary>
      {episode.synopsis && (
        <p className="border-t border-border/50 px-4 py-3 text-sm text-muted-foreground">
          {episode.synopsis}
        </p>
      )}
    </details>
  );
}

function formatDate(dateStr: string): string {
  if (!dateStr) return '';
  const [year, month, day] = dateStr.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}
