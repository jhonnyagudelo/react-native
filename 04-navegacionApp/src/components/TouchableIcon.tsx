import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../theme';
import { useAuthContext } from '../context';

interface Props {
  iconName: string;
}

export const TouchableIcon = ({ iconName }: Props) => {
  const { changeFavoriteIcon } = useAuthContext();
  return (
    <TouchableOpacity onPress={() => changeFavoriteIcon({ iconName })}>
      <Text>
        <Icon name={iconName} size={80} color={colors.primary} />;
      </Text>
    </TouchableOpacity>
  );
};
