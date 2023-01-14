import React, { createContext, useContext, useEffect, useReducer } from 'react';
import cafeApi from '../api/cafeApi';
import { LoginData, LoginResponse, RegisterData, Usuario } from '../models';
import { authReducer, AuthState } from './authReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

type AuthContextProps = {
  errorMessage: string;
  token: string | null;
  user: Usuario | null;
  status: 'checking' | 'authenticated' | 'not-authenticated';
  signUp: (registerData: RegisterData) => void;
  signIn: (loginData: LoginData) => void;
  logOut: () => void;
  removeError: () => void;
};

const authInitialState: AuthState = {
  status: 'checking',
  token: null,
  user: null,
  errorMessage: '',
};

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(authReducer, authInitialState);

  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    const token = await AsyncStorage.getItem('token');
    if (!token) {
      return dispatch({ type: 'notAuthenticated' });
    }
    const { data, status } = await cafeApi?.get('/auth');
    if (status !== 200) {
      return dispatch({ type: 'notAuthenticated' });
    }
    await AsyncStorage.setItem('token', data?.token);
    dispatch({
      type: 'signUp',
      payload: { token: data?.token, user: data?.usuario },
    });
  };

  const signIn = async ({ correo, password }: LoginData) => {
    try {
      const { data } = await cafeApi.post<LoginResponse>('auth/login', {
        correo,
        password,
      });
      dispatch({
        type: 'signUp',
        payload: { token: data?.token, user: data?.usuario },
      });
      await AsyncStorage.setItem('token', data?.token);
    } catch (e: any) {
      console.log(e?.response?.data);
      dispatch({
        type: 'addError',
        payload: e?.response?.data?.msg || 'Informacion incorrecta',
      });
    }
  };

  const signUp = async ({ nombre, correo, password }: RegisterData) => {
    try {
      const { data } = await cafeApi.post<LoginResponse>('/usuarios', {
        correo,
        password,
        nombre,
      });
      dispatch({
        type: 'signUp',
        payload: { token: data?.token, user: data?.usuario },
      });
      await AsyncStorage.setItem('token', data?.token);
    } catch (e: any) {
      console.log(e?.response?.data);
      dispatch({
        type: 'addError',
        payload: e?.response?.data?.errors[0]?.msg || 'Revise informacion',
      });
    }
  };

  const logOut = async () => {
    await AsyncStorage.removeItem('token');
    dispatch({
      type: 'logout',
    });
  };

  const removeError = () => {
    dispatch({
      type: 'removeError',
    });
  };
  return (
    <AuthContext.Provider
      value={{
        ...state,
        signIn,
        signUp,
        logOut,
        removeError,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('Un error en el context');
  }
  return context;
};
