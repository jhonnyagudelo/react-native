import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { ProductsStackParams } from '../navigator';
import { CustomTextInput } from '../components';
import { colors } from '../theme';
import { Picker } from '@react-native-picker/picker';
import { useCategories } from '../hooks';

interface Props
  extends StackScreenProps<ProductsStackParams, 'ProductScreen'> { }

export const ProductScreen = ({ navigation, route }: Props) => {
  const { id, name = '' } = route?.params;
  useEffect(() => {
    navigation?.setOptions({
      title: name ? name : 'Nuevo Producto',
    });
  }, []);
  const { isLoading, categories } = useCategories();
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <View style={styles?.container}>
      <ScrollView>
        <Text style={styles?.label}>Nombre del producto:</Text>

        <CustomTextInput
          placeholder="Nombre Producto"
          keyboardType="default"
          property="name"
          onChangeText={() => { }}
          value={name}
        />
        <Text style={styles?.label}>Categoria:</Text>
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }>
          {categories?.map(c => (
            <Picker.Item label={c?.nombre} value={c?._id} key={c?._id} />
          ))}
        </Picker>
        <Button
          title="Guardar"
          onPress={() => { }}
          color={colors?.primaryBlue}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 10,
          }}>
          <Button
            title="Camara"
            onPress={() => { }}
            color={colors?.primaryBlue}
          />
          <View style={{ width: 10 }} />
          <Button
            title="Galeria"
            onPress={() => { }}
            color={colors?.primaryBlue}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 20,
  },
  label: {
    fontSize: 18,
  },
});
