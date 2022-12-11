import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { colors, styles } from '../theme';
//npm add -D @types/react-native-vector-icons
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
export const Tab1Screen = () => {
  const { top } = useSafeAreaInsets();

  useEffect(() => {
    console.log('Tab1ScreenEffet');
  }, []);
  return (
    <View style={{ ...styles.globarMargin, marginTop: top }}>
      <Text style={styles.title}>Icono</Text>
      <Text>
        <Icon name="airplane-outline" size={80} color={colors.primary} />;
        <Icon
          name="american-football-outline"
          size={80}
          color={colors.primary}
        />
        ;
        <Icon name="bandage-outline" size={80} color={colors.primary} />;
        <Icon name="bicycle-outline" size={80} color={colors.primary} />;
        <Icon name="beer-outline" size={80} color={colors.primary} />;
      </Text>
    </View>
  );
};
