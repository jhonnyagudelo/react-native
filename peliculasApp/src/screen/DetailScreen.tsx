import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
// para que funcione con typeScript
//npm add -D @types/react-native-vector-icons
import { MovieDetails } from '../components';
import { useMovieDetails } from '../hooks';
import Icon from 'react-native-vector-icons/Ionicons';

import { RootStackParams } from '../navigation';
import { TouchableOpacity } from 'react-native-gesture-handler';

const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> { }

export const DetailScreen = ({ route, navigation }: Props) => {
  const movie = route?.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie?.poster_path}`;
  const { isLoading, cast, movieFull } = useMovieDetails(movie?.id);
  return (
    <>
      <ScrollView>
        <View style={styles.imageConainer}>
          <View style={styles.imageBorder}>
            <Image source={{ uri }} style={styles.posterImage} />
          </View>
        </View>
        <View style={styles.marginContainer}>
          <Text style={styles?.subTitle}>{movie?.original_title}</Text>
          <Text style={styles?.title}>{movie?.title}</Text>
        </View>
        {isLoading ? (
          <ActivityIndicator size={30} style={{ marginTop: 20 }} />
        ) : (
          <MovieDetails movieFull={movieFull!} cast={cast} />
        )}
        {/*Boton para regresar*/}
        <View style={styles.backButton}>
          <TouchableOpacity onPress={() => navigation.pop()}>
            <Icon name="arrow-back-outline" color="white" size={50} />
          </TouchableOpacity>
        </View>
        {/*Boton para regresar*/}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  imageConainer: {
    width: '100%',
    height: screenHeight * 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
    //para darle curva a las imagenes
    borderBottomEndRadius: 25,
    //IOS
    borderBottomStartRadius: 25,
  },
  imageBorder: {
    //para darle curva a las imagenes
    borderBottomEndRadius: 25,
    //IOS
    borderBottomStartRadius: 25,
    overflow: 'hidden',
    flex: 1,
  },
  posterImage: { flex: 1 },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subTitle: {
    fontSize: 16,
    opacity: 0.8,
    color: 'black',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  backButton: {
    position: 'absolute',
    zIndex: 999,
    elevation: 9,
    top: 30,
    left: 5,
  },
});
