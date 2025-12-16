import { useEffect } from 'react';
import getTheme from '../context/theme/ThemeContext';

export default function Footer() {
   const { theme, toggleTheme } = getTheme();

   useEffect(() => {
      document.body.classList.remove('dark', 'light');
      document.body.classList.add(theme);
      console.log(theme);
   }, [theme]);

   return (
      <>
         <div className='dark:bg-slate-700 dark:text-white rounded-t-xl flex items-center flex-wrap-reverse max-sm:text-center justify-between max-sm:justify-center max-sm:gap-2 max-sm:text-sm w-full px-20 pt-9 pb-9'>
            <p>
               <i className='fa-regular fa-copyright'></i> @Sourav Mohanty |
               2025
            </p>
            <p>
               <a href='https://www.linkedin.com/in/sourav-mohanty-link/'>
                  linkedin
               </a>{' '}
               / <a href='https://leetcode.com/u/Sourav010/'>LeetCode</a> /{' '}
               <a href='https://github.com/Sourav0010'>Github</a>
            </p>
            <label className='inline-flex  items-center cursor-pointer'>
               <input
                  type='checkbox'
                  checked={theme === 'dark'}
                  onChange={toggleTheme}
                  className='sr-only peer'
               />
               <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#F0EFEE] dark:peer-focus:ring-slate-700 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-slate-600"></div>
               <span className='ms-3 text-sm font-medium text-gray-900 dark:text-gray-300'>
                  {theme === 'dark' ? 'Light Mode' : `Dark Mode`}
               </span>
            </label>
         </div>
      </>
   );
}
