import {
  Keyboard,
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
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> { }

export const LoginScreen = ({ navigation }: Props) => {
  const { documento, membresia, onChange } = useForm({
    documento: '',
    membresia: '',
  });
  const onLogin = () => {
    console.log({ documento, membresia });
    navigation?.replace('SlideScreen');
    // ocultar teclado
    Keyboard.dismiss();
  };
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
            onSubmitEditing={onLogin}
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
            // secureTextEntry para contraseñas
            onChangeText={value => onChange(value, 'membresia')}
            value={membresia}
            onSubmitEditing={onLogin}
            style={[
              loginStyles?.inputFiel,
              Platform.OS === 'ios' && loginStyles?.inputFieldIos,
            ]}
            selectionColor="white"
          />
          {/*BTN*/}
          <View style={loginStyles?.botonContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={loginStyles?.btnLogin}
              onPress={onLogin}>
              <Text style={loginStyles?.btn_text}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={loginStyles?.newUserContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation?.replace('SlideScreen')}>
              <Text style={loginStyles?.btn_text}>Nueva membresía</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({});
