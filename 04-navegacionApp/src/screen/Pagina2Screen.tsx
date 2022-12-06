import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Button } from 'react-native';
import { PublicRoutes } from '../model/routes';
import { styles } from '../theme/appTheme';

const Pagina2Screen = () => {
  const navigator = useNavigation();
  useEffect(() => {
    navigator.setOptions({
      title: 'Hola Mundo!!',
      //iphone
      headerBackTitle: '',
    });
  }, []);
  return (
    <View style={styles.globarMargin}>
      <Text style={styles.title}>Pagina2Screen</Text>
      <Button
        title="ir a pagina 2"
        onPress={() => navigator.navigate(`${PublicRoutes.PAGINA3}`)}
      />
    </View>
  );
};

export { Pagina2Screen };
