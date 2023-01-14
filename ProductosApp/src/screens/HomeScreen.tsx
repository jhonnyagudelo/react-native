import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import { Logo, Title } from '../components';
import { useAuthContext } from '../context';

export const HomeScreen = () => {
  const { user, token, logOut } = useAuthContext();
  return (
    <>
      <Logo />
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Title title={`${user?.nombre}`} />
      </View>
    </>
  );
};
