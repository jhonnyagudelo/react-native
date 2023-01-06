import { View, Text, Image } from 'react-native';
import React from 'react';

export const Avatar = () => {
  return (
    <View
      style={{
        alignItems: 'center',
      }}>
      <View
        style={{
          margin: 8,
          width: 120,
          height: 120,
        }}>
        <Image
          source={require('../../assets/images/avatar.png')}
          style={{ width: 120, height: 120 }}
        />
      </View>
    </View>
  );
};
