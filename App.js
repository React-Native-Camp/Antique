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

const navigationStak = createStackNavigator({
  Home: { screen: Home },
});

const Navigation = createAppContainer(navigationStak);

const App: () => React$Node = () => {
  return (
    <Navigation />
  );
};

const styles = StyleSheet.create({

});

export default App;
