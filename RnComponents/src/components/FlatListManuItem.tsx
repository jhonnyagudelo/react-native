import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useThemeContext } from '../context';
import { MenuItem } from '../interfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

interface Props {
  menuItem: MenuItem;
}

export const FlatListManuItem = ({ menuItem }: Props) => {
  const { name, icon, component } = menuItem;
  const {
    theme: { colors },
  } = useThemeContext();

  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation?.navigate(menuItem?.component)}>
      <View style={styles?.container}>
        <Icon name={icon} color={colors?.primary} size={23} />
        <Text style={{ ...styles.itemText, color: colors?.text }}>{name}</Text>
        <View style={{ flex: 1 }} />
        <Icon
          name="chevron-forward-outline"
          color={colors?.primary}
          size={23}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  itemText: {
    marginLeft: 5,
    color: 'black',
    fontSize: 19,
  },
});
