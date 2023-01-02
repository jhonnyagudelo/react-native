import { View, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import { FadeInImage, HeaderTitle } from '../components';

export const InfinityScrollScreen = () => {
  const [numbers, setNumber] = useState([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    const newArray: number[] = [];
    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i;
    }
    setTimeout(() => {
      setNumber([...numbers, ...newArray]);
    }, 1500);
  };

  const renderItem = (item: number) => {
    return (
      <FadeInImage
        uri={`https://picsum.photos/id/${item}/500/400`}
        style={{ width: '100%', height: 400 }}
      />
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={numbers}
        keyExtractor={item => item.toString()}
        renderItem={({ item }) => renderItem(item)}
        ListHeaderComponent={() => (
          <View style={{ marginHorizontal: 20 }}>
            <HeaderTitle title="Infinity scroll" />
          </View>
        )}
        onEndReached={loadMore}
        //de donde empieza a cargar la, 0.5 desde la mitad de la pantalla
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => (
          <View
            style={{
              height: 150,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator size={20} color="#5856D6" />
          </View>
        )}
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
