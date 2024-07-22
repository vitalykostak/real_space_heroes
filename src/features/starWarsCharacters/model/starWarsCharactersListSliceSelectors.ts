import {buildSelector} from '@/shared/lib/store';

export const [useStarWarsCharactersListPage, selectStarWarsCharactersListPage] =
  buildSelector(state => state.starWarsCharactersList.page);

export const [
  useStarWarsCharactersListPerPage,
  selectStarWarsCharactersListPerPage,
] = buildSelector(state => state.starWarsCharactersList.perPage);

export const [
  useStarWarsCharactersListCount,
  selectStarWarsCharactersListCount,
] = buildSelector(state => state.starWarsCharactersList.count);

export const [
  useStarWarsCharactersListLoading,
  selectStarWarsCharactersListLoading,
] = buildSelector(state => state.starWarsCharactersList.isLoading);

export const [
  useStarWarsCharactersListError,
  selectStarWarsCharactersListError,
] = buildSelector(state => state.starWarsCharactersList.error);

export const [useStarWarsCharactersListData, selectStarWarsCharactersListData] =
  buildSelector(state => state.starWarsCharactersList.data);
