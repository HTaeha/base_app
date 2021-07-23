import 'react-native-gesture-handler'
import 'react-native-reanimated'

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

// import { store, persistor } from './redux/store/store'
import { store, persistor} from "./src/modules/store"
import Navigation from './src/navigation';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={isDarkMode ? 'dark-content' : 'light-content'} />
      <Provider store={store}>
        <PersistGate
          loading={null}
          persistor={persistor}
        >
          <Navigation />
        </PersistGate>

      </Provider>
    </SafeAreaView>
  );
};

export default App;
