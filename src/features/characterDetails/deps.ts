import {CharacterDetails} from '@/entities/Character';
import {createStrictContext, useStrictContext} from '@/shared/lib/react';

type CharacterDetailsDepsContext = {
  fetchCharacterDetails: (characterId: string) => Promise<CharacterDetails>;
};

export const characterDetailsDepsContext =
  createStrictContext<CharacterDetailsDepsContext>();

export const useCharacterDetailsDeps = () =>
  useStrictContext(characterDetailsDepsContext);
