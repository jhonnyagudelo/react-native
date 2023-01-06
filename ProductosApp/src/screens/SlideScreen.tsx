import { StackScreenProps } from '@react-navigation/stack';
import React, { useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import { useAnimation } from '../hooks';
import { Slide } from '../models';
import { colors } from '../theme';
import { items } from '../utilities';

const { width: screenWidth } = Dimensions.get('window');

interface Props extends StackScreenProps<any, any> { }

export const SlideScreen = ({ navigation }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { opacity, fadeIn } = useAnimation();
  const isVisible = useRef(false);
  const renderItem = (item: Slide) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: colors?.white,
          borderRadius: 5,
          padding: 40,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={item.img}
          style={{
            width: 250,
            height: 250,
            resizeMode: 'center',
          }}
        />
        <View style={{ alignItems: 'flex-start' }}>
          <Text style={styles?.title}>{item?.title}</Text>
          <Text style={styles?.subTitle}>{item?.desc}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 50 }}>
      <Carousel
        data={items}
        renderItem={({ item }: any) => renderItem(item)}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        layout="default"
        onSnapToItem={index => {
          setActiveIndex(index);
          if (index === 2) {
            isVisible.current = true;
            fadeIn();
          }
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          alignItems: 'center',
        }}>
        <Pagination
          dotsLength={items?.length}
          activeDotIndex={activeIndex}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 10,
            backgroundColor: colors?.primaryBlue,
          }}
        />

        {isVisible && (
          <Animated.View style={{ opacity }}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                backgroundColor: colors?.primaryBlue,
                width: 130,
                height: 50,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              activeOpacity={0.8}
              onPress={() => {
                if (isVisible?.current) {
                  navigation?.replace('MenuLateral');
                }
              }}>
              <Text style={{ fontSize: 25, color: colors?.white }}>Entrar</Text>
              <Text>
                <Icon
                  name="chevron-forward-outline"
                  size={30}
                  color={colors?.white}
                />
                ;
              </Text>
            </TouchableOpacity>
          </Animated.View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors?.primaryBlue,
  },
  subTitle: {
    fontSize: 16,
    color: colors?.black,
  },
});
