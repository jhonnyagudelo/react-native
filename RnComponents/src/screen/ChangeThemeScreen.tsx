import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { HeaderTitle } from '../components';
import { useThemeContext } from '../context';

export const ChangeThemeScreen = () => {
  const { setDarkTheme, setLightTheme } = useThemeContext();

  return (
    <View>
      <HeaderTitle title="Theme" />

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={setLightTheme}
        style={{
          backgroundColor: '#5856D6',
          justifyContent: 'center',
          width: 150,
          height: 50,
          borderRadius: 20,
        }}>
        <Text style={{ color: 'white', textAlign: 'center', fontSize: 22 }}>
          Light / Dark
        </Text>
      </TouchableOpacity>
    </View>
  );
};
