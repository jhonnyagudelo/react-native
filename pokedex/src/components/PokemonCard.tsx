import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { SimplePokemon } from '../models';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FadeInImage } from './FadeInImage';
import ImageColors from 'react-native-image-colors';
import { useNavigation } from '@react-navigation/native';
const windowWidth = Dimensions.get('window').width;

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const [bgColor, setBgColor] = useState('grey');
  const isMounted = useRef(true);
  const navigation = useNavigation<any>();

  const getPokemonColor = async () => {
    if (!isMounted) {
      return;
    }
    try {
      const color: any = await ImageColors.getColors(pokemon?.picture, {
        fallback: 'grey',
      });
      const dominantColor = color.dominant || bgColor;
      const backgroundColor = color.background || bgColor;
      setBgColor(
        color.platform === 'android' ? dominantColor : backgroundColor,
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPokemonColor();
  }, []);

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() =>
        navigation.navigate('PokemonScreen', {
          simplePokemon: pokemon,
          color: bgColor,
        })
      }>
      <View
        style={{
          ...styles?.cardContainer,
          width: windowWidth * 0.4,
          backgroundColor: bgColor,
        }}>
        <View>
          <Text style={styles?.name}>
            {pokemon?.name} {`\n#${pokemon?.id}`}{' '}
          </Text>
        </View>
        <View style={styles?.pokebolaContainer}>
          <Image
            source={require('../assets/pokebola-blanca.png')}
            style={styles?.pokebola}
          />
        </View>

        <FadeInImage uri={pokemon?.picture} style={styles?.pokemonImg} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    height: 120,
    width: 160,
    marginBottom: 25,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 5,
  },
  name: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    top: 20,
    left: 10,
  },
  pokebolaContainer: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: 0,
    right: 0,
    overflow: 'hidden',
    opacity: 0.5,
  },
  pokebola: {
    width: 100,
    height: 100,
    position: 'absolute',
    right: -25,
    bottom: -25,
  },
  pokemonImg: {
    width: 120,
    height: 120,
    position: 'absolute',
    right: -8,
    bottom: -5,
  },
});
