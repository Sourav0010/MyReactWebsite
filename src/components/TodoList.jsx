import { Link } from 'react-router-dom';
import Todo from './todos-comp/Todo';
import TodoForm from './todos-comp/TodoForm';
import { useTodo } from '../context/todos/Todos';
import { useEffect, useMemo, useState } from 'react';
import Modal from './modal/Modal';

function TodoList() {
   let { todos, importTodos: setTodos } = useTodo();

   const [enabledSort, setEnableSort] = useState(false);
   const [hideCompleted, setHideCompleted] = useState(false);

   const [isNewUser, setIsNewUser] = useState(() => {
      const value = localStorage.getItem('USER_PREF');
      if (!value) return true;
      return JSON.parse(value);
   });

   const [exportTodosModalOpen, setExportTodosModalOpen] = useState(false);
   const [importTodosModalOpen, setImportTodosModalOpen] = useState(false);
   const [importTodos, setImportTodos] = useState('');
   const [error, setError] = useState('');

   useEffect(() => {
      localStorage.setItem('USER_PREF', JSON.stringify(isNewUser));
   }, [isNewUser]);

   useEffect(() => {
      const handler = (e) => {
         if (e.key === 'Escape') {
            setIsNewUser(false);
         }
      };
      document.addEventListener('keydown', handler);

      return () => document.removeEventListener('keydown', handler);
   }, [isNewUser]);

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
         <Modal isOpen={isNewUser} onClose={() => setIsNewUser(false)}>
            <div className='flex items-center justify-center flex-col gap-2'>
               <h2 className='text-red-500 text-2xl font-medium'>Desclimer</h2>
               <p className='max-w-md'>
                  We are storing all the data in the local-storage so don&apos;t
                  clear data of browser other wise data loss may happen.
               </p>
               <button
                  onClick={() => setIsNewUser(false)}
                  className='dark:bg-white dark:text-black bg-black text-white px-4 py-2 rounded-md  cursor-pointer ml-auto'
               >
                  Ok
               </button>
            </div>
         </Modal>
         <Modal
            isOpen={exportTodosModalOpen}
            onClose={() => setExportTodosModalOpen(false)}
         >
            <div className='flex items-center justify-center flex-col gap-4'>
               <button
                  onClick={() => {
                     setExportTodosModalOpen(false);
                  }}
                  className='cursor-pointer ml-auto'
               >
                  <svg
                     xmlns='http://www.w3.org/2000/svg'
                     height='24px'
                     viewBox='0 -960 960 960'
                     width='24px'
                     className='dark:fill-white fill-black'
                  >
                     <path d='m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z' />
                  </svg>
               </button>
               <textarea className='dark:bg-slate-800 w-[70vw] h-[70vh] resize-none overflow-y-auto border rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500'>
                  {JSON.stringify(sortedTodos)}
               </textarea>
            </div>
         </Modal>
         <Modal
            isOpen={importTodosModalOpen}
            onClose={() => setImportTodosModalOpen(false)}
         >
            <div className='flex items-center justify-center flex-col gap-4'>
               <button
                  onClick={() => {
                     setImportTodosModalOpen(false);
                  }}
                  className='cursor-pointer ml-auto'
               >
                  <svg
                     xmlns='http://www.w3.org/2000/svg'
                     height='24px'
                     viewBox='0 -960 960 960'
                     width='24px'
                     className='dark:fill-white fill-black'
                  >
                     <path d='m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z' />
                  </svg>
               </button>
               <textarea
                  value={importTodos}
                  onChange={(e) => {
                     setImportTodos(e.target.value);
                     setError('');
                  }}
                  placeholder='Paste your todos here to import'
                  className='dark:bg-slate-800 w-[70vw] h-[70vh] resize-none overflow-y-auto border rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
               ></textarea>
               {error && <p className='text-red-500'>{error}</p>}
               <button
                  onClick={() => {
                     setError('');
                     try {
                        const todos = JSON.parse(importTodos);
                        setTodos(todos);
                        setImportTodos('');
                        setImportTodosModalOpen(false);
                     } catch (error) {
                        setError('Error while parsing todos!');
                     }
                  }}
                  className='dark:bg-white dark:text-black bg-black text-white px-4 py-2 rounded-md  cursor-pointer ml-auto'
               >
                  Import
               </button>
            </div>
         </Modal>
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
            <div className='flex items-center justify-center gap-4 mt-4'>
               <button
                  onClick={() => setExportTodosModalOpen(true)}
                  className='dark:bg-white dark:text-black bg-black text-white px-4 py-2 rounded-md  cursor-pointer '
               >
                  Export Todos
               </button>
               <button
                  onClick={() => setImportTodosModalOpen(true)}
                  className='dark:bg-white dark:text-black bg-black text-white px-4 py-2 rounded-md  cursor-pointer '
               >
                  Import Todos
               </button>
            </div>
            <div className='w-full flex items-center justify-center p-5 gap-5'>
               <button
                  id='sort'
                  onClick={() => setEnableSort((p) => !p)}
                  className='dark:bg-white dark:text-black bg-black text-white px-4 py-2 rounded-md  cursor-pointer flex gap-2 items-center justify-center'
               >
                  <span>{`Sort By ${!enabledSort ? 'Asc' : 'Desc'}`}</span>
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

/*

[{"id":"2d08cbc8-4f68-4b93-bceb-d5897625dc43","value":"Hii","completed":false},{"id":"75b99414-4580-4bad-9bae-1761f70b5a51","value":"Hello","completed":false},{"id":"0ac3b95d-24f1-40ba-a8df-b9677a432816","value":"False","completed":false}]
*/
