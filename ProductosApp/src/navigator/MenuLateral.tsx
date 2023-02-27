import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import { DrawerActions } from '@react-navigation/native';
import { Text, TouchableOpacity, useWindowDimensions } from 'react-native';
import { PartnersScreen, ProfileScreen } from '../screens';
import { MenuInterno } from '../components';
import { Tabs } from './Tabs';
import { colors } from '../theme';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  const { width } = useWindowDimensions();
  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        // drawerPosition: 'right',
        //Quitar el icono hamburguesa por defecto del drawer
        // headerShown: false,
        drawerType: width >= 768 ? 'permanent' : 'front',
        headerLeft: () => (
          <TouchableOpacity
            style={{ marginLeft: 10 }}
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
            <Text>
              <Icon
                name="ellipsis-vertical-outline"
                size={50}
                color={colors?.white}
              />
            </Text>
          </TouchableOpacity>
        ),
      })}
      drawerContent={props => <MenuInterno {...props} />}>
      <Drawer.Screen name="HomeScreen" options={{ title: '' }} component={Tabs} />
    </Drawer.Navigator>
  );
};
