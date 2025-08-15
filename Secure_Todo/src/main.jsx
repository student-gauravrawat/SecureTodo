import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from "./store/store.js"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CompletedTodo, UnCompletedTodo, AllTodo, Home} from "../src/components/index.js"
import ProjectPage from './pages/ProjectPage.jsx'


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
            path:'/alltodo',
            element:<AllTodo/>
          },
          {
            path:'/completedtodo',
            element:<CompletedTodo/>
          },
          {
            path:'/uncompletedtodo',
            element:<UnCompletedTodo/>
          }
        ]
      }
    ]
  }
])



createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)
