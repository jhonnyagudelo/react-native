import { View, Text, Button } from 'react-native';
import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';
import { RootStackParams } from '../model';

interface Props extends StackScreenProps<RootStackParams> { }
const Pagina3Screen = ({ navigation }: Props) => {
  return (
    <View style={styles.globarMargin}>
      <Text style={styles.title}>Pagina3Screen</Text>
      <Button title="Regresar" onPress={() => navigation.pop()} />
      <Button title="Pagina 1" onPress={() => navigation.popToTop()} />
    </View>
  );
};

export { Pagina3Screen };
