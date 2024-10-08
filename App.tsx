import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import ShoppingList from './src/component/shoppingList';

import { ActivityIndicator } from 'react-native';
import { store, persistor } from './src/redux/store';


const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <ShoppingList />
      </PersistGate>
    </Provider>
  );
};

export default App;
