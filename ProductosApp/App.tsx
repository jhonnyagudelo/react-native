import 'react-native-gesture-handler';
import React from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { AuthProvider, Navigator, ProductProvider } from './src';
import { useFlipper } from '@react-navigation/devtools';

// const AppState = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
const AppState = ({ children }: any) => {
  return (
    <AuthProvider>
      <ProductProvider>{children}</ProductProvider>
    </AuthProvider>
  );
};

const App = () => {
  const navigationRef = useNavigationContainerRef();

  useFlipper(navigationRef);
  return (
    <NavigationContainer>
      <AppState>
        <Navigator />
      </AppState>
    </NavigationContainer>
  );
};

export default App;
