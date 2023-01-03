import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { usePokemonPaginated } from '../hooks';

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  usePokemonPaginated();
  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={styles?.pokebolaBG}
      />
      <Text style={{ ...styles?.title, ...styles?.globalMargin, top: top + 20 }}>
        Pokedex
      </Text>
    </>
  );
};
