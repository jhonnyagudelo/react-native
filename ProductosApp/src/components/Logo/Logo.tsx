import { Button, Image, View } from 'react-native';
import React from 'react';

export const Logo = () => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Image
        source={require('../../assets/images/previser_mobile.png')}
        style={{ width: 250, height: 160 }}
      />
    </View>
  );
};
