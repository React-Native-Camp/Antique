/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './src/components/Home'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import CardDetails from './src/components/CardDetails';
import { Provider as StoreProvider } from 'react-redux'
import store from './src/redux/store'

const navigationStak = createStackNavigator({
  Home: { screen: Home, navigationOptions: { headerShown: false } },
  Details: { screen: CardDetails }
});

const Navigation = createAppContainer(navigationStak);

const App: () => React$Node = () => {
  return (
    <StoreProvider store={store}>
      <Navigation />
    </StoreProvider>
  );
};

const styles = StyleSheet.create({

});

export default App;
