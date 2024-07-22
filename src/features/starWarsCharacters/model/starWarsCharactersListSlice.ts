import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {StarWarsCharactersListSchema} from './types';
import {getStarWarsCharacters} from './services/getStarWarsCharacters';

const initialState: StarWarsCharactersListSchema = {
  count: Infinity,
  page: 1,
  perPage: 10,
  isLoading: false,
  error: undefined,
  data: [],
};

const starWarsCharactersListSlice = createSlice({
  name: 'starWarsCharactersList',
  initialState,
  reducers: {
    setCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getStarWarsCharacters.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getStarWarsCharacters.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = undefined;
      state.data = action.payload || [];
    });
    builder.addCase(getStarWarsCharacters.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const starWarsCharactersListActions =
  starWarsCharactersListSlice.actions;
export const starWarsCharactersListReducer =
  starWarsCharactersListSlice.reducer;
