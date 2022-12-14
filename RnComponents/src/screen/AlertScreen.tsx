import { View, Text, Button, Alert } from 'react-native';
import React from 'react';

import prompt from 'react-native-prompt-android';

import { HeaderTitle } from '../components';
import { styles } from '../theme';

export const AlertScreen = () => {
  const showAlert = () =>
    Alert.alert('Titulo', 'Mensaje de alerta', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);

  const showPrompt = () => {
    // Alert.prompt(
    //   '¿Estas seguro?',
    //   'Esta accion no se puede revertir',
    //   (valor: string) => console.log('info: ', valor),
    //   'plain-text',
    // );
    prompt(
      'Enter password',
      'Enter your password to claim your $1.5B in lottery winnings',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: password => console.log('OK Pressed, password: ' + password),
        },
      ],
      {
        type: 'secure-text',
        cancelable: false,
        defaultValue: 'test',
        placeholder: 'placeholder',
      },
    );
  };
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Alerta" />
      <Button title="mostart alerta" onPress={showAlert} />
      <View style={{ height: 10 }} />
      {/*solo IOS*/}
      <Button title="show Prompt" onPress={showPrompt} />
    </View>
  );
};
