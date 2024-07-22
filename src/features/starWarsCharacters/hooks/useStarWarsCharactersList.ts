import {useAppDispatch} from '@/shared/lib/store';
import {useCallback, useEffect} from 'react';
import {getStarWarsCharacters} from '../model/services/getStarWarsCharacters';
import {
  useStarWarsCharactersListCount,
  useStarWarsCharactersListData,
  useStarWarsCharactersListLoading,
  useStarWarsCharactersListPage,
  useStarWarsCharactersListPerPage,
} from '../model/starWarsCharactersListSliceSelectors';
import {useStartWarsCharactersDeps} from '../deps';

export const useStarWarsCharactersList = () => {
  const dispatch = useAppDispatch();

  const isListLoading = useStarWarsCharactersListLoading();
  const charactersList = useStarWarsCharactersListData();
  const page = useStarWarsCharactersListPage();
  const perPage = useStarWarsCharactersListPerPage();
  const count = useStarWarsCharactersListCount();

  const deps = useStartWarsCharactersDeps();

  const fetchPage = useCallback(
    (targetPage: number) =>
      dispatch(
        getStarWarsCharacters({
          page: targetPage,
          fetchCharacters: deps.fetchCharacters,
        }),
      ),
    [dispatch, deps.fetchCharacters],
  );

  useEffect(() => {
    fetchPage(1);
  }, [dispatch, fetchPage]);

  return {
    isListLoading,
    charactersList,
    page,
    count,
    perPage,
    fetchPage,
  };
};
