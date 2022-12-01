import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
const BoxObjectModelScreen = () => {
  return (
    <View style={styles.constainer}>
      <Text style={styles.title}>BoxObjectModel</Text>
    </View>
  );
};

export { BoxObjectModelScreen };

const styles = StyleSheet.create({
  constainer: {
    backgroundColor: 'red',
  },
  title: {
    fontSize: 20,
  },
});
