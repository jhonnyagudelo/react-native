import { View } from 'react-native';
import React from 'react';
import { colors } from '../../theme';

export const Background = () => {
  return (
    <View
      style={{
        position: 'absolute',
        backgroundColor: colors?.primaryBlue,
        top: -410,
        width: 1000,
        height: 1200,
        transform: [
          {
            rotate: '-70deg',
          },
        ],
      }}
    />
  );
};
