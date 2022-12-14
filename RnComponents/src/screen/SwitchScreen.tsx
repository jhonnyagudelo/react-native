import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CustomSwitch, HeaderTitle } from '../components';
import { useThemeContext } from '../context';

export const SwitchScreen = () => {
  const {
    theme: { colors },
  } = useThemeContext();
  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  const { isActive, isHappy, isHungry } = state;
  const onChange = (value: boolean, field: string) => {
    setState({
      ...state,
      [field]: value,
    });
  };
  return (
    <View style={{ marginHorizontal: 20 }}>
      <HeaderTitle title="Shitches" />
      <View style={styles?.switchRow}>
        <Text style={{ ...styles?.switchText, color: colors?.text }}>
          isActive
        </Text>
        <CustomSwitch
          isOn={isActive}
          onChange={value => onChange(value, 'isActive')}
        />
      </View>
      <View style={styles?.switchRow}>
        <Text style={{ ...styles?.switchText, color: colors?.text }}>
          isHungry
        </Text>
        <CustomSwitch
          isOn={isHungry}
          onChange={value => onChange(value, 'isHungry')}
        />
      </View>
      <View style={styles?.switchRow}>
        <Text style={{ ...styles?.switchText, color: colors?.text }}>
          isHappy
        </Text>
        <CustomSwitch
          isOn={isHappy}
          onChange={value => onChange(value, 'isHappy')}
        />
      </View>
      <Text style={{ ...styles?.switchText, color: colors?.text }}>
        {JSON.stringify(state, null, 5)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  switchText: {
    fontSize: 25,
  },
});
