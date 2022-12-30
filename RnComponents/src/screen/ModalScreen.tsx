import { View, Text, Button, Modal } from 'react-native';
import React, { useState } from 'react';
import { HeaderTitle } from '../components';
import { styles } from '../theme';

export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View style={styles?.globalMargin}>
      <HeaderTitle title="Modal" />
      <Button title="Abrir modal" onPress={() => setIsVisible(!isVisible)} />
      <Modal animationType="fade" visible={isVisible} transparent>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.3)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {/*Contenido del modal*/}
          <View
            style={{
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.25,
              elevation: 10,
              height: 200,
              width: 200,
              borderRadius: 5,
            }}>
            <HeaderTitle title="Modal" />
            <Text style={{ fontSize: 16, fontWeight: '300', marginBottom: 20 }}>
              Cuerpo del modal
            </Text>
            <Button title="Cerrar" onPress={() => setIsVisible(!isVisible)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};
