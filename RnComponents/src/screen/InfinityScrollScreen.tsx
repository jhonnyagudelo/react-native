import { View, Text, FlatList, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { HeaderTitle } from '../components';

export const InfinityScrollScreen = () => {
  const [numbers, setNumber] = useState([0, 1, 2, 3, 4, 5]);

  const renderItem = (item: number) => {
    return <Text style={styles?.textItem}>{item}</Text>;
  };

  const loadMore = () => {
    const newArray: number[] = [];
    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i;
    }
    setNumber([...numbers, ...newArray]);
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'red' }}>
      <FlatList
        data={numbers}
        keyExtractor={item => item.toString()}
        renderItem={({ item }) => renderItem(item)}
        ListHeaderComponent={<HeaderTitle title="Infinity scroll" />}
        onEndReached={loadMore}
        //de donde empieza a cargar la, 0.5 desde la mitad de la pantalla
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  textItem: {
    backgroundColor: 'green',
    height: 150,
  },
});
