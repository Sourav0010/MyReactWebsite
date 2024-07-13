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
        <div className='max-w-72 bg-[#F0EFEE] p-8 rounded-lg'>
            <h2 className='text-xl  font-medium'>Currency Converter</h2>
            <p>A currency converter web app is a utility available via a web browser enabling users to convert values between many currencies. It generates precise conversions using real-time exchange rates—usually obtained from a currency data API.</p>
            <div className='mt-4 flex items-center justify-center'>
                <Link className='bg-black text-white px-4 py-2' to={"/projects/currency-converter"}>Visit Now  <i class="fa-solid fa-circle-arrow-up"></i></Link>
            </div>
        </div>

        <div className='max-w-72 bg-[#F0EFEE] p-8 rounded-lg'>
            <h2 className='text-xl  font-medium'>Weather Application</h2>
            <p>A weather web app is a web-based application that provides users with real-time and forecast weather information.  They typically display current conditions like temperature, precipitation, wind, and humidity.</p>
            <div className='mt-4 flex items-center justify-center'>
                <Link className='bg-black text-white px-4 py-2'>Visit Now  <i class="fa-solid fa-circle-arrow-up"></i></Link>
            </div>
        </div>
        
        <div className='max-w-72 bg-[#F0EFEE] p-8 rounded-lg'>
            <h2 className='text-xl  font-medium'>Todo List</h2>
            <p>Boost your productivity with our web-based Todo Manager!  This user-friendly app lets you create, organize, and track tasks with ease.  Set deadlines, receive reminders, and achieve your goals - all from the convenience of your web browser.  Take control of your day and get things done! </p>
            <div className='mt-4 flex items-center justify-center'>
                <Link className='bg-black text-white px-4 py-2'>Visit Now  <i class="fa-solid fa-circle-arrow-up"></i></Link>
            </div>
        </div>
        
        <div className='max-w-72 bg-[#F0EFEE] p-8 rounded-lg'>
            <h2 className='text-xl  font-medium'>Currency Converter</h2>
            <p>A currency converter web app is a utility available via a web browser enabling users to convert values between many currencies. It generates precise conversions using real-time exchange rates—usually obtained from a currency data API.</p>
            <div className='mt-4 flex items-center justify-center'>
                <Link className='bg-black text-white px-4 py-2'>Visit Now  <i class="fa-solid fa-circle-arrow-up"></i></Link>
            </div>
        </div>
        
        <div className='max-w-72 bg-[#F0EFEE] p-8 rounded-lg'>
            <h2 className='text-xl  font-medium'>Currency Converter</h2>
            <p>A currency converter web app is a utility available via a web browser enabling users to convert values between many currencies. It generates precise conversions using real-time exchange rates—usually obtained from a currency data API.</p>
            <div className='mt-4 flex items-center justify-center'>
                <Link className='bg-black text-white px-4 py-2'>Visit Now  <i class="fa-solid fa-circle-arrow-up"></i></Link>
            </div>
        </div>
        
        <div className='max-w-72 bg-[#F0EFEE] p-8 rounded-lg'>
            <h2 className='text-xl  font-medium'>Currency Converter</h2>
            <p>A currency converter web app is a utility available via a web browser enabling users to convert values between many currencies. It generates precise conversions using real-time exchange rates—usually obtained from a currency data API.</p>
            <div className='mt-4 flex items-center justify-center'>
                <Link className='bg-black text-white px-4 py-2'>Visit Now  <i class="fa-solid fa-circle-arrow-up"></i></Link>
            </div>
        </div>
        
        <div className='max-w-72 bg-[#F0EFEE] p-8 rounded-lg'>
            <h2 className='text-xl  font-medium'>Currency Converter</h2>
            <p>A currency converter web app is a utility available via a web browser enabling users to convert values between many currencies. It generates precise conversions using real-time exchange rates—usually obtained from a currency data API.</p>
            <div className='mt-4 flex items-center justify-center'>
                <Link className='bg-black text-white px-4 py-2'>Visit Now  <i class="fa-solid fa-circle-arrow-up"></i></Link>
            </div>
        </div>
        
        <div className='max-w-72 bg-[#F0EFEE] p-8 rounded-lg'>
            <h2 className='text-xl  font-medium'>Currency Converter</h2>
            <p>A currency converter web app is a utility available via a web browser enabling users to convert values between many currencies. It generates precise conversions using real-time exchange rates—usually obtained from a currency data API.</p>
            <div className='mt-4 flex items-center justify-center'>
                <Link className='bg-black text-white px-4 py-2'>Visit Now  <i class="fa-solid fa-circle-arrow-up"></i></Link>
            </div>
        </div>
        
    </div>
       
    </>
  )
}

export default Projects