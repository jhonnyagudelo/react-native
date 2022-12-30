import { View, Text, SectionList } from 'react-native';
import React from 'react';
import { HeaderTitle, ItemSeparator } from '../components';
import { styles } from '../theme';

interface Casas {
  casa: string;
  data: string[];
}

const casas: Casas[] = [
  {
    casa: 'DC Comics',
    data: [
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
    ],
  },
  {
    casa: 'Marvel Comics',
    data: [
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
    ],
  },
  {
    casa: 'Anime',
    data: [
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
    ],
  },
];

export const SectionListScreen = () => {
  return (
    <View style={{ ...styles?.globalMargin, flex: 1 }}>
      {/*<HeaderTitle title="SectionList" />*/}
      <SectionList
        sections={casas}
        keyExtractor={(item, index) => item + index}
        ListHeaderComponent={() => <HeaderTitle title="Section list" />}
        ListFooterComponent={() => (
          <View style={{ marginBottom: 70 }}>
            <HeaderTitle title={'Total casas: ' + casas?.length} />
          </View>
        )}
        renderItem={({ item }) => <Text>{item}</Text>}
        stickySectionHeadersEnabled
        renderSectionHeader={({ section }) => (
          <View style={{ backgroundColor: 'white' }}>
            <HeaderTitle title={section?.casa} />
          </View>
        )}
        renderSectionFooter={({ section }) => (
          <HeaderTitle title={'Total: ' + section?.data?.length} />
        )}
        // SectionSeparatorComponent={() => <ItemSeparator />}
        ItemSeparatorComponent={() => <ItemSeparator />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
