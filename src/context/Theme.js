import React from "react";

export const ThemeContext = React.createContext({
    theme: "light",
    toggleTheme: () => {}
});

export const ThemeProvider = ThemeContext.Provider;

export default function getTheme() {
    return React.useContext(ThemeContext);
}