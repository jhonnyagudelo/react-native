import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { useAuthContext } from '../context';
import {
  LoadingScreen,
  LoginScreen,
  ProtectedScreen,
  RegisterScreen,
  SiteScreen,
  SlideScreen,
} from '../screens';
import { MenuLateral } from './MenuLateral';
import { ProductsNavigator } from './ProductsNavigator';
import { Tabs } from './Tabs';

const Stack = createStackNavigator();

export const Navigator = () => {
  const { status } = useAuthContext();

  if (status === 'checking') {
    return <LoadingScreen />;
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      {status !== 'authenticated' ? (
        <>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="SlideScreen" component={SlideScreen} />
          <Stack.Screen
            name="ProductsNavigator"
            component={ProductsNavigator}
          />
          <Stack.Screen name="SiteScreen" component={SiteScreen} />
          <Stack.Screen name="MenuLateral" component={MenuLateral} />
          <Stack.Screen name="Tabs" component={Tabs} />
          <Stack.Screen name="ProtectedScreen" component={ProtectedScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};
