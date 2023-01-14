import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect } from 'react';
import { Logo } from '../components';
import { colors, loginStyles } from '../theme';
import { useForm } from '../hooks';
import { StackScreenProps } from '@react-navigation/stack';
import { useAuthContext } from '../context';

interface Props extends StackScreenProps<any, any> { }
export const RegisterScreen = ({ navigation }: Props) => {
  const { signUp, errorMessage, removeError } = useAuthContext();
  const { nombre, email, password, onChange } = useForm({
    nombre: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    if (errorMessage.length === 0) {
      return;
    }
    Alert.alert('Registro incorrecto', errorMessage, [
      {
        text: 'Ok',
        onPress: removeError,
      },
    ]);
  }, [errorMessage]);

  const onRegister = () => {
    console.log({ nombre, email, password });
    // ocultar teclado
    Keyboard.dismiss();
    signUp({ nombre, correo: email, password });
  };
  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1, backgroundColor: colors?.primaryBlue }}
        behavior={Platform?.OS === 'ios' ? 'padding' : 'height'}>
        <View style={loginStyles?.formContainer}>
          <Logo />
          <Text style={loginStyles?.title}>Registro</Text>
          <Text style={loginStyles?.label}>Nombre</Text>
          <TextInput
            placeholder="Ingrese nombre"
            placeholderTextColor="rgba(255,255,255,0.4)"
            underlineColorAndroid="white"
            onChangeText={value => onChange(value, 'nombre')}
            value={nombre}
            onSubmitEditing={onRegister}
            style={[
              loginStyles?.inputFiel,
              Platform.OS === 'ios' && loginStyles?.inputFieldIos,
            ]}
            selectionColor="white"
            autoCorrect={false}
            autoCapitalize="words"
          />
          <TextInput
            placeholder="Email"
            placeholderTextColor="rgba(255,255,255,0.4)"
            keyboardType="email-address"
            underlineColorAndroid="white"
            onChangeText={value => onChange(value, 'email')}
            value={email}
            onSubmitEditing={onRegister}
            style={[
              loginStyles?.inputFiel,
              Platform.OS === 'ios' && loginStyles?.inputFieldIos,
            ]}
            selectionColor="white"
            autoCorrect={false}
            autoCapitalize="none"
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="rgba(255,255,255,0.4)"
            keyboardType="visible-password"
            underlineColorAndroid="white"
            // para contraseñas
            secureTextEntry
            onChangeText={value => onChange(value, 'password')}
            value={password}
            onSubmitEditing={onRegister}
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
              onPress={onRegister}>
              <Text style={loginStyles?.btn_text}>Registrarse</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => navigation.replace('LoginScreen')}
            activeOpacity={0.8}
            style={loginStyles?.btnReturn}>
            <Text style={loginStyles?.btn_text}>Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({});
