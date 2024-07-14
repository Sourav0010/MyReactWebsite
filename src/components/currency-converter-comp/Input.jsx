import React from 'react'

function Input({
    amount,
    setAmount,
    currencyOptions,
    type,
    currency,
    setCurrency
}) {
  return (
    
    <>
        <div className='flex items-end w-full'>
          <div className='flex flex-col w-full'>
          <label className='text-sm ml-4' htmlFor="to">{`Amount ${type}`}</label>
          <input id='to' value={amount} onChange={(e)=>{
            setAmount(Number(e.target.value))
          }}  type="number" className='border w-[15rem] px-3 py-3  rounded-full' />
          </div>
          <select className='w-20 h-11 rounded-lg' value={currency} onChange={(curr) =>{
            setCurrency(curr.target.value)
          }}>
            {
            currencyOptions.map(curr => 
                (<option key={curr} value={curr}>{curr}</option>))
            }
          </select>
        </div>
    </>
  )
}

export default Input