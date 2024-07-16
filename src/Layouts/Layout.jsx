import React,{useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from '../context/Theme'
function Layout() {
    const [theme, setTheme] = React.useState('light');
    
    const toggleTheme = () => {
        setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
    };

  return (
    <ThemeProvider value={{theme,toggleTheme}}>
    <Outlet/>
    </ThemeProvider>
  )
}

export default Layout