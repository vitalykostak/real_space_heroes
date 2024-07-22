import {Character} from '@/entities/Character';
import {createStrictContext, useStrictContext} from '@/shared/lib/react';

export type StartWarsCharactersDepsContext = {
  fetchCharacters: (props: {page: number}) => Promise<{
    count: number;
    results: Character[];
  }>;
};

export const starWarsCharactersDepsContext =
  createStrictContext<StartWarsCharactersDepsContext>();

export const useStartWarsCharactersDeps = () =>
  useStrictContext(starWarsCharactersDepsContext);
