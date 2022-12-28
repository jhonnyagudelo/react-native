import { Platform, StyleSheet, Switch, Text, View } from 'react-native';
import React, { useState } from 'react';

interface Props {
  isOn: boolean;
  onChange: (value: boolean) => void;
}

export const CustomSwitch = ({ isOn, onChange }: Props) => {
  const [isEnabled, setIsEnabled] = useState(isOn);
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onChange(!isEnabled);
  };
  return (
    <View>
      <Switch
        trackColor={{ false: '#D9D9D9', true: '#5856D6' }}
        thumbColor={Platform.OS === 'android' ? '#5856D6' : ''}
        // ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
