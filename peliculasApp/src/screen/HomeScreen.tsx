import React, { useEffect } from 'react';
import { View, Dimensions, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { styles } from '../appTheme';
import {
  GradientBackground,
  HorizontalSlider,
  Loading,
  MoviePoster,
} from '../components';
import { useMovies } from '../hooks';
import { getImageColors } from '../utilities';
import { useGradientContext } from '../context';

//Para utilizarlo landScape
const { width: windowWidth } = Dimensions.get('window');

//Si se quiere utilizar para horizontal y vertical se utiiza el
//const { width, height } = useWindowDimensions();

export const HomeScreen = () => {
  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();
  const { setMainColors } = useGradientContext();

  const getPosterColors = async (index: number) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie?.poster_path}`;
    const [primary = 'green', secondary = 'orange'] = await getImageColors(uri);
    setMainColors({ primary, secondary });
  };

  useEffect(() => {
    if (nowPlaying.length > 0) {
      getPosterColors(0);
    }
  }, [nowPlaying]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <ScrollView>
      <View style={{ marginTop: top + 20 }}>
        {/*Carrusel principal*/}
        <GradientBackground>
          <View style={styles.viewCarousel}>
            <Carousel
              data={nowPlaying}
              renderItem={({ item }: any) => <MoviePoster movie={item} />}
              sliderWidth={windowWidth}
              itemWidth={300}
              inactiveSlideOpacity={0.9}
              onSnapToItem={index => getPosterColors(index)}
            />
          </View>
        </GradientBackground>
        {/*Peliculas populares*/}
        <HorizontalSlider title="En cine" movies={popular} />
        <HorizontalSlider title="Clasico" movies={topRated} />
        <HorizontalSlider title="Proximo" movies={upcoming} />
      </View>
    </ScrollView>
  );
};
