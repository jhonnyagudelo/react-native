import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {
  LoginScreen,
  ProtectedScreen,
  RegisterScreen,
  SiteScreen,
  SlideScreen,
} from '../screens';
import { MenuLateral } from './MenuLateral';
import { Tabs } from './Tabs';

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SlideScreen" component={SlideScreen} />
      <Stack.Screen name="MenuLateral" component={MenuLateral} />
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="ProtectedScreen" component={ProtectedScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="SiteScreen" component={SiteScreen} />
    </Stack.Navigator>
  );
};
