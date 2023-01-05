import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {
  LoginScreen,
  HomeScreen,
  ProtectedScreen,
  RegisterScreen,
} from '../screens';

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
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ProtectedScreen" component={ProtectedScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    </Stack.Navigator>
  );
};
