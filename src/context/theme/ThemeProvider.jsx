import { Context } from './ThemeContext';
import useLocalStorageTheme from '../../hooks/useLocalStorageTheme';

export function ThemeProvider({ children }) {
   const [theme, toggleTheme] = useLocalStorageTheme('THEME', 'light');
   return (
      <Context.Provider value={{ theme, toggleTheme }}>
         {children}
      </Context.Provider>
   );
}
