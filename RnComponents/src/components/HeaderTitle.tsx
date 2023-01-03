import { View, Text } from 'react-native';
import React from 'react';
import { styles } from '../theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useThemeContext } from '../context';
interface Props {
  title: string;
}

export const HeaderTitle = ({ title }: Props) => {
  const {
    theme: { colors },
  } = useThemeContext();
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ marginTop: top + 20, marginBottom: 20 }}>
      <Text style={{ ...styles?.title, color: colors?.text }}>{title}</Text>
    </View>
  );
};
