import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Fab } from '../components';

export const ContadorScreen = () => {
  const [contador, setContador] = useState(10);
  return (
    <View style={style.container}>
      <Text style={style.title}>Contador: {contador}</Text>
      <Fab title="-1" position="bl" onPress={() => setContador(contador - 1)} />
      <Fab title="+1" onPress={() => setContador(contador + 1)} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    top: -15,
    textAlign: 'center',
  },
});
