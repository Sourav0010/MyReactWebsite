import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layouts/Layout";
import App from "./App";
import Projects from "./components/Projects";
import Currencyconverter from "./components/Currencyconverter";
import TodoList from "./components/TodoList";

export const router = createBrowserRouter([
   {
      path: '/',
      element: <Layout />,
      children: [
         {
            path: '',
            element: <App />,
         },
         {
            path: 'projects',
            element: <Layout />,
            children: [
               {
                  path: '',
                  element: <Projects />,
               },
               {
                  path: 'currency-converter',
                  element: <Currencyconverter />,
               },
               {
                  path: 'todo-list',
                  element: <TodoList />,
               },
            ],
         },
      ],
   },
]);
