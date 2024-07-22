import {buildSelector} from '@/shared/lib/store';
import {createSelector} from '@reduxjs/toolkit';

export const [useFavoritesCharacters, selectFavoritesCharacters] =
  buildSelector(state => state.favoritesCharacters.data);

export const selectGenderCounts = createSelector(
  [selectFavoritesCharacters],
  favoriteCharacters => {
    const genderCounts = {males: 0, females: 0, others: 0};

    favoriteCharacters.forEach(character => {
      if (character.gender === 'male') {
        genderCounts.males += 1;
      } else if (character.gender === 'female') {
        genderCounts.females += 1;
      } else {
        genderCounts.others += 1;
      }
    });

    return genderCounts;
  },
);
