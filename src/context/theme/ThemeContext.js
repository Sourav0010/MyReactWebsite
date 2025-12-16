import React from 'react';

export const Context = React.createContext({
   theme: 'light',
});

export default function getTheme() {
   return React.useContext(Context);
}
