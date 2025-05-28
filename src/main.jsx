import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider,createBrowserRouter } from 'react-router'
import Home from './Components/Home.jsx'
import ErrorPage from './Components/ErrorPage.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import Projects from './Components/Projects.jsx'
import Notes from './Components/Notes.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement: <ErrorPage />, // <-- Add error handler
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/home',
        element: <Home/>
      },{
        path: '/about',
        element: <About/>
      },{
        path: '/notes',
        element: <Notes/>
      },{
        path: '/contact',
        element: <Contact/>
      },{
        path: '/projects',
        element: <Projects/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
