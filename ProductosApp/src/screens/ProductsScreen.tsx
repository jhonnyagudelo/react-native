import { View, Text, FlatList, StyleSheet, RefreshControl } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useProductsContext } from '../context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackScreenProps } from '@react-navigation/stack';
import { ProductsStackParams } from '../navigator';

interface Props
  extends StackScreenProps<ProductsStackParams, 'ProductsScreen'> { }

export const ProductsScreen = ({ navigation }: Props) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { products, loadProducts } = useProductsContext();

  useEffect(() => {
    navigation?.setOptions({
      headerRight: () => (
        <TouchableOpacity
          activeOpacity={0.8}
          style={{ marginRight: 10 }}
          onPress={() => navigation?.navigate('ProductScreen', {})}>
          <Text>Agregar</Text>
        </TouchableOpacity>
      ),
    });
  }, []);

  const loadProductsFromBackend = async () => {
    setIsRefreshing(true);
    await loadProducts();
    setIsRefreshing(false);
  };

  return (
    <View style={{ flex: 1, marginHorizontal: 10 }}>
      <Text>ProductsScreen</Text>
      <FlatList
        data={products}
        keyExtractor={p => p?._id}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              navigation?.navigate('ProductScreen', {
                id: item?._id,
                name: item?.nombre,
              })
            }>
            <Text style={styles?.productName}>{item?.nombre}</Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={styles?.itemSeparator} />}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={loadProductsFromBackend}
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  productName: {
    fontSize: 20,
  },
  itemSeparator: {
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(0,0,0,0.2)',
    marginVertical: 5,
  },
});
