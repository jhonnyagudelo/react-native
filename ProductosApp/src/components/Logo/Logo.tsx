import { Image, View } from 'react-native';
import React from 'react';

interface Props {
  uri;
}

export const Logo = () => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Image
        source={require('../../assets/images/mobile-blanco.png')}
        style={{ width: 180, height: 140 }}
      />
    </View>
  );
};
