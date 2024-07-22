import {Character} from '@/entities/Character';
import {useAppDispatch} from '@/shared/lib/store';
import {useCallback} from 'react';
import {favoritesCharactersActions} from '../model/favoritesCharactersSlice';
import {
  selectGenderCounts,
  useFavoritesCharacters,
} from '../model/favoritesCharactersSelectors';
import {useSelector} from 'react-redux';

export const useFavoritesCharactersManagement = () => {
  const dispatch = useAppDispatch();

  const favoritesCharacters = useFavoritesCharacters();
  const favoritesGenderCount = useSelector(selectGenderCounts);

  const addCharacterToFavorites = useCallback(
    (character: Character) =>
      dispatch(favoritesCharactersActions.addCharacter(character)),
    [dispatch],
  );

  const removeCharacterFromFavorites = useCallback(
    (character: Character) =>
      dispatch(favoritesCharactersActions.removeCharacter(character)),
    [dispatch],
  );

  const removeAllCharacters = useCallback(
    () => dispatch(favoritesCharactersActions.removeAllCharacters()),
    [dispatch],
  );

  const isFavoredCharacter = useCallback(
    (character: Character) =>
      Boolean(favoritesCharacters.find(c => c.url === character.url)),
    [favoritesCharacters],
  );

  return {
    favoritesCharacters,
    favoritesGenderCount,
    addCharacterToFavorites,
    removeCharacterFromFavorites,
    removeAllCharacters,
    isFavoredCharacter,
  };
};
