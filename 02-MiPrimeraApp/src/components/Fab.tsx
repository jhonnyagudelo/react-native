import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
import React from 'react';

interface Props {
  title: string;
  position?: 'br' | 'bl';
  onPress: () => void;
}

const Fab = ({ title, position = 'br', onPress }: Props) => {
  const ios = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={[
          style.fabLocation,
          position === 'bl' ? style.right : style.left,
        ]}
        onPress={onPress}>
        <View style={style.fab}>
          <Text style={style.fabText}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const android = () => {
    return (
      <View
        style={[
          style.fabLocation,
          position === 'bl' ? style.left : style.right,
        ]}>
        <TouchableNativeFeedback
          onPress={onPress}
          background={TouchableNativeFeedback.Ripple('#28425B', false, 30)}>
          <View style={style.fab}>
            <Text style={style.fabText}>{title}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };
  return Platform.OS === 'ios' ? ios() : android();
};

export { Fab };

const style = StyleSheet.create({
  fabLocation: {
    bottom: 25,
    position: 'absolute',
  },
  right: { right: 25 },
  left: { left: 25 },

  fab: {
    backgroundColor: '#5856D6',
    borderRadius: 100,
    height: 60,
    justifyContent: 'center',
    width: 60,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 8,
  },
  fabText: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
