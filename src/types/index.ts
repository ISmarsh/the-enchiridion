// Core entity types for Adventure Time Catalog

export interface Episode {
  id: string;
  series: Series;
  seasonNumber: number;
  episodeNumber: number;
  title: string;
  airDate: string;
  synopsis: string;
  characterIds: string[];
  storylineIds: string[];
  songIds: string[];
  runtime?: number;
  // External IDs for data sourcing
  tmdbId?: number;
  tvdbId?: number;
  // Optional editorial content
  notes?: string;
}

export interface Character {
  id: string;
  name: string;
  aliases?: string[];
  description: string;
  // For characters with variants (Finn/Fionna, Ice King/Simon, etc.)
  variantOf?: string;
  imageUrl?: string;
  // Optional editorial content
  notes?: string;
}

export interface Storyline {
  id: string;
  name: string;
  description: string;
  // For ordering episodes within a storyline
  episodeOrder?: string[];
  characterIds?: string[];
  // Optional editorial content
  notes?: string;
}

export interface Song {
  id: string;
  title: string;
  episodeIds: string[];
  composer?: string;
  performer?: string;
  lyrics?: string;
  // External resources
  externalLinks?: ExternalLink[];
  // Optional editorial content
  notes?: string;
}

export interface ExternalLink {
  type: 'demo' | 'tabs' | 'video' | 'other';
  label: string;
  url: string;
  attribution?: string;
}

export type Series = 'adventure-time' | 'distant-lands' | 'fionna-and-cake';

export interface SeriesInfo {
  id: Series;
  name: string;
  tmdbId?: number;
  tvdbId?: number;
  seasonCount: number;
  yearStart: number;
  yearEnd?: number;
}

// Data source attribution for CC-BY-SA compliance
export interface Attribution {
  source: string;
  url: string;
  license: string;
  licenseUrl: string;
  accessedDate: string;
}
