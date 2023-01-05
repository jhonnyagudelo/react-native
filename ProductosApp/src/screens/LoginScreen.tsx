import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { Background, Logo } from '../components';
import { loginStyles } from '../theme';
import { TextInput } from 'react-native-gesture-handler';
import { useForm } from '../hooks';

export const LoginScreen = () => {
  const { documento, membresia, onChange } = useForm({
    documento: '',
    membresia: '',
  });
  return (
    <>
      {/*Background*/}
      <Background />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform?.OS === 'ios' ? 'padding' : 'height'}>
        {/*Background*/}
        <View style={loginStyles?.formContainer}>
          <Logo />
          <Text style={loginStyles?.title}>Login</Text>
          <Text style={loginStyles?.label}>Email</Text>
          <TextInput
            placeholder="No.Documento"
            placeholderTextColor="rgba(255,255,255,0.4)"
            keyboardType="numeric"
            underlineColorAndroid="white"
            onChangeText={value => onChange(value, 'documento')}
            value={documento}
            style={[
              loginStyles?.inputFiel,
              Platform.OS === 'ios' && loginStyles?.inputFieldIos,
            ]}
            selectionColor="white"
          />
          <TextInput
            placeholder="No.Membresía"
            placeholderTextColor="rgba(255,255,255,0.4)"
            keyboardType="numeric"
            underlineColorAndroid="white"
            onChangeText={value => onChange(value, 'membresia')}
            value={documento}
            style={[
              loginStyles?.inputFiel,
              Platform.OS === 'ios' && loginStyles?.inputFieldIos,
            ]}
            selectionColor="white"
          />
          {/*BTN*/}
          <View style={loginStyles?.botonContainer}>
            <TouchableOpacity activeOpacity={0.8} style={loginStyles?.btnLogin}>
              <Text style={loginStyles?.btn_text}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={loginStyles?.newUserContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                console.log('press');
              }}>
              <Text style={loginStyles?.btn_text}>Nueva membresía</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({});
