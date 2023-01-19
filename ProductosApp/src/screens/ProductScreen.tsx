import { View, Text, StyleSheet, ScrollView, Button, Image } from 'react-native';
import React, { useEffect } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { ProductsStackParams } from '../navigator';
import { colors } from '../theme';
import { Picker } from '@react-native-picker/picker';
import { useCategories, useForm } from '../hooks';
import { useProductsContext } from '../context';
import { TextInput } from 'react-native-gesture-handler';

interface Props
  extends StackScreenProps<ProductsStackParams, 'ProductScreen'> { }

export const ProductScreen = ({ navigation, route }: Props) => {
  const { id = '', name = '' } = route?.params;
  const { categories } = useCategories();
  const { loadProductById, updateProduct, addProduct } = useProductsContext();

  const { _id, categoria_id, nombre, img, onChange, setFormValue } = useForm({
    _id: id,
    categoria_id: '',
    nombre: name,
    img: '',
  });

  useEffect(() => {
    navigation?.setOptions({
      title: nombre ? nombre : 'Sin nombre del producto',
    });
  }, [nombre]);

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    if (id?.length === 0) {
      return;
    }
    const product = await loadProductById(id);
    setFormValue({
      _id: id,
      categoria_id: product?.categoria?._id,
      img: product?.img || '',
      nombre,
    });
  };

  const saveOrUpdate = async () => {
    if (id?.length > 0) {
      updateProduct(categoria_id, nombre, id);
    } else {
      // if (categoria_id.length === 0) {
      //   onChange(categories[0]?._id, 'categoria_id');
      // }
      const categoriaId = categoria_id || categories[0]?._id;
      const newProduct = await addProduct(categoriaId, nombre);
      onChange(newProduct?._id, '_id');
    }
  };

  return (
    <View style={styles?.container}>
      <ScrollView>
        <Text style={styles?.label}>Nombre del producto:</Text>

        <View style={styles.formInput}>
          <TextInput
            style={styles.formTextInput}
            placeholder="Producto"
            value={nombre}
            onChangeText={text => onChange(text, 'nombre')}
          />
        </View>
        <Text style={styles?.label}>Categoria:</Text>
        <Picker
          selectedValue={categoria_id}
          onValueChange={itemValue => onChange(itemValue, 'categoria_id')}>
          {categories?.map(c => (
            <Picker.Item label={c?.nombre} value={c?._id} key={c?._id} />
          ))}
        </Picker>
        <Button
          title="Guardar"
          onPress={() => saveOrUpdate()}
          color={colors?.primaryBlue}
        />
        {_id?.length > 0 && (
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
        )}
        {img.length > 0 && (
          <Image
            source={{ uri: img }}
            style={{ width: 100, height: 300, marginTop: 20 }}
          />
        )}
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
  formIcon: {
    width: 25,
    height: 25,
    marginTop: 2,
  },
  formInput: {
    flexDirection: 'row',
    marginTop: 30,
  },
  formTextInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#AAAAAA',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
