import { Theme } from '@react-navigation/native';

type ThemeAction = { type: 'set_light_theme' } | { type: 'sett_dark_theme' };

export interface ThemeState extends Theme {
  currentTheme: 'light' | 'dark';
  dividerColor: string;
}

export const lightTheme: ThemeState = {
  currentTheme: 'light',
  dark: false,
  dividerColor: '#243A73',
  colors: {
    primary: '#7C3E66',
    background: '#F2EBE9',
    card: '#A5BECC',
    text: '#7C3E66',
    border: '#243A73',
    notification: '#A5BECC',
  },
};
export const darkTheme: ThemeState = {
  currentTheme: 'dark',
  dark: true,
  dividerColor: '#DCD7C9',
  colors: {
    primary: '#2C3639',
    background: '#3F4E4F',
    card: '#A27B5C',
    text: '#DCD7C9',
    border: '#A27B5C',
    notification: '#A27B5C',
  },
};
export const themeReducer = (
  state: ThemeState,
  action: ThemeAction,
): ThemeState => {
  switch (action.type) {
    case 'set_light_theme':
      return { ...lightTheme };
    case 'sett_dark_theme':
      return { ...darkTheme };
    default:
      return state;
  }
};
