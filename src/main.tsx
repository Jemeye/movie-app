import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/login.tsx'
import Register from './pages/register.tsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div className='not-found'>404 Not Found</div>
  },
  {
    path: "login",
    element: <Login />,
    errorElement: <div className='not-found'>404 Not Found</div>
  },
  {
    path: "register",
    element: <Register />,
    errorElement: <div className='not-found'>404 Not Found</div>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
