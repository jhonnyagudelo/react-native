import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import { Avatar, Logo, Title } from '../components';

export const HomeScreen = () => {
  return (
    <>
      <Logo />
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Title title="Hola, Jhonny" />
      </View>
    </>
  );
};
