import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Avatar } from '../Avatar';
import { Item } from './components';
import { MenuItemStyle } from './style';

export const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/*Opciones de menu*/}
      <View>
        <Avatar />
      </View>
      <View>
        <TouchableOpacity
          style={MenuItemStyle?.menuBoton}
          onPress={() => navigation?.navigate('HomeScreen')}>
          <Item itemName="Home" iconName="home-outline" />
        </TouchableOpacity>
        <TouchableOpacity
          style={MenuItemStyle?.menuBoton}
          onPress={() => navigation?.navigate('ProfileScreen')}>
          <Item itemName="Perfil" iconName="person-outline" />
        </TouchableOpacity>

        <TouchableOpacity
          style={MenuItemStyle?.menuBoton}
          onPress={() => navigation?.navigate('PartnersScreen')}>
          <Item itemName="Directorio" iconName="reader-outline" />
        </TouchableOpacity>
        <TouchableOpacity
          style={MenuItemStyle?.menuBoton}
          onPress={() => navigation?.navigate('SiteScreen')}>
          <Item itemName="Site" iconName="reader-outline" />
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
