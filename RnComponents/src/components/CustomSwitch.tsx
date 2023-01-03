import { Platform, Switch, View } from 'react-native';
import React, { useState } from 'react';
import { useThemeContext } from '../context';

interface Props {
  isOn: boolean;
  onChange: (value: boolean) => void;
}

export const CustomSwitch = ({ isOn, onChange }: Props) => {
  const {
    theme: { colors },
  } = useThemeContext();
  const [isEnabled, setIsEnabled] = useState(isOn);
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onChange(!isEnabled);
  };
  return (
    <View>
      <Switch
        trackColor={{ false: '#D9D9D9', true: colors?.primary }}
        thumbColor={Platform.OS === 'android' ? colors?.primary : ''}
        // ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};
