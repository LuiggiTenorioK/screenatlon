/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';

import React from 'react';
import {
  StyleSheet
} from 'react-native';

import { NativeBaseProvider } from 'native-base';
import MainStackNavigator from './src/navigators/MainStackNavigator';
import Footer from "./src/components/Footer";
import MainTabNavigator from './src/navigators/MainTabNavigator';


function App(): JSX.Element {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <MainTabNavigator></MainTabNavigator>
      </NavigationContainer>
      {/* <Footer /> */}
    </NativeBaseProvider>

  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
