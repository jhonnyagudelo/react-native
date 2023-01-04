import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FadeInImage, PokemonDetails } from '../components';
import { usePokemon } from '../hooks';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> { }

export const PokemonScreen = ({ navigation, route }: Props) => {
  const { simplePokemon, color } = route.params;
  const { id, name, picture } = simplePokemon;
  const { top } = useSafeAreaInsets();
  const { isLoading, pokemon } = usePokemon(id);
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          ...styles?.container,
          backgroundColor: color,
        }}>
        <View
          style={{
            ...styles?.backBotton,
            top: top + 5,
          }}>
          <TouchableOpacity
            onPress={() => navigation?.pop()}
            activeOpacity={0.8}
            style={{}}>
            <Icon name="arrow-back-outline" color="white" size={35} />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            ...styles?.pokemonName,
            top: top + 45,
          }}>{`${name}\n#${id}`}</Text>
        <Image
          source={require('../assets/pokebola-blanca.png')}
          style={styles.pokeball}
        />
        <FadeInImage uri={picture} style={styles?.pokemonImg} />
      </View>
      {/*Detalles loadin*/}
      {isLoading ? (
        <View style={styles.activityIndicator}>
          <ActivityIndicator color={color} size={50} />
        </View>
      ) : (
        <PokemonDetails pokemon={pokemon} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderBottomRightRadius: 1000,
    borderBottomLeftRadius: 1000,
    height: 370,
    zIndex: 999,
  },
  backBotton: { position: 'absolute', left: 20 },
  pokemonName: {
    color: 'white',
    fontSize: 40,
    alignSelf: 'flex-start',
    left: 20,
  },
  pokeball: {
    width: 250,
    height: 250,
    bottom: -20,
    opacity: 0.7,
  },
  pokemonImg: {
    width: 250,
    height: 250,
    position: 'absolute',
    bottom: -15,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});
