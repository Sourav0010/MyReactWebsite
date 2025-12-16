import { useEffect, useState } from 'react';

export default function useLocalStorageTheme(key, initialValue) {
   const [theme, setTheme] = useState(() => {
      const value = localStorage.getItem(key);
      if (!value) return initialValue;
      return JSON.parse(value);
   });

   useEffect(() => {
      localStorage.setItem(key, JSON.stringify(theme));
   }, [theme, key]);

   function toggleTheme() {
      setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
   }

   return [theme, toggleTheme];
}
