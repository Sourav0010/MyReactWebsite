import { useLocalStorageTodos } from '../../hooks/useLocalStorageTodos';
import { Context } from './Todos';

export default function TodosProvider({ children }) {
   const { addTodo, editTodo, removeTodo, todos, toggleTodo } =
      useLocalStorageTodos('TODOS', []);
   return (
      <Context.Provider
         value={{ addTodo, editTodo, removeTodo, toggleTodo, todos }}
      >
         {children}
      </Context.Provider>
   );
}
