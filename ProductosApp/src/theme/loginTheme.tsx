import { StyleSheet } from 'react-native';

export const loginStyles = StyleSheet.create({
  formContainer: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center',
    height: 600,
    marginBottom: 50,
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
  },
  label: {
    marginTop: 25,
    color: 'white',
    fontWeight: 'bold',
  },
  inputFiel: {
    color: 'white',
    fontSize: 20,
  },
  inputFieldIos: {
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    paddingBottom: 4,
  },
  botonContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  btnLogin: {
    borderWidth: 2,
    borderColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 100,
  },
  btn_text: {
    fontSize: 18,
    color: 'white',
  },
  newUserContainer: {
    alignItems: 'flex-end',
    marginTop: 10,
  },
});
