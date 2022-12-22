import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { DetailScreen, HomeScreen } from '../screen';
import { colors } from '../appTheme';
import { Movies } from '../interfaces';

export type RootStackParams = {
  HomeScreen: undefined;
  DetailScreen: Movies;
};

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="HomeScreen"
        options={{ title: 'Home' }}
        component={HomeScreen}
      />
      <Stack.Screen
        name="DetailScreen"
        options={{ title: 'Home' }}
        component={DetailScreen}
      />
    </Stack.Navigator>
  );
};
