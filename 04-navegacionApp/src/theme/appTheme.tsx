import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#5856D6',
  wallpaper: 'white',
};

export const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
    marginHorizontal: 50,
  },
  globarMargin: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
  },
  botonGrande: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  botonGrandeTexto: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  menuBoton: {
    marginVertical: 10,
  },
  menuTexto: {
    fontSize: 20,
  },
});
