import { View, Text, Image } from 'react-native';
import React from 'react';
import { Movies } from '../interfaces';
import { styles } from '../appTheme';

interface Props {
  movie: Movies;
}

//carrusel
//npm  add -D @types/react-native-snap-carousel

export const MoviePoster = ({ movie }: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie?.poster_path}`;
  return (
    <View style={styles.containerPoster}>
      <View style={styles.imageConainer}>
        <Image source={{ uri }} style={styles.posterImage} />
      </View>
    </View>
  );
};
