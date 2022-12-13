import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { SettingsScreen } from '../screen/SettingsScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { DrawerActions } from '@react-navigation/native';
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
              <Icon name="grid-outline" size={20} color="black" />;
            </Text>
          </TouchableOpacity>
        ),
      })}
      drawerContent={props => <MenuInterno {...props} />}>
      <Drawer.Screen name="Tabs" options={{ title: '' }} component={Tabs} />
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
          style={{ ...styles?.menuBoton, flexDirection: 'row' }}
          onPress={() => navigation?.navigate('Tabs')}>
          <Text>
            <Icon name="navigate-outline" size={20} color="black" />;
          </Text>
          <Text style={styles?.menuTexto}> Navegacion</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles?.menuBoton, flexDirection: 'row' }}
          onPress={() => navigation?.navigate('SettingsScreen')}>
          <Text>
            <Icon name="settings-outline" size={20} color="black" />;
          </Text>
          <Text style={styles?.menuTexto}> Ajustes</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
