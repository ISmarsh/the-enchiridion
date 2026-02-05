import episodes from '@/data/episodes.json';
import storylines from '@/data/storylines.json';
import characters from '@/data/characters.json';
import type { Character, Episode, Storyline } from '@/types';

const typedEpisodes = episodes as Episode[];
const typedStorylines = storylines as Storyline[];
const typedCharacters = characters as Character[];

/** Map from character ID to the Character object. */
export function buildCharacterMap(): Map<string, Character> {
  const map = new Map<string, Character>();
  for (const c of typedCharacters) {
    map.set(c.id, c);
  }
  return map;
}

/** Map from character ID to episodes they appear in. */
export function buildCharacterEpisodesMap(): Map<string, Episode[]> {
  const map = new Map<string, Episode[]>();
  for (const ep of typedEpisodes) {
    for (const charId of ep.characterIds) {
      if (!map.has(charId)) map.set(charId, []);
      map.get(charId)!.push(ep);
    }
  }
  return map;
}

/** Map from character ID to storylines they're involved in. */
export function buildCharacterStorylinesMap(): Map<string, Storyline[]> {
  const map = new Map<string, Storyline[]>();
  for (const sl of typedStorylines) {
    for (const charId of sl.characterIds ?? []) {
      if (!map.has(charId)) map.set(charId, []);
      map.get(charId)!.push(sl);
    }
  }
  return map;
}

/** Map from character ID to characters that are variants of them. */
export function buildReverseVariantMap(): Map<string, Character[]> {
  const map = new Map<string, Character[]>();
  for (const c of typedCharacters) {
    if (c.type === 'individual' && c.variantOf) {
      if (!map.has(c.variantOf)) map.set(c.variantOf, []);
      map.get(c.variantOf)!.push(c);
    }
  }
  return map;
}

/** Map from individual character ID to groups they belong to. */
export function buildGroupMembershipMap(): Map<string, Character[]> {
  const map = new Map<string, Character[]>();
  for (const c of typedCharacters) {
    if (c.type === 'group') {
      for (const memberId of c.memberIds) {
        if (!map.has(memberId)) map.set(memberId, []);
        map.get(memberId)!.push(c);
      }
    }
  }
  return map;
}
