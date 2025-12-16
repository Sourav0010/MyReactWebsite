import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import Layout from './Layouts/Layout';
import App from './App';
import Projects from './components/Projects';
import Currencyconverter from './components/Currencyconverter';
import TodoList from './components/TodoList';
import TodosProvider from './context/todos/TodosProvider';

export const router = createBrowserRouter([
   {
      path: '/',
      element: <Layout />,
      children: [
         {
            index: true,
            element: <Navigate to={'/home'} />,
         },
         {
            path: 'home',
            children: [
               {
                  index: true,
                  element: <App />,
               },
               {
                  path: 'projects',
                  element: <Outlet />,
                  children: [
                     {
                        index: true,
                        element: <Projects />,
                     },
                     {
                        path: 'currency-converter',
                        element: <Currencyconverter />,
                     },
                     {
                        path: 'todo-list',
                        element: (
                           <TodosProvider>
                              <TodoList />
                           </TodosProvider>
                        ),
                     },
                  ],
               },
            ],
         },
      ],
   },
]);
