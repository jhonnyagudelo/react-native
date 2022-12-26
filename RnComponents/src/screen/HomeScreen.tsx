import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { styles } from '../theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MenuItem } from '../interfaces';
import { FlatListManuItem } from '../components';

const menuItems: MenuItem[] = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101Screen',
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    component: 'Animation102Screen',
  },
];

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();

  const renderListHeader = () => {
    return (
      <View style={{ marginTop: top + 20, marginBottom: 20 }}>
        <Text style={styles?.title}>Opciones de menu</Text>
      </View>
    );
  };

  const itemSeparator = () => {
    return (
      <View
        style={{ borderBottomWidth: 1, opacity: 0.4, marginVertical: 8 }}></View>
    );
  };

  return (
    <View style={{ flex: 1, ...styles?.globalMargin }}>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => <FlatListManuItem menuItem={item} />}
        keyExtractor={item => item?.name}
        ListHeaderComponent={renderListHeader}
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
  );
};
