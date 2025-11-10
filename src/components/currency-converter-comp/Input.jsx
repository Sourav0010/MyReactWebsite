function Input({
    amount,
    setAmount,
    currencyOptions,
    type,
    currency,
    setCurrency
}) {
  return (
    
    <div className='dark:bg-slate-800 w-full h-full'>
        <div className='flex items-end w-full'>
          <div className='flex flex-col w-full'>
              <label className='text-sm ml-4' htmlFor="to">{`Amount ${type}`}</label>
              <input  id='to' value={amount} onChange={(e)=>{
                setAmount(Number(e.target.value))
              }}  type="number" className='border dark:bg-slate-900 w-[15rem] max-sm:w-[8rem] max-md:w-[12rem] px-3 py-3  rounded-full' />
          </div>
          <select className='w-20 h-11 rounded-lg px-2 dark:bg-slate-900' value={currency} onChange={(curr) =>{
            setCurrency(curr.target.value)
          }}>
            {
            currencyOptions.map(curr => 
                (<option key={curr} value={curr}>{curr}</option>))
            }
          </select>
        </div>
    </div>
  )
}

export default Input