import { Animated, Button, StyleSheet, Text, View } from 'react-native';
import React, { startTransition } from 'react';
import { useAnimation } from '../hooks';

export const Animation101Screen = () => {
  const { opacity, position, fadeIn, fadeOut, startMovingPosition } =
    useAnimation();

  return (
    <View style={styles?.container}>
      <Text>Animation101Screen</Text>
      <Animated.View
        style={{
          ...styles.purpleBox,
          marginBottom: 20,
          opacity,
          transform: [{ translateY: position }],
        }}
      />
      <Button
        title="FadeIn"
        onPress={() => {
          fadeIn();
          startMovingPosition(100);
        }}
      />
      <Button title="FadeOut" onPress={fadeOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    backgroundColor: '#5856D6',
    width: 150,
    height: 150,
  },
});
