import React, { useState } from 'react';
import { useAnimation } from '../hooks';
import {
  ActivityIndicator,
  Animated,
  ImageStyle,
  StyleProp,
  View,
} from 'react-native';

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({ uri, style = {} }: Props) => {
  const { opacity, fadeIn } = useAnimation();
  const [isLoader, setIsLoader] = useState(true);
  const finishLoading = () => {
    setIsLoader(false);
    fadeIn();
  };
  return (
    <View>
      {isLoader ? (
        <ActivityIndicator
          style={{ position: 'absolute' }}
          color="#5856D6"
          size={30}
        />
      ) : null}
      <Animated.Image
        source={{ uri }}
        onLoadEnd={finishLoading}
        style={{ ...(style as any), opacity }}
      />
    </View>
  );
};
