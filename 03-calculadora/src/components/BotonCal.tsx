import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FunctionBtn } from '../modelos';

const BotonCal = ({
  texto,
  color = '#2D2D2D',
  ancho = false,
  accion,
}: FunctionBtn) => {
  return (
    <TouchableOpacity onPress={() => accion(texto)}>
      <View
        style={{
          ...styles.boton,
          backgroundColor: color,
          width: ancho ? 180 : 80,
        }}>
        <Text
          style={{
            ...styles.botonTexto,
            color: color === '#9B9B9B' ? 'black' : 'white',
          }}>
          {texto}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export { BotonCal };

const styles = StyleSheet.create({
  boton: {
    backgroundColor: '#2D2D2D',
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
    height: 80,
    width: 80,
  },
  botonTexto: {
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '300',
    padding: 10,
  },
});
