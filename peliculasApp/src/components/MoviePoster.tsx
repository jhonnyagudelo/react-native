import { View, Text, Image } from 'react-native';
import React from 'react';
import { Movies } from '../interfaces';
import { styles } from '../appTheme';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
  movie: Movies;
  height?: number;
  width?: number;
}

//carrusel
//npm  add -D @types/react-native-snap-carousel

export const MoviePoster = ({ height = 420, width = 300, movie }: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie?.poster_path}`;

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('DetailScreen', movie)}
      activeOpacity={0.8}
      style={{
        width,
        height,
        marginHorizontal: 2,
        paddingBottom: 20,
        paddingHorizontal: 7,
      }}>
      <View style={styles.imageConainer}>
        <Image source={{ uri }} style={styles.posterImage} />
      </View>
    </TouchableOpacity>
  );
};
