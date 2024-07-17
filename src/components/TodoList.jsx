import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { TodoProvider } from '../context/Todos'
import Todo from './todos-comp/Todo'
import TodoForm from './todos-comp/TodoForm';
function TodoList() {

  let [todos,setTodos] = useState(() => JSON.parse(localStorage.getItem('todos')) || []);

  const addTodo = (todo)=>{
    setTodos((prev)=> [...prev,todo]);
  };

  const removeTodo = (id)=>{
    setTodos((prev)=>prev.filter((item)=>item.id!==id));
  };
  const editTodo = (id,todo)=>{
    setTodos((prev)=>prev.map((item)=>item.id===id?todo:item));
  };
  const toggleComplete = (id)=>{
    setTodos((prev)=>prev.map((item)=>item.id===id?{...item,completed:!item.completed}:item));
  };

  useEffect(()=>{
    let value = JSON.parse(localStorage.getItem('todos'));
    setTodos(value);
  },[])

  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos));
  },[todos])

  return (
    <TodoProvider value={{todos,addTodo,removeTodo,editTodo,toggleComplete}}>
      <div className='w-full h-full  flex flex-col   dark:bg-slate-900'>
          <div className='bg-[#F0EFEE] dark:bg-slate-800 dark:text-white flex flex-col max-sm:p-6 max-sm:text-xs p-9 font-regular rounded-b-[6rem] max-sm:rounded-b-[2rem]'>
          <Link to={'/projects'}>
              <i className="fa-solid fa-arrow-left dark:bg-white dark:text-black bg-black text-white px-4 py-2 rounded-md ml-5 mt-4 cursor-pointer"></i>
          </Link>
          <div className=' flex flex-col items-center justify-center'>
              <h2 className=' border border-black dark:border-white max-sm:px-3 max-sm:py-1  px-6 py-3 font-medium'>Todo Manager</h2>
          </div>
          </div>
          <TodoForm/>
          <div className='w-full h-full  mt-4 gap-2 flex flex-col'>
            {todos.map((todo)=><Todo key={todo.id} todo={todo}/>)}
          </div>
      </div>
    </TodoProvider>
  )
}

export default TodoList