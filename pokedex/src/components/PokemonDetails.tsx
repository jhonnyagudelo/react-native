import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { PokemonFull } from '../models';
import { FadeInImage } from './FadeInImage';

interface Prop {
  pokemon: PokemonFull;
}

export const PokemonDetails = ({ pokemon }: Prop) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        ...StyleSheet.absoluteFillObject,
      }}>
      <View
        style={{
          ...styles?.container,
          marginTop: 370,
        }}>
        {/*Type*/}
        <Text style={styles?.title}>Types</Text>
        <View style={{ flexDirection: 'row' }}>
          {pokemon?.types?.map(({ type }) => (
            <Text
              key={type?.name}
              style={{ ...styles?.regularText, marginRight: 10 }}>
              {type?.name}
            </Text>
          ))}
        </View>

        <Text style={{ ...styles?.title }}>Peso</Text>
        <Text style={{ ...styles?.regularText }}>{pokemon?.weight}Kg</Text>
      </View>
      {/*Type*/}
      {/*sprites*/}
      <View style={styles?.container}>
        <Text style={styles?.title}>Sprites</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <FadeInImage
            uri={pokemon?.sprites?.front_default}
            style={styles?.baseSprites}
          />
          <FadeInImage
            uri={pokemon?.sprites?.back_default}
            style={styles?.baseSprites}
          />
          <FadeInImage
            uri={pokemon?.sprites?.front_shiny}
            style={styles?.baseSprites}
          />
          <FadeInImage
            uri={pokemon?.sprites?.back_shiny}
            style={styles?.baseSprites}
          />
        </ScrollView>
      </View>
      {/*sprites*/}
      {/*habilidades*/}
      <View style={styles?.container}>
        <Text style={styles?.title}>Habilidadtes base</Text>
        <View style={{ flexDirection: 'row' }}>
          {pokemon?.abilities?.map(({ ability }) => (
            <Text
              key={ability?.name}
              style={{ ...styles?.regularText, marginRight: 10 }}>
              {ability?.name}
            </Text>
          ))}
        </View>
      </View>
      {/*habilidades*/}
      {/*Movimientos*/}
      <View style={styles?.container}>
        <Text style={styles?.title}>Movimientos</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {pokemon?.moves?.map(({ move }) => (
            <Text
              key={move?.name}
              style={{ ...styles?.regularText, marginRight: 10 }}>
              {move?.name}
            </Text>
          ))}
        </View>
      </View>
      {/*Movimientos*/}
      {/*Stats*/}
      <View style={styles?.container}>
        <Text style={styles?.title}>Stats</Text>
        <View>
          {pokemon?.stats?.map((stat, index) => (
            <View key={stat?.stat?.name + index} style={{ flexDirection: 'row' }}>
              <Text
                style={{ ...styles?.regularText, marginRight: 10, width: 150 }}>
                {stat?.stat?.name}
              </Text>
              <Text style={{ ...styles?.regularText, fontWeight: 'bold' }}>
                {stat?.base_stat}
              </Text>
            </View>
          ))}
        </View>
        <View
          style={{
            marginBottom: 20,
            alignItems: 'center',
          }}>
          <FadeInImage
            uri={pokemon?.sprites?.front_default}
            style={styles?.baseSprites}
          />
        </View>
      </View>
      {/*Stats*/}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
  },
  regularText: {
    fontSize: 19,
  },
  baseSprites: {
    width: 100,
    height: 100,
  },
});
