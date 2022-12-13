import { View, Text } from 'react-native';
import React, { useEffect } from 'react';

export const Tab3Screen = () => {
  useEffect(() => {
    console.log('Tab3ScreenEffet');
  }, []);
  return (
    <View>
      <Text>Tab3Screen</Text>
    </View>
  );
};
