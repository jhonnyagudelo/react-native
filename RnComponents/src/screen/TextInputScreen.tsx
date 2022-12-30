import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import { CustomSwitch, HeaderTitle } from '../components';
import { styles } from '../theme';
import { useForm } from '../hooks';

export const TextInputScreen = () => {
  const { onChange, form, isSubcribe } = useForm({
    name: '',
    email: '',
    phone: '',
    isSubcribe: false,
  });
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard?.dismiss}>
          <View style={styles.globalMargin}>
            <HeaderTitle title="TextInputs" />
            <TextInput
              style={stylesTextInputScreen?.inputStyles}
              placeholder="Ingresa tu nombre"
              autoCorrect={false}
              autoCapitalize="words"
              onChangeText={value => onChange(value, 'name')}
            />
            <TextInput
              style={stylesTextInputScreen?.inputStyles}
              placeholder="Ingresa tu email"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={value => onChange(value, 'email')}
              keyboardType="email-address"
            />
            <View style={stylesTextInputScreen?.switchRow}>
              <Text style={stylesTextInputScreen?.switchText}>Suscribirse</Text>
              <CustomSwitch
                isOn={isSubcribe}
                onChange={value => onChange(value, 'isSubcribe')}
              />
            </View>

            <TextInput
              style={stylesTextInputScreen?.inputStyles}
              placeholder="Ingresa tu numero"
              onChangeText={value => onChange(value, 'phone')}
              keyboardType="phone-pad"
            />
            <HeaderTitle title={JSON.stringify(form, null, 3)} />
            <View style={{ height: 100 }} />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const stylesTextInputScreen = StyleSheet.create({
  container: {},

  inputStyles: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  switchText: {
    fontSize: 25,
  },
});
