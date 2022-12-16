import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../model';
import { useAuthContext } from '../context';

/*
  para hacer algo rapido
interface RouteParams {
  id: number;
  nombre: string;
}
*/

//recomendado
interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> { }
export const PersonaScreen = ({ route, navigation }: Props) => {
  const { changeUserName } = useAuthContext();
  // const params = route.params as RouteParams;
  const params = route?.params;
  useEffect(() => {
    navigation.setOptions({
      title: params?.nombre,
    });
  }, []);

  useEffect(() => {
    changeUserName(params.nombre);
  }, []);

  return (
    <View style={styles.globarMargin}>
      <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};
