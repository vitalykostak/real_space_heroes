import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {FavoritesCharactersSchema} from './types';
import {Character} from '@/entities/Character';

const initialState: FavoritesCharactersSchema = {
  data: [],
};

const favoritesCharactersSlice = createSlice({
  name: 'favoritesCharacters',
  initialState,
  reducers: {
    addCharacter: (state, action: PayloadAction<Character>) => {
      state.data = [...state.data, action.payload];
    },
    removeCharacter: (state, action: PayloadAction<Character>) => {
      state.data = state.data.filter(c => c.url !== action.payload.url);
    },
    removeAllCharacters: state => {
      state.data = [];
    },
  },
});

export const favoritesCharactersActions = favoritesCharactersSlice.actions;
export const favoritesCharactersReducer = favoritesCharactersSlice.reducer;
