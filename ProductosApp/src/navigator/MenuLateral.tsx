import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import { DrawerActions } from '@react-navigation/native';
import { Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { Tabs } from './Tabs';
import { HomeScreen } from '../screens';

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
        //drawerPosition:'right'
        //Quitar el icono hamburguesa por defecto del drawer
        // headerShown: false,
        drawerType: width >= 768 ? 'permanent' : 'front',
        headerLeft: () => (
          <TouchableOpacity
            style={{ marginLeft: 10 }}
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
            <Text>
              <Icon name="ellipsis-vertical-outline" size={20} color="black" />
            </Text>
          </TouchableOpacity>
        ),
      })}
      drawerContent={props => <MenuInterno {...props} />}>
      <Drawer.Screen name="Tabs" options={{ title: 'Tabs' }} component={Tabs} />
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
    </Drawer.Navigator>
  );
};

const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/*Opciones de menu*/}
      <View style={{}}>
        <TouchableOpacity
          style={{}}
          onPress={() => navigation?.navigate('HomeScreen')}>
          <Text>
            <Icon name="navigate-outline" size={20} color="black" />;
          </Text>
          <Text style={{}}> Navegacion</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{}}
          onPress={() => navigation?.navigate('Profile')}>
          <Text>
            <Icon name="settings-outline" size={20} color="black" />;
          </Text>
          <Text style={{}}> Ajustes</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
