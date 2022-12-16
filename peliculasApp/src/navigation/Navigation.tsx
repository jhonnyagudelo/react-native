import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { DetailScreen, HomeScreen } from '../screen';
import { colors } from '../appTheme';

const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: colors.wallpaper,
        },
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
