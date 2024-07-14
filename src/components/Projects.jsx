import React from 'react'
import { Link } from 'react-router-dom'
function Projects() {
  return (
    <>
    <div className='bg-[#F0EFEE] flex flex-col p-9 font-regular rounded-b-[6rem] max-sm:rounded-b-[2rem]'>
         <Link to={'/'}>
            <i class="fa-solid fa-arrow-left bg-black text-white px-4 py-2 rounded-md ml-5 mt-4 cursor-pointer"></i>
        </Link>
        <div className=' flex flex-col items-center justify-center'>
            <h2 className=' border border-black px-6 py-3 font-medium'> My Projects</h2>
        </div>
    </div>

    <div className='flex flex-row flex-wrap justify-between gap-4 px-32 mt-20'>
        
        <div className='max-w-72 bg-[#F0EFEE] p-8  flex flex-col gap-4 rounded-lg'>
            <h2 className='text-xl  font-medium'>Currency Converter</h2>
            <p>A currency converter web app is a utility available via a web browser enabling users to convert values between many currencies. </p>
            <div className='mt-4 flex items-center justify-center'>
                <Link className='bg-black text-white px-4 py-2' to={"/projects/currency-converter"}>Visit Now  <i class="fa-solid fa-circle-arrow-up"></i></Link>
            </div>
        </div>

        <div className='max-w-72 bg-[#F0EFEE] flex flex-col gap-4 p-8 rounded-lg'>
            <h2 className='text-xl  font-medium'>Weather Application</h2>
            <p>A weather web app is a web-based application that provides users with real-time and forecast weather information.</p>
            <div className='mt-4 flex items-center justify-center'>
                <Link className='bg-black text-white px-4 py-2'>Building <i class="fa-solid fa-industry"></i></Link>
            </div>
        </div>
        
        <div className='max-w-72 bg-[#F0EFEE] p-8 rounded-lg'>
            <h2 className='text-xl  font-medium'>Todo List</h2>
            <p>Boost your productivity with our web-based Todo Manager!  This user-friendly app lets you create, organize, and track tasks with ease.</p>
            <div className='mt-4 flex items-center justify-center'>
                <Link className='bg-black text-white px-4 py-2'>Building <i class="fa-solid fa-industry"></i></Link>
            </div>
        </div>
        
    </div>
    <div className="flex items-center flex-wrap-reverse max-sm:text-center justify-between max-sm:justify-center max-sm:gap-2 max-sm:text-sm w-full px-20 mt-20 mb-9">
        <p><i className="fa-regular fa-copyright"></i> @Sourav Mohanty | 2024</p>
        <p><a href="https://www.linkedin.com/in/sourav-mohanty-link/">linkedin</a> / <a href="https://leetcode.com/u/Sourav010/">LeetCode</a> / <a href="https://github.com/Sourav0010">Github</a></p>
      </div>
       
    </>
  )
}

export default Projects