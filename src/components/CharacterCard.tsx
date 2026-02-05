import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import type { Character } from '@/types';

const SERIES_ABBR: Record<string, string> = {
  'adventure-time': 'AT',
  'distant-lands': 'DL',
  'fionna-and-cake': 'F&C',
};

interface CharacterCardProps {
  character: Character;
  episodeCount: number;
}

export function CharacterCard({ character, episodeCount }: CharacterCardProps) {
  return (
    <Link
      to={`/characters/${character.id}`}
      className="group flex flex-col rounded-lg border border-border bg-card p-4"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-medium text-card-foreground transition-colors group-hover:text-primary">
          {character.name}
        </h3>
        {character.type === 'group' && (
          <Badge variant="secondary" className="shrink-0 text-xs">
            Group
          </Badge>
        )}
      </div>
      {character.description && (
        <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{character.description}</p>
      )}
      <div className="mt-auto flex flex-wrap gap-1.5 pt-3">
        {character.series.map((s) => (
          <Badge key={s} variant="outline" className="text-xs">
            {SERIES_ABBR[s] ?? s}
          </Badge>
        ))}
        {episodeCount > 0 && (
          <Badge variant="outline" className="text-xs">
            {episodeCount} ep{episodeCount !== 1 ? 's' : ''}
          </Badge>
        )}
      </div>
    </Link>
  );
}
