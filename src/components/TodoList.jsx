import { Link } from 'react-router-dom';
import Todo from './todos-comp/Todo';
import TodoForm from './todos-comp/TodoForm';
import { useTodo } from '../context/todos/Todos';
import { useMemo, useState } from 'react';

function TodoList() {
   let { todos } = useTodo();

   const [enabledSort, setEnableSort] = useState(false);
   const [hideCompleted, setHideCompleted] = useState(false);

   const sortedTodos = useMemo(() => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (hideCompleted) todos = todos.filter((todo) => !todo.completed);
      if (enabledSort) {
         return [...todos].reverse();
      } else {
         return [...todos];
      }
   }, [todos, enabledSort, hideCompleted]);

   return (
      <>
         <div className='w-full h-screen  flex flex-col   dark:bg-slate-900'>
            <div className='bg-[#F0EFEE] dark:bg-slate-800 dark:text-white flex flex-col max-sm:p-6 max-sm:text-xs p-9 font-regular rounded-b-[6rem] max-sm:rounded-b-[2rem]'>
               <Link to={'..'}>
                  <i className='fa-solid fa-arrow-left dark:bg-white dark:text-black bg-black text-white px-4 py-2 rounded-md ml-5 mt-4 cursor-pointer'></i>
               </Link>
               <div className=' flex flex-col items-center justify-center'>
                  <h2 className=' border border-black dark:border-white max-sm:px-3 max-sm:py-1  px-6 py-3 font-medium'>
                     Todo Manager
                  </h2>
               </div>
            </div>
            <div className='flex flex-row items-center justify-center gap-3 pt-4'>
               <TodoForm />
            </div>
            <div className='w-full flex items-center justify-center p-5 gap-5'>
               <label
                  className='text-sm font-medium text-gray-900 dark:text-gray-300'
                  htmlFor='sort'
               >{`Sort By ${enabledSort ? 'Asc' : 'Desc'}`}</label>
               <button
                  id='sort'
                  onClick={() => setEnableSort((p) => !p)}
                  className='dark:bg-white dark:text-black bg-black text-white px-4 py-2 rounded-md  cursor-pointer'
               >
                  {enabledSort ? (
                     <i className='fa-solid fa-sort-up' />
                  ) : (
                     <i className='fa-solid fa-sort-down' />
                  )}
               </button>
               <label className='inline-flex  items-center cursor-pointer'>
                  <span className='mr-3 text-sm font-medium text-gray-900 dark:text-gray-300'>
                     {hideCompleted ? 'Show' : 'Hide'} Completed
                  </span>
                  <input
                     checked={hideCompleted}
                     onChange={(e) => setHideCompleted(e.target.checked)}
                     type='checkbox'
                     className='sr-only peer'
                  />
                  <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#F0EFEE] dark:peer-focus:ring-slate-700 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-slate-600"></div>
               </label>
            </div>
            <div className='w-full overflow-y-scroll h-full   dark:bg-slate-900  mt-4 gap-2 flex flex-col'>
               {sortedTodos.map((todo) => (
                  <Todo key={todo.id} todo={todo} />
               ))}
            </div>
         </div>
      </>
   );
}

export default TodoList;
