import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Pagina1Screen,
  Pagina2Screen,
  Pagina3Screen,
  PersonaScreen,
} from '../screen';
import { RootStackParams } from '../model';

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => (
  <Stack.Navigator
    // initialRouteName={`${PublicRoutes.PAGINA3}`}  INICIAR DESDE OTRA PAGINA
    screenOptions={{
      headerStyle: {
        elevation: 0,
        //iphone
        shadowColor: 'transparente',
      },
      cardStyle: {
        backgroundColor: 'white',
      },
    }}>
    <Stack.Screen
      name={'Pagina1Screen'}
      options={{ title: 'Pagina 1' }}
      component={Pagina1Screen}
    />
    <Stack.Screen
      name={'Pagina2Screen'}
      options={{ title: 'Pagina 2' }}
      component={Pagina2Screen}
    />
    <Stack.Screen
      name={'Pagina3Screen'}
      options={{ title: 'Pagina 3' }}
      component={Pagina3Screen}
    />
    <Stack.Screen
      name={'PersonaScreen'}
      options={{ title: 'Persona' }}
      component={PersonaScreen}
    />
  </Stack.Navigator>
);
