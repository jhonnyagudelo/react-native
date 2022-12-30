import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  AlertScreen,
  Animation101Screen,
  Animation102Screen,
  HomeScreen,
  InfinityScrollScreen,
  ModalScreen,
  SectionListScreen,
  SwitchScreen,
  TextInputScreen,
} from '../screen';
import { PullToRefreshScreen } from '../screen/PullToRefreshScreen';

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
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
      <Stack.Screen name="Animation102Screen" component={Animation102Screen} />
      <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
      <Stack.Screen name="AlertScreen" component={AlertScreen} />
      <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
      <Stack.Screen name="SectionListScreen" component={SectionListScreen} />
      <Stack.Screen
        name="PullToRefreshScreen"
        component={PullToRefreshScreen}
      />
      <Stack.Screen name="ModalScreen" component={ModalScreen} />
      <Stack.Screen
        name="InfinityScrollScreen"
        component={InfinityScrollScreen}
      />
    </Stack.Navigator>
  );
};
