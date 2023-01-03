import { View } from 'react-native';
import React from 'react';
import { useThemeContext } from '../context';

export const ItemSeparator = () => {
  const {
    theme: { dividerColor },
  } = useThemeContext();
  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: dividerColor,
        marginVertical: 8,
      }}
    />
  );
};
