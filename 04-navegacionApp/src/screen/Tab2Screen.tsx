import { View, Text } from 'react-native';
import React, { useEffect } from 'react';

export const Tab2Screen = () => {
  useEffect(() => {
    console.log('Tab2ScreenEffet');
  }, []);
  return (
    <View>
      <Text>Tab2Screen</Text>
    </View>
  );
};
