import { StyleSheet } from 'react-native';
import { colors } from './colorTheme';

export const loginStyles = StyleSheet.create({
  formContainer: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center',
    height: 600,
    marginBottom: 50,
  },
  title: {
    color: colors?.white,
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
  },
  label: {
    marginTop: 25,
    color: colors?.white,
    fontWeight: 'bold',
  },
  inputFiel: {
    color: colors?.white,
    fontSize: 20,
  },
  inputFieldIos: {
    borderBottomColor: colors?.white,
    borderBottomWidth: 2,
    paddingBottom: 4,
  },
  botonContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  btnLogin: {
    borderWidth: 2,
    borderColor: colors?.white,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 100,
  },
  btn_text: {
    fontSize: 18,
    color: colors?.white,
  },
  newUserContainer: {
    alignItems: 'flex-end',
    marginTop: 10,
  },
  btnReturn: {
    position: 'absolute',
    top: 50,
    left: 20,
    borderWidth: 1,
    borderColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 100,
  },
});
