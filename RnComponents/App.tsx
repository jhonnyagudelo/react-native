import 'react-native-gesture-handler';
import React from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import { Navigator } from './src';

const customeTeam: Theme = {
  dark: true,
  colors: {
    ...DarkTheme.colors,
    background: 'black',
  },
};

const App = () => {
  return (
    <NavigationContainer theme={customeTeam}>
      <Navigator />
    </NavigationContainer>
  );
};

export default App;
