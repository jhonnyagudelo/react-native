import React from 'react';
import { SafeAreaView } from 'react-native';
import { DimensionesScreen, FlexScreen, PositionScreen } from './src/screens';
export function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlexScreen />
    </SafeAreaView>
  );
}
