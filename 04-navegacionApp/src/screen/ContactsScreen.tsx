import { View, Text, Button } from 'react-native';
import React from 'react';
import { styles } from '../theme';
import { useAuthContext } from '../context';

export const ContactsScreen = () => {
  const {
    singIn,
    authState: { isLoggedIn },
  } = useAuthContext();
  // const {isLoggedIn} = authState;

  return (
    <View style={styles.globarMargin}>
      <Text style={styles.title}>Contacts</Text>
      {!isLoggedIn && <Button title="SingIn" onPress={singIn} />}
    </View>
  );
};
