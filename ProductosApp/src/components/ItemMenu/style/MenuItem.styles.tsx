import { StyleSheet } from 'react-native';
import { colors } from '../../../theme';

export const MenuItemStyle = StyleSheet.create({
  menuBoton: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
    marginHorizontal: 15,
  },
  menuTexto: {
    fontSize: 20,
    color: colors?.black,
    marginLeft: 15,
  },
});
