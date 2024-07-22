import {createAsyncThunk} from '@reduxjs/toolkit';
import {Character} from '@/entities/Character';
import {starWarsCharactersListActions} from '../starWarsCharactersListSlice';
import {StartWarsCharactersDepsContext} from '../../deps';

export const getStarWarsCharacters = createAsyncThunk<
  Character[] | void,
  {
    fetchCharacters: StartWarsCharactersDepsContext['fetchCharacters'];
    page: number;
  },
  {
    rejectValue: string;
  }
>('starWarsCharacterss/getStarWarsCharacters', async (props, thunkApi) => {
  const {fetchCharacters, page} = props;
  const {rejectWithValue, dispatch} = thunkApi;

  try {
    const response = await fetchCharacters({page});

    dispatch(starWarsCharactersListActions.setPage(page));
    dispatch(starWarsCharactersListActions.setCount(response.count));

    return response.results;
  } catch (e) {
    if (e instanceof Error) {
      rejectWithValue(e.message);
    }
  }
});
