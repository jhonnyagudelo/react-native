import { Image, StyleSheet, View } from 'react-native';
import React from 'react';

export const Logo = () => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Image
        source={require('../assets/images/mobile-blanco.png')}
        style={{ width: 180, height: 140 }}
      />
    </View>
  );
};
