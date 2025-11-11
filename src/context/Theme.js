import React from 'react';

export const ThemeContext = React.createContext({
   theme: 'light',
});

export const ThemeProvider = ThemeContext.Provider;

export default function getTheme() {
   return React.useContext(ThemeContext);
}
