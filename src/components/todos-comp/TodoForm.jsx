import { useTodo } from '../../context/todos/Todos';

function TodoForm() {
   let { addTodo } = useTodo();

   function add(e) {
      e.preventDefault();
      if (!e.target[0].value.trim()) return;
      addTodo(e.target[0].value);
      e.target[0].value = '';
   }

   return (
      <div>
         <form onSubmit={add}>
            <div className='flex flex-row items-center w-full gap-4 justify-center'>
               <input
                  type='text'
                  className='dark:text-white dark:bg-slate-700 dark:border-slate-700 todo-val border  w-[20rem]  max-sm:w-[15rem] px-2 py-2 dark:outline-none  rounded-md'
               />
               <button className='dark:bg-white dark:text-black bg-black text-white px-4 py-2 rounded-md  cursor-pointer'>
                  Add
               </button>
            </div>
         </form>
      </div>
   );
}

export default TodoForm;
