import { useEffect, useReducer } from 'react';

export const TODO_ACTIONS = {
   ADD_TODO: 'ADD_TODO',
   EDIT_TODO: 'EDIT_TODO',
   REMOVE_TODO: 'REMOVE_TODO',
   TOGGLE_TODO: 'TOGGLE_TODO',
};

function reducer(state, { type, payload }) {
   switch (type) {
      case TODO_ACTIONS.ADD_TODO:
         return [
            ...state,
            { id: crypto.randomUUID(), value: payload.value, completed: false },
         ];
      case TODO_ACTIONS.REMOVE_TODO:
         return state.filter((todo) => todo.id !== payload.id);
      case TODO_ACTIONS.EDIT_TODO:
         return state.map((todo) => {
            if (todo.id === payload.id) {
               return {
                  ...payload.todo,
               };
            } else {
               return todo;
            }
         });
      case TODO_ACTIONS.TOGGLE_TODO:
         return state.map((todo) => {
            if (todo.id === payload.id) {
               return {
                  ...todo,
                  completed: !todo.completed,
               };
            } else {
               return todo;
            }
         });
   }
}

export function useLocalStorageTodos(key, initialValue) {
   const [state, dispatch] = useReducer(
      reducer,
      initialValue,
      (initialValue) => {
         const value = localStorage.getItem(key);
         if (!value) return initialValue;
         return JSON.parse(value);
      }
   );
   function addTodo(value) {
      dispatch({ type: TODO_ACTIONS.ADD_TODO, payload: { value } });
   }
   function removeTodo(id) {
      dispatch({ type: TODO_ACTIONS.REMOVE_TODO, payload: { id } });
   }
   function editTodo(id, todo) {
      dispatch({ type: TODO_ACTIONS.EDIT_TODO, payload: { id, todo } });
   }
   function toggleTodo(id) {
      dispatch({ type: TODO_ACTIONS.TOGGLE_TODO, payload: { id } });
   }
   useEffect(() => {
      localStorage.setItem(key, JSON.stringify(state));
   }, [state, key]);

   return {
      todos: state,
      addTodo,
      removeTodo,
      editTodo,
      toggleTodo,
   };
}
