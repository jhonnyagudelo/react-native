import { View, FlatList } from 'react-native';
import React from 'react';
import { styles } from '../theme';
import { FlatListManuItem, HeaderTitle, ItemSeparator } from '../components';
import { menuItems } from '../data';

export const HomeScreen = () => {
  return (
    <View style={{ flex: 1, ...styles?.globalMargin }}>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => <FlatListManuItem menuItem={item} />}
        keyExtractor={item => item?.name}
        ListHeaderComponent={() => <HeaderTitle title="Opciones de menu" />}
        ItemSeparatorComponent={() => <ItemSeparator />}
      />
    </View>
  );
};
