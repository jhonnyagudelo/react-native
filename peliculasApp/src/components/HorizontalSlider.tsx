import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Movies } from '../interfaces';
import { styles } from '../appTheme';
import { MoviePoster } from './MoviePoster';

interface Props {
  title?: string;
  movies: Movies[];
}

export const HorizontalSlider = ({ title, movies }: Props) => {
  return (
    <>
      <View style={{ height: title ? 260 : 220 }}>
        {title && <Text style={styles.letterPopular}>{title}</Text>}
        <FlatList
          data={movies}
          renderItem={({ item }: any) => (
            <MoviePoster movie={item} width={140} height={200} />
          )}
          keyExtractor={item => item.id.toString()}
          horizontal={true}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </>
  );
};
