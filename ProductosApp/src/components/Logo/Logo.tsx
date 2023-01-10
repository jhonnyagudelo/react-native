import { Image, View } from 'react-native';
import React from 'react';

export const Logo = () => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Image
        source={require('../../assets/images/react-logo-white.png')}
        style={{ width: 170, height: 160 }}
      />
    </View>
  );
};
