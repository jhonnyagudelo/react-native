import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { styles } from '../appTheme';
import { Loading, MoviePoster } from '../components';
import { useMovies } from '../hooks';

//Para utilizarlo landScape
const { width: windowWidth } = Dimensions.get('window');

//Si se quiere utilizar para horizontal y vertical se utiiza el
//const { width, height } = useWindowDimensions();

export const HomeScreen = () => {
  const { moviesPremieres, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <View style={{ marginTop: top + 20 }}>
      <View style={styles.viewCarousel}>
        <Carousel
          data={moviesPremieres}
          renderItem={({ item }: any) => <MoviePoster movie={item} />}
          sliderWidth={windowWidth}
          itemWidth={300}
        />
      </View>
    </View>
  );
};
