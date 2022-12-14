import { View, Text } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, styles } from '../theme';
import { useAuthContext } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';

export const SettingsScreen = () => {
  const insets = useSafeAreaInsets();

  const { authState } = useAuthContext();
  const { favoriteIcon } = authState;

  console.log(JSON.stringify(favoriteIcon, null, 4));
  return (
    <View style={{ ...styles.globarMargin, marginTop: insets.top }}>
      <Text style={styles.title}>SettingsScreen</Text>
      <Text>{JSON.stringify(authState, null, 4)}</Text>
      {favoriteIcon && (
        <Icon name={favoriteIcon?.iconName} size={150} color={colors.primary} /> 
      )}
    </View>
  );
};
