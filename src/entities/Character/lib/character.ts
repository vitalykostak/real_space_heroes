import {Character} from '../model/types';

export const extractCharacterId = (character: Character): string => {
  const arr = character.url.split('/');
  return arr?.[arr.length - 2];
};
