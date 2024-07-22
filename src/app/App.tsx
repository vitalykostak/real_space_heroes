import React from 'react';
import {Navigation} from './Navigation/ui/Navigation';
import {StoreProvider} from './Providers/StoreProvider';

function App(): React.JSX.Element {
  return (
    <StoreProvider>
      <Navigation />
    </StoreProvider>
  );
}

export default App;
