import { StyleSheet } from 'react-native';

export const colors = {
  wallpaper: 'white',
};

export const styles = StyleSheet.create({
  container: {},
  imageConainer: {
    flex: 1,
    shadowColor: '#000',
    borderRadius: 18,
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.24,
    shadowRadius: 14.78,
    elevation: 22,
  },
  posterImage: {
    flex: 1,
    borderRadius: 18,
  },
  viewCarousel: {
    height: 440,
  },
  viewCarouselPopular: {
    height: 260,
  },
  letterPopular: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
});
