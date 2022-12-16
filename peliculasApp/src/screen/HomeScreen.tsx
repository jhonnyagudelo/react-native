import React from 'react';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { Loading, MoviePoster } from '../components';
import { useMovies } from '../hooks';

export const HomeScreen = () => {
  const { moviesPremieres, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <View style={{ marginTop: top + 20 }}>
      {/*    <MoviePoster movie={moviesPremieres[0]} />*/}
      <Carousel
        data={moviesPremieres}
        renderItem={() => <MoviePoster movie={moviesPremieres[0]} />}
      />
    </View>
  );
};
