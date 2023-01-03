import 'react-native-gesture-handler';
import React from 'react';
import { Navigator, ThemeProvider } from './src';

// const customeTeam: Theme = {
//   dark: true,
//   colors: {
//     ...DarkTheme.colors,
//     background: 'black',
//   },
// };

const App = () => {
  return (
    <AppState>
      <Navigator />
    </AppState>
  );
};

const AppState = ({ children }: any) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default App;
