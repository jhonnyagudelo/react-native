import React, { createContext, useContext, useReducer } from 'react';
import cafeApi from '../api/cafeApi';
import { LoginData, LoginResponse, Usuario } from '../models';
import { authReducer, AuthState } from './authReducer';

type AuthContextProps = {
  errorMessage: string;
  token: string | null;
  user: Usuario | null;
  status: 'checking' | 'authenticated' | 'not-authenticated';
  signUp: () => void;
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

  const signIn = async ({ correo, password }: LoginData) => {
    try {
      const res = await cafeApi.post<LoginResponse>('auth/login', {
        correo,
        password,
      });
      console.log(res?.data);
    } catch (e: any) {
      console.log(e?.response?.data);
    }
  };
  const signUp = () => { };
  const logOut = () => { };
  const removeError = () => { };
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
