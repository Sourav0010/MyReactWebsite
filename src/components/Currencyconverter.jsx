import Input from './currency-converter-comp/Input';
import getFetchedCurrency from './currency-converter-comp/FetchCurrency.js';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Currencyconverter() {
   let [amount, setAmount] = useState(0);
   let [convertedAmount, setConvertedAmount] = useState(0);
   let [fromCurrency, setFromCurrency] = useState('INR');
   let [toCurrency, setToCurrency] = useState('USD');
   let fetchedCurrency = getFetchedCurrency(toCurrency);
   let currencyOptions = Object.keys(fetchedCurrency);

   function swap() {
      setFromCurrency(toCurrency);
      setToCurrency(fromCurrency);
      setAmount(convertedAmount);
      setConvertedAmount(amount);
   }

   function convert() {
      let conversionRate = fetchedCurrency[fromCurrency];
      setConvertedAmount(amount * conversionRate);
   }

   return (
      <div className='dark:bg-slate-900 min-h-svh dark:text-white'>
         <div className='bg-[#F0EFEE] dark:bg-slate-800 dark:text-white flex flex-col max-sm:text-xs p-9 max-sm:p-5 font-regular rounded-b-[6rem] max-sm:rounded-b-[2rem]'>
            <Link to={'..'}>
               <i className='fa-solid fa-arrow-left dark:bg-white dark:text-black bg-black text-white px-4 py-2 rounded-md ml-5 mt-4 max-sm:mt-2 max-sm:ml-2 cursor-pointer'></i>
            </Link>
            <div className=' flex flex-col items-center justify-center'>
               <h2 className=' border border-black dark:border-white max-sm:px-3 max-sm:py-1  px-6 py-3 font-medium'>
                  Currency Converter
               </h2>
            </div>
         </div>

         <div className='flex flex-col px-48 max-md:px-12 max-sm:px-4 mt-8 items-center justify-center'>
            <div className=' px-20 py-10 max-md:px-5 max-md:py-6 max-sm:px-4 max-sm:py-3 w-full flex items-center justify-center flex-col dark:bg-slate-800 bg-[#F0EFEE] rounded-lg mt-8'>
               <Input
                  type='From'
                  currencyOptions={currencyOptions}
                  amount={amount}
                  setAmount={(value) => setAmount(value)}
                  currency={fromCurrency}
                  setCurrency={(value) => setFromCurrency(value)}
               />
               <button
                  className='mt-4 mb-4 dark:bg-slate-900 bg-black max-sm:px-3 max-sm:py-2 max-sm:text-xs text-white px-6 py-3 rounded-md max-md:text-base max-md:px-4 max-md:py-8'
                  onClick={swap}
               >
                  Swap <i className='fa-solid fa-arrow-right-arrow-left'></i>
               </button>
               <Input
                  type='To'
                  currencyOptions={currencyOptions}
                  amount={convertedAmount}
                  setAmount={(value) => setConvertedAmount(value)}
                  currency={toCurrency}
                  setCurrency={(value) => setToCurrency(value)}
               />
               <button
                  className='mt-4 mb-4 bg-black dark:bg-slate-900 text-white px-6 py-3 rounded-md max-sm:px-3 max-sm:py-2 max-sm:text-xs max-md:text-base max-md:px-4 max-md:py-8'
                  onClick={convert}
               >
                  Convert <i className='fa-solid fa-shuffle'></i>
               </button>
            </div>

            <div className='flex items-center flex-wrap-reverse max-sm:text-center justify-between max-sm:justify-center max-sm:gap-2 max-sm:text-sm w-full py-4 mt-9 dark:bg-slate-900'>
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
      </div>
   );
}

export default Currencyconverter;
