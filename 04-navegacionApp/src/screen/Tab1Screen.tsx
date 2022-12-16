import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { styles } from '../theme';
//npm add -D @types/react-native-vector-icons
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableIcon } from '../components';
export const Tab1Screen = () => {
  const { top } = useSafeAreaInsets();

  useEffect(() => {
    console.log('Tab1ScreenEffet');
  }, []);
  return (
    <View style={{ ...styles.globarMargin, marginTop: top }}>
      <Text style={styles.title}>Icono</Text>
      <Text>
        <TouchableIcon iconName="airplane-outline" />;
        <TouchableIcon iconName="american-football-outline" />;
        <TouchableIcon iconName="bandage-outline" />;
        <TouchableIcon iconName="bicycle-outline" />;
        <TouchableIcon iconName="beer-outline" />;
      </Text>
    </View>
  );
};
