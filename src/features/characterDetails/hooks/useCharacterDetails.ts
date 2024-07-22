import {useEffect, useState} from 'react';
import {useCharacterDetailsDeps} from '../deps';
import {CharacterDetails} from '@/entities/Character';

type CharacterDetailsState = {
  loading: boolean;
  data: CharacterDetails | null;
};

export const useCharacterDetails = (characterId: string) => {
  const deps = useCharacterDetailsDeps();
  const [characterDetails, setCharacterDetails] =
    useState<CharacterDetailsState>({loading: false, data: null});

  useEffect(() => {
    const effect = async () => {
      setCharacterDetails({loading: true, data: null});
      const res = await deps.fetchCharacterDetails(characterId);
      setCharacterDetails({loading: false, data: res});
    };

    effect();
  }, [characterId, deps]);

  return characterDetails;
};
