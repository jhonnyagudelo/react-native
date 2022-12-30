import { View, Text, ScrollView, RefreshControl } from 'react-native';
import React, { useState } from 'react';
import { HeaderTitle } from '../components';
import { styles } from '../theme';

export const PullToRefreshScreen = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      console.log('Terminamos');
      setRefreshing(false);
    }, 3500);
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={150}
          //android
          progressBackgroundColor="#5856D6"
          colors={['white', 'red', 'orange']}
          //ios
          style={{ backgroundColor: '#5856D6' }}
          tintColor="white"
          title="Refreshing"
          titleColor="white"
        />
      }>
      <View style={styles?.globalMargin}>
        <HeaderTitle title="Pull to refresh" />
      </View>
    </ScrollView>
  );
};
