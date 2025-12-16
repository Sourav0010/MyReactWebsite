import { Outlet } from 'react-router-dom';
import { ThemeProvider } from '../context/theme/ThemeProvider';
import Footer from '../components/Footer';
function Layout() {
   return (
      <ThemeProvider>
         <div className='dark:bg-slate-800'>
            <Outlet />
            <Footer />
         </div>
      </ThemeProvider>
   );
}

export default Layout;
