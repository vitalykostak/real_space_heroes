import {FavoritesCharactersSchema} from '@/features/favoritesCharactersManagement';
import {StarWarsCharactersListSchema} from '@/features/starWarsCharacters';

export type StateSchema = {
  starWarsCharactersList: StarWarsCharactersListSchema;
  favoritesCharacters: FavoritesCharactersSchema;
};
