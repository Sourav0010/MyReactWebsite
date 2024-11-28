import { NavLink, Link } from 'react-router-dom';
import getTheme from './context/Theme';
import { useEffect } from 'react';
import React from 'react';

function App() {
   const { theme, toggleTheme } = getTheme();

   useEffect(() => {
      document.body.classList.remove('dark', 'light');
      document.body.classList.add(theme);
   }, [theme]);

   return (
      <>
         <div className='w-full h-full dark:bg-slate-800'>
            {/* Header Section */}
            <div className=' bg-[#F0EFEE] dark:bg-slate-900 dark:text-white flex flex-col p-9 font-regular rounded-b-[6rem] max-sm:rounded-b-[2rem]'>
               <div className='flex items-center w-full justify-between visible max-sm:invisible'>
                  <div className=' flex gap-3 items-center'>
                     <h3 className='text-xs'>mohantysourav656@gmail.com</h3>
                     <button
                        className='px-2 py-1 dark:bg-gray-800 bg-white text-xs rounded-md'
                        onClick={(e) => {
                           window.navigator.clipboard.writeText(
                              'mohantysourav656@gmail.com'
                           );
                           e.target.innerText = 'Copied!';
                           e.target.style.backgroundColor = '#2bff00';
                           e.target.style.color = 'white';
                        }}
                     >
                        Copy
                     </button>
                  </div>
                  <div className='flex text-xs items-center gap-4'>
                     <p>
                        <a href='https://www.linkedin.com/in/sourav-mohanty-link/'>
                           linkedin
                        </a>{' '}
                        /{' '}
                        <a href='https://leetcode.com/u/Sourav010/'>LeetCode</a>{' '}
                        / <a href='https://github.com/Sourav0010'>Github</a>
                     </p>

                     <label className='inline-flex items-center cursor-pointer'>
                        <input
                           type='checkbox'
                           value=''
                           checked={theme === 'dark'}
                           onChange={toggleTheme}
                           className='sr-only peer'
                        />
                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#F0EFEE] dark:peer-focus:ring-slate-700 rounded-full peer dark:bg-white peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-slate-600"></div>
                        <span className='ms-3 text-sm font-medium text-gray-900 dark:text-gray-300'>
                           Dark Theme
                        </span>
                     </label>
                  </div>
               </div>
               <div className='py-32 flex flex-col items-center'>
                  <div className='relative w-[24rem] max-sm:w-[13rem]'>
                     <div className=' m-auto  w-28 h-28 dark:border-white dark:border dark:border-4  rounded-full max-sm:w-16 max-sm:h-16 overflow-hidden'>
                        <img src='https://i.ibb.co/tCdPhPx/profile.jpg' />
                     </div>
                     <div className=' absolute top-0 right-0 dark:bg-slate-700  bg-white p-2 rounded-md top-0'>
                        <p className='max-sm:text-[8px]'>Hi!👋 I'm Sourav </p>
                     </div>
                  </div>

                  <h2 className=' mt-5 text-center text-4xl font-bold max-sm:text-xl'>
                     Frontend Developer
                  </h2>
                  <p className=' text-center text-sm max-sm:text-[8px]'>
                     Building Web Applications, Brands and products
                  </p>
                  <div className='w-[17rem] mt-2 mb-2 bg-black dark:bg-white h-[1px] max-sm:w-[9rem]'></div>
                  <Link
                     className=' bg-black hover:bg-white hover:text-black hover:border border border-black hover:border-black text-white px-6 py-4 rounded-lg mt-3 max-sm:px-3 max-sm:py-2 max-sm:text-[12px] dark:bg-slate-700 dark:hover:bg-slate-700 dark:hover:text-white dark:hover:border-white'
                     to={
                        'https://drive.google.com/file/d/1U0CFMKNcXcSK_UbZAMDOIjT1LTzR18dz/view?pli=1'
                     }
                  >
                     Download CV <i className='fa-solid fa-arrow-down'></i>
                  </Link>
               </div>
            </div>

            {/* Tech Stack Section */}

            <div className='bg-white dark:bg-slate-800 dark:text-white mt-4 flex items-center flex-col'>
               <div className='border mb-14 border-black dark:border-white text-center py-3 px-4 max-sm:py-1 max-sm:px-2 mb-4'>
                  <h2 className=' font-medium max-sm:text-sm text-xl'>
                     Tech-Stacks
                  </h2>
               </div>

               <div className='flex items-center w-full px-20 max-sm:px-10 justify-between'>
                  <div className='flex flex-col items-center justify-center'>
                     <i className='cursor-pointer hover:text-blue-900 text-6xl max-sm:text-2xl fa-brands fa-react'></i>
                     <h2 className='max-sm:text-[7px]'>React Js</h2>
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                     <i className='cursor-pointer hover:text-yellow-500 text-6xl max-sm:text-2xl fa-brands fa-js-square'></i>
                     <h2 className='max-sm:text-[7px]'>JavaScript</h2>
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                     <i className='cursor-pointer hover:text-orange-600 text-6xl max-sm:text-2xl fa-brands fa-html5'></i>
                     <h2 className='max-sm:text-[7px]'>HTML</h2>
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                     <i className='cursor-pointer hover:text-blue-500 text-6xl max-sm:text-2xl fa-brands fa-css3-alt'></i>
                     <h2 className='max-sm:text-[7px]'>CSS</h2>
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                     <i className='cursor-pointer hover:text-green-500 text-6xl max-sm:text-2xl fa-brands fa-node-js'></i>
                     <h2 className='max-sm:text-[7px]'>Node Js</h2>
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                     <i className='cursor-pointer hover:text-pink-400 text-6xl max-sm:text-2xl fa-brands fa-sass'></i>
                     <h2 className='max-sm:text-[7px]'>Sass</h2>
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                     <i className='cursor-pointer hover:text-blue-500 text-6xl max-sm:text-2xl fa-brands fa-bootstrap'></i>
                     <h2 className='max-sm:text-[7px]'>Bootstrap</h2>
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                     <i className='cursor-pointer hover:text-yellow-500 text-6xl max-sm:text-2xl fa-brands fa-github'></i>
                     <h2 className='max-sm:text-[7px]'>GitHub</h2>
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                     <i className='cursor-pointer hover:text-[#6860FF] text-6xl max-sm:text-2xl fa-brands fa-stripe'></i>
                     <h2 className='max-sm:text-[7px]'>Stripe</h2>
                  </div>
               </div>
            </div>

            {/* What I Do Section */}

            <div className='bg-[#F0EFEE] dark:bg-slate-900 dark:text-white max-sm:mt-10 max-sm:rounded-[2rem]  mt-20 pb-20 rounded-[6rem]'>
               <div className='p-20'>
                  <h2 className='text-center text-4xl max-sm:text-lg m-auto max-w-[30rem] font-bold'>
                     Collaborating with agencies and brands for impactful
                     outcome{' '}
                  </h2>
               </div>

               <div className='w-full relative '>
                  <div className=' bg-slate-700 dark:bg-white h-[1px] w-[90%] m-auto'></div>
                  <div className='px-10 py-2 max-sm:px-5 max-sm:py-1 max-sm:text-xs bg-white dark:bg-slate-800  w-fit border rounded-full absolute top-0 translate-x-[-50%] translate-y-[-50%] -rotate-3 left-[50%] '>
                     <p>Services</p>
                  </div>

                  <div className=' mt-20 flex-wrap px-20 max-sm:px-5 flex flex-row items-center justify-around'>
                     <div className=' flex text-center flex-col w-[14rem] max-sm:w-[11rem] m-4 border border-gray-500 rounded-md p-4'>
                        <i className='text-center max-sm:text-xl text-2xl fa-solid fa-paintbrush'></i>
                        <h2 className='font-medium mt-2 max-sm:text-sm mb-2'>
                           UX/UI
                        </h2>
                        <p className='max-sm:text-xs'>
                           Designing interfaces that are reliable, profitable
                           and easy to use.{' '}
                        </p>
                     </div>

                     <div className=' flex text-center flex-col w-[14rem] m-4 max-sm:w-[11rem] border border-gray-500 rounded-md p-4'>
                        <i className='text-center text-2xl max-sm:text-xl fa-solid fa-laptop'></i>
                        <h2 className='font-medium mt-2 max-sm:text-sm mb-2'>
                           Web & Mobile Apps
                        </h2>
                        <p className='max-sm:text-xs'>
                           Migrating ideas into real world web and mobile
                           applications.{' '}
                        </p>
                     </div>

                     <div className=' flex text-center flex-col w-[14rem] max-sm:w-[11rem] m-4 border border-gray-500 rounded-md p-4'>
                        <i className='text-center text-2xl max-sm:text-xl fa-solid fa-paint-roller'></i>
                        <h2 className='font-medium mt-2 max-sm:text-sm mb-2'>
                           Design & Creative
                        </h2>
                        <p className='max-sm:text-xs'>
                           Painting stunning designs which connects you with
                           your costumers.
                        </p>
                     </div>

                     <div className=' flex flex-col text-center w-[14rem] max-sm:w-[11rem] m-4 border border-gray-500 rounded-md p-4'>
                        <i className='text-center text-2xl max-sm:text-xl fa-solid fa-server'></i>
                        <h2 className=' max-sm:text-[12px] font-medium mt-2 mb-2'>
                           Deploy & Development
                        </h2>
                        <p className='max-sm:text-xs'>
                           Deploying your dreams into real world with trending
                           technologies.
                        </p>
                     </div>
                  </div>
               </div>
            </div>

            {/* Contact Section */}
            <div className='mt-20 flex dark:text-white flex-col items-center'>
               <div className='bg-[#EEEDEC] dark:bg-slate-900 w-[4rem] h-[4rem]  flex items-center justify-center rounded-full'>
                  <i className='text-2xl fa-regular fa-handshake'></i>
               </div>

               <div className='flex flex-col items-center mb-20'>
                  <h2 className='text-4xl max-sm:text-lg text-center mt-4 mb-4'>
                     Hire Me As <br /> A Frontend Engineer
                  </h2>
                  <div className='flex flex-row gap-4 mt-4 max-sm:mt-2'>
                     <button
                        className=' flex flex-row max-sm:text-xs items-baseline w-fit gap-2 text-center justify-center cursor-pointer dark:bg-gray-900 dark:text-white dark:border-none dark:hover:bg-[#DD4B3E] bg-white text-black hover:bg-[#DD4B3E] hover:text-white border  px-4 py-2 rounded-full'
                        onClick={(e) => {
                           e.preventDefault();
                           e.stopPropagation();
                           window.navigator.clipboard.writeText(
                              'mohantysourav656@gmail.com'
                           );
                        }}
                     >
                        <i className='fa-regular fa-envelope'></i>
                        <p>Email</p>
                     </button>
                     <button
                        className=' flex flex-row max-sm:text-xs items-baseline w-fit gap-2 text-center justify-center cursor-pointer dark:bg-gray-900 dark:text-white dark:hover:bg-blue-500 dark:border-none hover:bg-blue-500 hover:text-white bg-white text-black border px-4 py-2 rounded-full'
                        onClick={(e) => {
                           e.preventDefault();
                           e.stopPropagation();
                           window.navigator.clipboard.writeText(
                              '+91 6370749833'
                           );
                        }}
                     >
                        <i className='fa-solid fa-phone'></i>
                        <p>Phone</p>
                     </button>
                     <button className=' flex flex-row max-sm:text-xs items-baseline w-fit gap-2 text-center justify-center cursor-pointer dark:bg-gray-900 dark:text-white dark:border-none dark:hover:bg-gray-500 bg-white text-black hover:bg-[#5a5a5a] hover:text-white border  px-4 py-2 rounded-full'>
                        <NavLink to='/projects'>
                           My Projects <i className='fa-solid fa-code'></i>
                        </NavLink>
                     </button>
                  </div>
               </div>
               <div className=' bg-slate-700 h-[1px] w-[90%] m-auto'></div>

               <div className='flex items-center flex-wrap-reverse max-sm:text-center justify-between max-sm:justify-center max-sm:gap-2 max-sm:text-sm w-full px-20 mt-9 pb-9'>
                  <p>
                     <i className='fa-regular fa-copyright'></i> @Sourav Mohanty
                     | 2024
                  </p>
                  <p>
                     <a href='https://www.linkedin.com/in/sourav-mohanty-link/'>
                        linkedin
                     </a>{' '}
                     / <a href='https://leetcode.com/u/Sourav010/'>LeetCode</a>{' '}
                     / <a href='https://github.com/Sourav0010'>Github</a>
                  </p>
                  <label className='inline-flex  items-center cursor-pointer'>
                     <input
                        type='checkbox'
                        checked={theme === 'dark'}
                        onChange={toggleTheme}
                        value=''
                        className='sr-only peer'
                     />
                     <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#F0EFEE] dark:peer-focus:ring-slate-700 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-slate-600"></div>
                     <span className='ms-3 text-sm font-medium text-gray-900 dark:text-gray-300'>
                        Dark Mode
                     </span>
                  </label>
               </div>
            </div>
         </div>
      </>
   );
}

export default App;
