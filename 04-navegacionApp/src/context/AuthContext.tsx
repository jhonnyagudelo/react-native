import { createContext } from 'react';

export interface AuthState {
  isLoggedIn: boolean;
  userName?: string;
  favoriteIcon?: string;
}

export const authInitialState: AuthState = {
  isLoggedIn: false,
};

//Lo usaremos para decirle a react como luce y que expone

export interface AuthContextProps {
  authState: AuthState;
  singIn: () => void;
}

export const AuthContext = createContext({} as AuthContextProps);
