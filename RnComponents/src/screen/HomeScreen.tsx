import { View, FlatList } from 'react-native';
import React from 'react';
import { styles } from '../theme';
import { FlatListManuItem, HeaderTitle } from '../components';
import { menuItems } from '../data';

export const HomeScreen = () => {
  const itemSeparator = () => {
    return (
      <View style={{ borderBottomWidth: 1, opacity: 0.4, marginVertical: 8 }} />
    );
  };

  return (
    <View style={{ flex: 1, ...styles?.globalMargin }}>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => <FlatListManuItem menuItem={item} />}
        keyExtractor={item => item?.name}
        ListHeaderComponent={() => <HeaderTitle title="Opciones de menu" />}
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
  );
};
