import { Text } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../../../theme';
import { MenuItemStyle } from '../style';

interface Props {
  itemName: string;
  iconName: string;
  size?: number;
}

export const Item = ({ itemName = '', iconName = '', size = 20 }: Props) => {
  return (
    <>
      <Icon name={iconName} size={size} color={colors?.black} />
      <Text style={MenuItemStyle?.menuTexto}>{itemName}</Text>
    </>
  );
};
