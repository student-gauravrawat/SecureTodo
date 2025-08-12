import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from "./store/store.js"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {AllTodo, CompletedTodo, UnCompletedTodo, Login} from "../src/components/index.js"
import Home from './pages/Home.jsx'



const router = createBrowserRouter([
   {
    path:'/',
    element:<App/>,
    children:[
           {
               path:'/',
               element:<Home/>,
               children:[
                           {
                               path:'/completetodo',
                               element:<CompletedTodo/>
                          },
                  
                           {
                                path: '/uncompletetodo',
                                element:<UnCompletedTodo/>
                           },
                    ]    
           },
       ]
   },
   {
    path:'/login',
    element:<Login/>
   }
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>,
)
