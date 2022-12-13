import React, { useEffect } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { styles } from '../theme/appTheme';
import { PublicRoutes } from '../model/routes';
import Icon from 'react-native-vector-icons/Ionicons';

// interface Props extends StackScreenProps<any, any> { }
interface Props extends DrawerScreenProps<any, any> { }

const Pagina1Screen = ({ navigation }: Props) => {
  return (
    <>
      <View style={styles.globarMargin}>
        <Text style={styles.title}>Pagina1Screen</Text>
        <Button
          title="ir a pagina 2"
          onPress={() => navigation.navigate(`${PublicRoutes?.PAGINA2}`)}
        />
        <Text>Navegar con argumentos</Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={{ ...styles?.botonGrande, backgroundColor: '#5856D6' }}
            onPress={() =>
              navigation?.navigate(`${PublicRoutes?.PERSONA}`, {
                id: 1,
                nombre: 'Pedro',
              })
            }>
            <Text>
              <Icon name="body-outline" size={30} color="black" />;
            </Text>
            <Text style={styles?.botonGrandeTexto}>Pedro</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ ...styles?.botonGrande, backgroundColor: '#FF9427' }}
            onPress={() =>
              navigation?.navigate(`${PublicRoutes?.PERSONA}`, {
                id: 2,
                nombre: 'Maria',
              })
            }>
            <Text>
              <Icon name="bicycle-outline" size={30} color="black" />;
            </Text>

            <Text style={styles?.botonGrandeTexto}>Maria</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export { Pagina1Screen };
