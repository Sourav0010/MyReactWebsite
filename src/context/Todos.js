import { createContext, useContext } from 'react';

export const TodoContext = createContext({
   todos: [],
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
   return useContext(TodoContext);
};
