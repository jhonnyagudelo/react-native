import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screen/SettingsScreen';
import {
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import { styles } from '../theme';
import { Tabs } from './Tabs';

//Solucionar el error de reanimatred
//remove react-native-reanimated
//add react-native-reanimated
//npx react-native start --reset-cache
const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  const { width } = useWindowDimensions();
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front',
      }}
      drawerContent={props => <MenuInterno {...props} />}>
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/*Avatar*/}
      <View style={styles?.avatarContainer}>
        <Image
          source={{
            uri: 'https://thumbs.dreamstime.com/b/icono-del-perfil-avatar-defecto-placeholder-gris-de-la-foto-102846161.jpg',
          }}
          style={styles?.avatar}
        />
      </View>
      {/*Opciones de menu*/}
      <View style={styles?.container}>
        <TouchableOpacity
          style={styles?.menuBoton}
          onPress={() => navigation?.navigate('Tabs')}>
          <Text style={styles?.menuTexto}>Navegacion</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles?.menuBoton}
          onPress={() => navigation?.navigate('SettingsScreen')}>
          <Text style={styles?.menuTexto}>Ajustes</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
