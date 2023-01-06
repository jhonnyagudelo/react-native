import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, PartnersScreen, ProfileScreen } from '../screens';
import { colors } from '../theme';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: colors?.white,
      }}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors?.primaryBlue,

        tabBarLabelStyle: {
          marginBottom: Platform.OS === 'ios' ? 0 : 10,
        },
        tabBarStyle: {
          position: 'absolute',
          borderWidth: 0,
          elevation: 0,
          height: Platform.OS === 'ios' ? 80 : 60,
        },
      }}>
      <Tab.Screen
        name="MenuLateral"
        options={{
          // headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon color={color} size={25} name="home-outline" />
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="ProfileScreen"
        options={{
          // headerShown: false,
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color }) => (
            <Icon color={color} size={25} name="person-circle-outline" />
          ),
        }}
        component={ProfileScreen}
      />
      <Tab.Screen
        name="PartnersScreen"
        options={{
          // headerShown: false,
          tabBarLabel: 'Aliados',
          tabBarIcon: ({ color }) => (
            <Icon color={color} size={25} name="book-outline" />
          ),
        }}
        component={PartnersScreen}
      />
    </Tab.Navigator>
  );
};
