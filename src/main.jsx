import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,  RouterProvider } from 'react-router-dom'
import Projects from './components/Projects.jsx'
import Layout from './Layouts/Layout.jsx'
import Currencyconverter from './components/Currencyconverter.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[
      {
        path: '',
        element: <App/>
      },{
        path: 'projects',
        element: <Layout/>,
        children:[
          {
            path: '',
            element: <Projects/>
          },
          {
            path: 'currency-converter',
            element: <Currencyconverter/>
          }
        ]
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
