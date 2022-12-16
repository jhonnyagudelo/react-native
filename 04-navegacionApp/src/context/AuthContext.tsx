import React, { createContext, useContext, useReducer } from 'react';
import { authReducer } from './authReducer';

export interface AuthState {
  isLoggedIn: boolean;
  userName?: string;
  favoriteIcon?: string;
}

export const authInitialState: AuthState = {
  isLoggedIn: false,
  userName: undefined,
  favoriteIcon: undefined,
};

//Lo usaremos para decirle a react como luce y que expone

export interface AuthContextProps {
  authState: AuthState;
  singIn: () => void;
  logout: () => void;
  changeFavoriteIcon: (iconName: string) => void;
}

export const AuthContext = createContext({} as AuthContextProps);

//Componente proovedor

export const AuthProvider = ({ children }: any) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const singIn = () => {
    dispatch({ type: 'signIn' });
  };

  const changeFavoriteIcon = (iconName: string) => {
    dispatch({ type: 'changeFavIcon', payload: iconName });
  };

  const logout = () => {
    dispatch({ type: 'logout' });
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        singIn,
        logout,
        changeFavoriteIcon,
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
