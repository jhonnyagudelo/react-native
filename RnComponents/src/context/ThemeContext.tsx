import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { Appearance, AppState } from 'react-native';
import { darkTheme, lightTheme, themeReducer, ThemeState } from './ThemeReducer';
interface ThemeContextProps {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}
export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: any) => {
  const [theme, dispatch] = useReducer(
    themeReducer,
    Appearance.getColorScheme() === 'dark' ? darkTheme : lightTheme,
  );

  console.log(Appearance.getColorScheme());

  // useEffect(() => {
  //   colorsScheme === 'light' ? setLightTheme() : setDarkTheme();
  // }, [colorsScheme]);
  //

  useEffect(() => {
    AppState.addEventListener('change', status => {
      if (status === 'active') {
        Appearance.getColorScheme() === 'light'
          ? setLightTheme()
          : setDarkTheme();
      }
    });
  }, []);

  const setDarkTheme = () => {
    dispatch({ type: 'sett_dark_theme' });
  };
  const setLightTheme = () => {
    dispatch({ type: 'set_light_theme' });
  };

  return (
    <ThemeContext.Provider value={{ setLightTheme, setDarkTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('Un error en el context');
  }
  return context;
};
