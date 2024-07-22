import {AppDispatch} from '@/app/Providers/StoreProvider/config/createStore';
import {StateSchema} from '@/shared/config/store/types';
import {useDispatch, useSelector} from 'react-redux';

type Selector<T, Args extends any[]> = (state: StateSchema, ...args: Args) => T;
type Hook<T, Args extends any[]> = (...args: Args) => T;
type BuildSelectorResult<T, Args extends any[]> = [
  Hook<T, Args>,
  Selector<T, Args>,
];

export const buildSelector = <T, Args extends any[]>(
  selector: Selector<T, Args>,
): BuildSelectorResult<T, Args> => {
  const useCustomSelector: Hook<T, Args> = (...args) =>
    useSelector((state: StateSchema) => selector(state, ...args));

  return [useCustomSelector, selector];
};

export const useAppDispatch = () => useDispatch<AppDispatch>();
