import { View, Text } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { AlbumsScreen, ChatScreen, ContactsScreen } from '../screen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../theme';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  const { top } = useSafeAreaInsets();

  return (
    <Tab.Navigator
      style={{ padding: top }}
      sceneContainerStyle={{
        backgroundColor: colors.wallpaper,
      }}
      screenOptions={({ route }) => ({
        tabBarPressColor: colors?.primary,
        tabBarIndicatorContainerStyle: {
          backgroundColor: colors?.primary,
        },
        tabBarStyle: {
          //en IOS es shadowColor:"Transparent"
          elevation: 0,
        },
        tabBarIcon: ({ color, focused }) => {
          let iconName: string = '';
          switch (route?.name) {
            case 'Chat':
              iconName = 'chatbox-ellipses-outline';
              break;

            case 'Contacts':
              iconName = 'game-controller-outline';
              break;

            case 'Albums':
              iconName = 'albums-outline';
              break;
          }
          return <Icon name={iconName} size={30} color={color} />;
        },
      })}>
      <Tab.Screen
        name="ChatScreen"
        options={{ title: 'Chat' }}
        component={ChatScreen}
      />
      <Tab.Screen
        name="AlbumsScreen"
        options={{ title: 'Album' }}
        component={AlbumsScreen}
      />
      <Tab.Screen
        name="ContactsScreen"
        options={{ title: 'Contacts' }}
        component={ContactsScreen}
      />
    </Tab.Navigator>
  );
};
