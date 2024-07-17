import React from 'react'
import { useTodo } from '../../context/Todos'
function TodoForm() {
   let {addTodo} = useTodo();

   function add(e){
    e.preventDefault();
    if(!e.target[0].value.trim()) return;
    addTodo({
      id:Date.now(),
      value:e.target[0].value,
      completed:false
    })
    e.target[0].value='';
  }

  return (
    <div className='w-full '>
          <form onSubmit={add}>
            <div className='flex flex-row items-center w-full gap-4 justify-center mt-14'>
              <input type="text" className='dark:text-white dark:bg-slate-700 dark:border-slate-700 todo-val border  w-[20rem]  px-2 py-2 dark:outline-none  rounded-md'/>
              <button className='dark:bg-white dark:text-black bg-black text-white px-4 py-2 rounded-md  cursor-pointer'>Add</button>
            </div>
          </form>
      </div>
  )
}

export default TodoForm