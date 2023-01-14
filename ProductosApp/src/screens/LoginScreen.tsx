import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect } from 'react';
import { Background, Logo } from '../components';
import { loginStyles } from '../theme';
import { TextInput } from 'react-native-gesture-handler';
import { useForm } from '../hooks';
import { StackScreenProps } from '@react-navigation/stack';
import { useAuthContext } from '../context';

interface Props extends StackScreenProps<any, any> { }

export const LoginScreen = ({ navigation }: Props) => {
  const { signIn, errorMessage, removeError } = useAuthContext();

  const { email, password, onChange } = useForm({
    email: '',
    password: '',
  });

  // console.log(errorMessage?.msg);

  useEffect(() => {
    if (errorMessage.length === 0) {
      return;
    }
    Alert.alert('Login incorrecto', errorMessage, [
      {
        text: 'Ok',
        onPress: removeError,
      },
    ]);
  }, [errorMessage]);

  const onLogin = () => {
    console.log({ email, password });
    // ocultar teclado
    Keyboard.dismiss();
    signIn({ correo: email, password });
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
            placeholder="Email"
            placeholderTextColor="rgba(255,255,255,0.4)"
            keyboardType="email-address"
            underlineColorAndroid="white"
            onChangeText={value => onChange(value, 'email')}
            value={email}
            onSubmitEditing={onLogin}
            style={[
              loginStyles?.inputFiel,
              Platform.OS === 'ios' && loginStyles?.inputFieldIos,
            ]}
            selectionColor="white"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <TextInput
            placeholder="********"
            placeholderTextColor="rgba(255,255,255,0.4)"
            underlineColorAndroid="white"
            // para contraseñas
            secureTextEntry
            onChangeText={value => onChange(value, 'password')}
            value={password}
            onSubmitEditing={onLogin}
            style={[
              loginStyles?.inputFiel,
              Platform.OS === 'ios' && loginStyles?.inputFieldIos,
            ]}
            selectionColor="white"
            autoCapitalize="none"
            autoCorrect={false}
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
              onPress={() => navigation?.replace('RegisterScreen')}>
              <Text style={loginStyles?.btn_text}>Nueva membresía</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({});
