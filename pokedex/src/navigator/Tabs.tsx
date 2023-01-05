import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Platform } from 'react-native';
import { Navigator } from './Navigator';
import Icon from 'react-native-vector-icons/Ionicons';
import { Tab2Screen } from './TabSearch';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={{
        //Color a la letra del tab
        tabBarActiveTintColor: '#5856D6',
        tabBarLabelStyle: {
          marginBottom: Platform.OS === 'ios' ? 0 : 10,
        },
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: 'rgba(255,255,255,0.92)',
          borderWidth: 0,
          elevation: 0,
          height: Platform.OS === 'ios' ? 80 : 60,
        },
      }}>
      <Tab.Screen
        name="Home"
        options={{
          headerShown: false,
          tabBarLabel: 'Listado',
          tabBarIcon: ({ color }) => (
            <Icon color={color} size={25} name="list-outline" />
          ),
        }}
        component={Navigator}
      />
      <Tab.Screen
        name="Tab2Screen"
        options={{
          headerShown: false,
          tabBarLabel: 'Busqueda',
          tabBarIcon: ({ color }) => (
            <Icon color={color} size={25} name="search-outline" />
          ),
        }}
        component={Tab2Screen}
      />
    </Tab.Navigator>
  );
};
