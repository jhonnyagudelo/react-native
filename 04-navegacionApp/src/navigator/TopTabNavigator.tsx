import { View, Text } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AlbumsScreen, ChatScreen, ContactsScreen } from '../screen';
import { colors } from '../theme';

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
        tabBarShowIcon: true,
        tabBarIndicatorContainerStyle: {
          backgroundColor: colors?.primary,
        },
        tabBarStyle: {
          //en IOS es shadowColor:"Transparent"
          elevation: 0,
        },
        tabBarIcon: ({ color }) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Chat':
              iconName = 'chatbox-ellipses-outline';
              break;

            case 'Contacts':
              iconName = 'people-outline';
              break;

            case 'Albums':
              iconName = 'albums-outline';
              break;
          }
          return <Icon name={iconName} size={30} color={color} />;
        },
      })}>
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Albums" component={AlbumsScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
    </Tab.Navigator>
  );
};
