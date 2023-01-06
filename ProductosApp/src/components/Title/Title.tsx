import { View, Text } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../../theme';
import { TitleStyle } from './style';
interface Props {
  title: string;
}

export const Title = ({ title }: Props) => {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ marginTop: top + 20, marginBottom: 20 }}>
      <Text style={{ ...TitleStyle?.title, color: colors?.black }}>{title}</Text>
    </View>
  );
};
