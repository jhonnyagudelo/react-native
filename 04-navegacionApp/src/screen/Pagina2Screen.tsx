import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Button } from 'react-native';
import { PublicRoutes } from '../model/routes';
import { styles } from '../theme/appTheme';

const Pagina2Screen = () => {
  const navigatior = useNavigation();
  return (
    <View style={styles.globarMargin}>
      <Text>Pagina2Screen</Text>
      <Button
        title="ir a pagina 2"
        onPress={() => navigatior.navigate(`${PublicRoutes.PAGINA3}`)}
      />
    </View>
  );
};

export { Pagina2Screen };
