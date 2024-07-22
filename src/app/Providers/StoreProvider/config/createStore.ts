import {favoritesCharactersReducer} from '@/features/favoritesCharactersManagement';
import {starWarsCharactersListReducer} from '@/features/starWarsCharacters';
import {StateSchema} from '@/shared/config/store/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore, Reducer} from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['favoritesCharacters'], //Things you want to persist
};

export const createStore = () => {
  const rootReducers: Reducer<StateSchema> = combineReducers({
    starWarsCharactersList: starWarsCharactersListReducer,
    favoritesCharacters: favoritesCharactersReducer,
  });

  const persistedReducer = persistReducer<ReturnType<typeof rootReducers>>(
    persistConfig,
    rootReducers,
  );

  const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });

  const persistor = persistStore(store);

  return {store, persistor};
};

export type AppDispatch = ReturnType<typeof createStore>['store']['dispatch'];
