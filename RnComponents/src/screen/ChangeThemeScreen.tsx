import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { HeaderTitle } from '../components';
import { useThemeContext } from '../context';

export const ChangeThemeScreen = () => {
  const {
    setDarkTheme,
    setLightTheme,
    theme: { colors },
  } = useThemeContext();

  return (
    <View>
      <HeaderTitle title="Theme" />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={setLightTheme}
          style={{
            backgroundColor: colors?.primary,
            justifyContent: 'center',
            width: 150,
            height: 50,
            borderRadius: 20,
          }}>
          <Text style={{ color: 'white', textAlign: 'center', fontSize: 22 }}>
            Light
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={setDarkTheme}
          style={{
            backgroundColor: '#5856D6',
            justifyContent: 'center',
            width: 150,
            height: 50,
            borderRadius: 20,
          }}>
          <Text style={{ color: 'white', textAlign: 'center', fontSize: 22 }}>
            Dark
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
