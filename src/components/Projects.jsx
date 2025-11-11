import { Link } from 'react-router-dom';
function Projects() {
   return (
      <>
         <div className='w-full max-sm:h-full min-h-svh bg-white dark:bg-slate-900'>
            <div className='bg-[#F0EFEE] dark:bg-slate-800 dark:text-white flex flex-col max-sm:p-6 max-sm:text-xs p-9 font-regular rounded-b-[6rem] max-sm:rounded-b-[2rem]'>
               <Link to={'/'}>
                  <i className='fa-solid fa-arrow-left dark:bg-white dark:text-black bg-black text-white px-4 py-2 rounded-md ml-5 mt-4 cursor-pointer'></i>
               </Link>
               <div className=' flex flex-col items-center justify-center'>
                  <h2 className=' border border-black dark:border-white max-sm:px-3 max-sm:py-1  px-6 py-3 font-medium'>
                     {' '}
                     My Projects
                  </h2>
               </div>
            </div>

            <div className='flex flex-row flex-wrap justify-between gap-4 px-12 mt-20'>
               <div className='max-sm:w-full w-fit bg-[#F0EFEE] dark:bg-slate-800 dark:text-white flex flex-col p-10 max-sm:p-10 gap-4 rounded-lg '>
                  <h2 className='text-xl max-sm:text-base  font-medium'>
                     Currency Converter
                  </h2>
                  <p className='max-sm:text-xs text-base w-60 max-sm:w-full'>
                     A currency converter web app is a utility available via a
                     web browser enabling users to convert values between many
                     currencies.{' '}
                  </p>
                  <div className='mt-4 flex items-center justify-center'>
                     <Link
                        className='bg-black dark:bg-slate-900 text-white px-4 py-2 max-sm:px-3 max-sm:py-2 max-sm:text-xs max-sm:rounded-md'
                        to={'/projects/currency-converter'}
                     >
                        Visit Now{' '}
                        <i className='fa-solid fa-circle-arrow-up'></i>
                     </Link>
                  </div>
               </div>

               <div className='max-sm:w-full w-fit bg-[#F0EFEE] dark:bg-slate-800 dark:text-white flex flex-col p-10 max-sm:p-10 gap-4 rounded-lg '>
                  <h2 className='text-xl max-sm:text-base  font-medium'>
                     Web Logs
                  </h2>
                  <p className='max-sm:text-xs text-base w-60 max-sm:w-full'>
                     This project aimed to showcase the blogs on newly exposed
                     technology though blogs and also user can able to create
                     profile .
                  </p>
                  <div className='mt-4 flex items-center justify-center'>
                     <Link
                        to='https://web-logs-blog.netlify.app/'
                        className='bg-black dark:bg-slate-900 text-white px-4 py-2 max-sm:px-3 max-sm:py-2 max-sm:text-xs max-sm:rounded-md'
                     >
                        Visit Now{' '}
                        <i className='fa-solid fa-circle-arrow-up'></i>
                     </Link>
                  </div>
               </div>

               <div className='max-sm:w-full w-fit bg-[#F0EFEE] dark:bg-slate-800 dark:text-white flex flex-col p-10 max-sm:p-10 gap-4 rounded-lg'>
                  <h2 className='text-xl max-sm:text-base  font-medium'>
                     Todo List
                  </h2>
                  <p className='max-sm:text-xs text-base w-60 max-sm:w-full'>
                     Boost your productivity with our web-based Todo Manager!
                     This user-friendly app lets you create, organize, and track
                     tasks with ease.
                  </p>
                  <div className='mt-4 flex items-center justify-center'>
                     <Link
                        to={'/projects/todo-list'}
                        className='bg-black dark:bg-slate-900 text-white px-4 py-2 max-sm:px-3 max-sm:py-2 max-sm:text-xs max-sm:rounded-md'
                     >
                        Visit Now{' '}
                        <i className='fa-solid fa-circle-arrow-up'></i>
                     </Link>
                  </div>
               </div>
            </div>
            <div className='flex items-center  dark:text-white dark:bg-slate-900 flex-wrap-reverse max-sm:text-center justify-between max-sm:justify-center max-sm:gap-2 max-sm:text-sm w-full px-20 mt-20 pb-9'>
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
            </div>
         </div>
      </>
   );
}

export default Projects;
