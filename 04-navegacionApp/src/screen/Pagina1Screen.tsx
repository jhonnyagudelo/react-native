import { View, Text, Button } from 'react-native';
import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';
import { PublicRoutes } from '../model/routes';

interface Props extends StackScreenProps<any, any> { }

const Pagina1Screen = ({ navigation }: Props) => {
  return (
    <>
      <View style={styles.globarMargin}>
        <Text>Pagina1Screen</Text>
        <Button
          title="ir a pagina 2"
          onPress={() => navigation.navigate(`${PublicRoutes.PAGINA2}`)}
        />
      </View>
    </>
  );
};

export { Pagina1Screen };
