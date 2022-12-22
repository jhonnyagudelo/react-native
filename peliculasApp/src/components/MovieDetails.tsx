import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Cast, MovieFull } from '../interfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import { formatterPerso } from '../utilities';
import { CatsItem } from './CatsItem';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

export const MovieDetails = ({ movieFull, cast }: Props) => {
  return (
    <>
      {/*Detalles*/}
      <View style={{ marginHorizontal: 20 }}>
        <View style={{ flexDirection: 'row' }}>
          <Icon name="star-outline" color="grey" size={16} />
          <Text style={{ color: 'black' }}>{movieFull?.vote_average}</Text>
          <Text style={{ marginLeft: 5, color: 'black' }}>
            -{movieFull?.genres.map(g => g.name).join(', ')}
          </Text>
        </View>
        {/*Historia*/}

        <Text
          style={{
            fontSize: 23,
            marginTop: 10,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Historia
        </Text>
        <Text style={{ fontSize: 16, color: 'black' }}>
          {movieFull?.overview}
        </Text>
        {/*Historia*/}
        <Text
          style={{
            fontSize: 23,
            marginTop: 10,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Presupuesto
        </Text>
        <Text style={{ fontSize: 18, color: 'black' }}>
          {formatterPerso.format(movieFull?.budget)}
        </Text>
      </View>
      {/*Detalles*/}
      {/*Casting*/}
      <View style={{ marginTop: 10, marginBottom: 100 }}>
        <Text
          style={{
            fontSize: 23,
            marginTop: 10,
            fontWeight: 'bold',
            marginHorizontal: 20,
            color: 'black',
          }}>
          Actores
        </Text>
        <FlatList
          data={cast}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <CatsItem actor={item} />}
          horizontal={true}
          showsVerticalScrollIndicator={false}
          style={{ marginTop: 10, height: 70 }}
        />
      </View>
      {/*Casting*/}
    </>
  );
};
