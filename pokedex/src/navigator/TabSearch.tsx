import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { PokemonScreen, SearchScreen } from '../screens';
import { RootStackParams } from './Navigator';

const Tab2 = createStackNavigator<RootStackParams>();

export const Tab2Screen = () => {
  return (
    <Tab2.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: 'white' },
      }}>
      <Tab2.Screen name="SearchScreen" component={SearchScreen} />
      <Tab2.Screen name="PokemonScreen" component={PokemonScreen} />
    </Tab2.Navigator>
  );
};
