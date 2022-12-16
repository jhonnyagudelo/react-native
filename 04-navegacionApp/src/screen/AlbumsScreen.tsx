import { View, Text, Button } from 'react-native';
import React from 'react';
import { styles } from '../theme';
import { useAuthContext } from '../context';

export const AlbumsScreen = () => {
  const {
    logout,
    authState: { isLoggedIn },
  } = useAuthContext();
  return (
    <View style={styles.globarMargin}>
      <Text style={styles.title}>AlbumsScreen</Text>
      {isLoggedIn && <Button title="Logout" onPress={logout} />}
    </View>
  );
};
