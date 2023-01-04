import React from 'react';
import { View, Text, Image, FlatList, ActivityIndicator } from 'react-native';
import { styles } from '../theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { usePokemonPaginated } from '../hooks';
import { FadeInImage } from '../components';
import { PokemonCard } from '../components/PokemonCard';

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const { isLoading, loadPokemons, simplePokemonList } = usePokemonPaginated();
  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={styles?.pokebolaBG}
      />
      {}
      <FlatList
        data={simplePokemonList}
        keyExtractor={pokemon => pokemon?.id}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        ListHeaderComponent={
          <Text
            style={{
              ...styles?.title,
              ...styles?.globalMargin,
              top: top + 20,
              marginBottom: top + 20,
            }}>
            Pokedex
          </Text>
        }
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
        //infinity scroll
        onEndReached={loadPokemons}
        onEndReachedThreshold={0.4}
        ListFooterComponent={
          <ActivityIndicator style={{ height: 100 }} size={20} color="grey" />
        }
      />
    </>
  );
};
