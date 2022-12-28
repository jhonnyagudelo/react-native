import { View, Text } from 'react-native';
import React from 'react';
import { styles } from '../theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
interface Props {
  title: string;
}

export const HeaderTitle = ({ title }: Props) => {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ marginTop: top + 20, marginBottom: 20 }}>
      <Text style={styles?.title}>{title}</Text>
    </View>
  );
};
