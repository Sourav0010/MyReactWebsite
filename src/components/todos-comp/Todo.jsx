import React from 'react'
import {useTodo} from '../../context/Todos'

function Todo({todo}) {
  let [editMode,setEditMode] = React.useState(false);
  let [todoMsg,setTodoMsg] = React.useState(todo.value);
  const {removeTodo,editTodo,toggleComplete} = useTodo();
  let [completed,setCompleted] = React.useState(todo.completed);
  
  function remove(){
    removeTodo(todo.id);
  }

  function edit(){
    setEditMode((prev)=>!prev);
    editTodo(todo.id,{...todo,value:todoMsg});
    
  }

  function toggle(){
    setCompleted((prev)=>!prev);
    toggleComplete(todo.id);
  }
 
  return (
    <div className='w-full max-sm:px-20 flex dark:text-white justify-center'>
            <div className={`items-center justify-center gap-4 ${!editMode?"border-blue-300":"border-red-600"} ${completed?"border-green-400":"border-blue-300"} border p-2 rounded-md w-fit flex flex-row`}>

              <input id="default-checkbox" type="checkbox" checked={completed} onChange={toggle} className="w-4 h-4 rounded-md text-slate-700 bg-gray-100 border-gray-300 rounded focus:ring-[#F0EFEE] dark:focus:ring-slate-800 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>

              <input type="text" 
              className={`dark:bg-slate-900 ${completed?"line-through text-gray-400":""} bg-white focus:outline-none w-auto  p-2 max-sm:p-1  rounded-md ${editMode?'border border-red-600':'border-none'}`} 
              value={todoMsg} disabled={!editMode} onChange={(e)=>setTodoMsg(e.target.value)}/>

              
              {
                completed ? 
                <button className={`dark:bg-slate-900 dark:hover:border-green-400 bg-white dark:hover:bg-green-400 text-black border  px-4 py-2 rounded-md hover:bg-green-400 hover:text-white text-green-400 cursor-pointer`}>
                   <i className={`fa-solid fa-check`}></i>
                </button> 
                
                : 

                <button className={`dark:bg-slate-900 dark:hover:bg-blue-500 dark:hover:border-blue-500 dark:hover:text-white bg-white  border hover:bg-blue-500 text-blue-500 hover:text-white px-4 py-2 rounded-md  cursor-pointer`} onClick={edit} disabled={completed}>
                 {editMode?<i className="fa-solid fa-floppy-disk"></i>:<i className="fa-solid fa-pen"></i>}
                </button>
              }

              <button className='dark:bg-slate-900 dark:hover:bg-red-600 dark:hover:border-red-600 dark:hover:text-white bg-white text-black border hover:bg-red-600 hover:text-white px-4 py-2 rounded-md  cursor-pointer text-red-600' onClick={remove}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
    </div>
  )
}

export default Todo