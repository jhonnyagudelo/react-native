import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Pagina1Screen, Pagina2Screen, Pagina3Screen } from '../screen';
import { PublicRoutes } from '../model/routes';

const Stack = createStackNavigator();

export const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name={PublicRoutes.PAGINA1} component={Pagina1Screen} />
    <Stack.Screen name={PublicRoutes.PAGINA2} component={Pagina2Screen} />
    <Stack.Screen name={PublicRoutes.PAGINA3} component={Pagina3Screen} />
  </Stack.Navigator>
);
