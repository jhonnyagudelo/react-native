import {
  Dimensions,
  FlatList,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Loading, PokemonCard, SearchInput } from '../components';
import { usePokemonSearch } from '../hooks';
import { styles as globalStyles } from '../theme';
import { SimplePokemon } from '../models';

const screenWidth = Dimensions?.get('window')?.width;

export const SearchScreen = () => {
  const { top } = useSafeAreaInsets();
  const { isFetching, simplePokemonList } = usePokemonSearch();
  const [pokemonFilter, setPokemonFilter] = useState<SimplePokemon[]>([]);
  const [term, setTerm] = useState('');

  useEffect(() => {
    if (term.length === 0) {
      return setPokemonFilter([]);
    }

    if (isNaN(Number(term))) {
      setPokemonFilter(
        simplePokemonList.filter(poke =>
          poke?.name.toLowerCase().includes(term.toLowerCase()),
        ),
      );
    } else {
      const pokemonId = simplePokemonList?.find(poke => poke?.id === term);
      setPokemonFilter(pokemonId ? [pokemonId] : []);
    }
  }, [term]);

  if (isFetching) {
    return <Loading />;
  }

  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: 20,
      }}>
      <SearchInput
        onDebounce={value => setTerm(value)}
        style={{
          position: 'absolute',
          zIndex: 999,
          width: screenWidth - 40,
          top: Platform.OS === 'ios' ? top : top + 10,
        }}
      />
      <FlatList
        data={pokemonFilter}
        keyExtractor={pokemon => pokemon?.id}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        ListHeaderComponent={
          <Text
            style={{
              ...globalStyles?.title,
              ...globalStyles?.globalMargin,
              paddingBottom: top + 10,
              marginTop: Platform.OS === 'ios' ? top + 60 : top + 80,
            }}>
            {term}
          </Text>
        }
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
