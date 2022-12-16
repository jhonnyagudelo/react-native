import { StyleSheet } from 'react-native';

export const colors = {
  wallpaper: 'white',
};

export const styles = StyleSheet.create({
  container: {},
  containerPoster: {
    height: 420,
    width: 300,
  },
  imageConainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.24,
    shadowRadius: 14.78,

    elevation: 22,
  },
  posterImage: {
    borderRadius: 18,
    flex: 1,
  },
});
