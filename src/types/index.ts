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
  // Transcript filename for validation (from adventuretime-transcripts repo)
  transcriptFile?: string;
  // Optional editorial content
  notes?: string;
}

export type CharacterType = 'individual' | 'group';

// Base fields shared by all character entries
interface BaseCharacter {
  id: string;
  name: string;
  // Series this character appears in (most appear in multiple)
  series: Series[];
  aliases?: string[];
  description: string;
  imageUrl?: string;
  notes?: string;
}

// Individual character with relationships
export interface IndividualCharacter extends BaseCharacter {
  type: 'individual';
  // For characters with variants (Finn/Fionna, Ice King/Simon, etc.)
  variantOf?: string;
  // Family relationships
  parentIds?: string[];
  childIds?: string[];
  siblingIds?: string[];
}

// Group entry referencing individual characters
export interface GroupCharacter extends BaseCharacter {
  type: 'group';
  // References to individual character entries
  memberIds: string[];
}

export type Character = IndividualCharacter | GroupCharacter;

export type StorylineCategory = 'major' | 'minor';

export interface Storyline {
  id: string;
  name: string;
  category: StorylineCategory;
  description: string;
  // For ordering episodes within a storyline
  episodeOrder?: string[];
  characterIds?: string[];
  // Optional editorial content
  notes?: string;
}

export type LocationCategory = 'kingdom' | 'dimension' | 'landmark';

export interface Location {
  id: string;
  name: string;
  category: LocationCategory;
  description: string;
  // Series this location appears in
  series: Series[];
  // Characters associated with this location (rulers, residents, etc.)
  characterIds?: string[];
  // Related storylines
  storylineIds?: string[];
  // Key episodes featuring this location
  episodeIds?: string[];
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
