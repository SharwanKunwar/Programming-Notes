import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider,createBrowserRouter } from 'react-router'

import Home from './Components/Home.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children: [
      {
        path: '',
        element: <Home/>
      },
      {
        path: 'home',
        element: <Home/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
