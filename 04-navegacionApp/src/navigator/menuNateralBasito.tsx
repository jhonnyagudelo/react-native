import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './stackNavigator';
import { SettingsScreen } from '../screen/SettingsScreen';
import { useWindowDimensions } from 'react-native';

//Solucionar el error de reanimatred
//remove react-native-reanimated
//add react-native-reanimated
//npx react-native start --reset-cache
const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {
  const { width } = useWindowDimensions();
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front',
      }}>
      <Drawer.Screen
        name="StactNavigador.navigator"
        options={{ title: 'Home' }}
        component={StackNavigator}
      />
      <Drawer.Screen
        name="SettingsScreen"
        options={{ title: 'Setting' }}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};
