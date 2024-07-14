import React from 'react'
import Input from './currency-converter-comp/Input'
import getFetchedCurrency  from './currency-converter-comp/FetchCurrency.js'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Currencyconverter() {
  let [amount,setAmount] = useState(0);;
  let [convertedAmount,setConvertedAmount] = useState(0);
  let [fromCurrency,setFromCurrency] = useState('INR');
  let [toCurrency,setToCurrency] = useState('USD');
  let fetchedCurrency = getFetchedCurrency(toCurrency);
  let currencyOptions = Object.keys(fetchedCurrency);

  function swap(){
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }

  function convert(){
      let conversionRate = fetchedCurrency[fromCurrency];
      setConvertedAmount(amount * conversionRate);
      console.log(fetchedCurrency);
  }
  
  return (
    <>
    <Link to={'/projects'}>
            <i class="fa-solid fa-arrow-left bg-black text-white px-4 py-2 rounded-md ml-5 mt-4 cursor-pointer"></i>
    </Link>
    <div className='flex flex-col pl-40 pr-40 mt-8 items-center justify-center'>
      <h1 className='text-3xl font-medium'>Currency Converter</h1>

      <div className='px-44 py-16 w-full flex items-center justify-center flex-col bg-[#F0EFEE] rounded-lg mt-8'>

        <Input
        type = 'From' 
        currencyOptions={currencyOptions} 
        amount={amount} 
        setAmount={(amount)=>setAmount(amount)}
        currency={fromCurrency}
        setCurrency={(fromCurrency)=>setFromCurrency(fromCurrency)}
        />
        <button className='mt-4 mb-4 bg-black text-white px-6 py-3 rounded-md' onClick={swap}>Swap <i className="fa-solid fa-arrow-right-arrow-left"></i></button>
        <Input 
        type = 'To'
        currencyOptions={currencyOptions} 
        amount={convertedAmount} 
        setAmount={(convertedAmount) => setConvertedAmount(convertedAmount)}
        currency={toCurrency}
        setCurrency={(toCurrency)=>setToCurrency(toCurrency)}
        />
        <button className='mt-4 mb-4 bg-black text-white px-6 py-3 rounded-md' onClick={convert}>Convert <i className="fa-solid fa-shuffle"></i></button>
      </div>

      <div className="flex items-center flex-wrap-reverse max-sm:text-center justify-between max-sm:justify-center max-sm:gap-2 max-sm:text-sm w-full px-20 mt-9 mb-9">
        <p><i className="fa-regular fa-copyright"></i> @Sourav Mohanty | 2024</p>
        <p><a href="https://www.linkedin.com/in/sourav-mohanty-link/">linkedin</a> / <a href="https://leetcode.com/u/Sourav010/">LeetCode</a> / <a href="https://github.com/Sourav0010">Github</a></p>
      </div>
    </div>
    </>
  )
}

export default Currencyconverter