import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { MenuItem } from '../interfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

interface Props {
  menuItem: MenuItem;
}

export const FlatListManuItem = ({ menuItem }: Props) => {
  const { name, icon, component } = menuItem;

  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation?.navigate(menuItem?.component)}>
      <View style={styles?.container}>
        <Icon name={icon} color="gray" size={23} />
        <Text style={styles.itemText}>{name}</Text>
        <View style={{ flex: 1 }} />
        <Icon name="chevron-forward-outline" color="gray" size={23} />
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
