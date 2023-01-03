import React, { createContext, useContext } from 'react';

interface ThemeContextProps {
  theme: any;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}
export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: any) => {
  const theme = {};
  const setDarkTheme = () => {
    console.log('dark');
  };
  const setLightTheme = () => {
    console.log('light');
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
