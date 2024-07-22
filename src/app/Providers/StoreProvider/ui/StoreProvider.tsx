import {PropsWithChildren} from 'react';
import {Provider} from 'react-redux';
import {createStore} from '../config/createStore';
import {PersistGate} from 'redux-persist/integration/react';

export const StoreProvider = (props: PropsWithChildren) => {
  const {children} = props;

  const {store, persistor} = createStore();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};
