import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './Component/Root/Home'
import Authprovider from './Component/Authcontex/Authprovider'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Component/Root/Home'
import Shopcontainer from './Shop/Shopcontainer'
import Revieworder from './Shop/Orders/Revieworder'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <div>Error</div>,
    children: [
      {
        path: '/',
        element: <Shopcontainer />
      },
      {
        path: '/orders',
        element: <Shopcontainer />
      },

      {
        path: '/orders-review',
        element: <Revieworder />
      },
      {
        path: '/manage-inventory',
        element: <div className='flex justify-center items-center text-3xl font-bold h-[100vh]'> 404 | Nothing to see </div>
      },
      {
        path: '/login',
        element: <div className='flex justify-center items-center text-3xl font-bold h-[100vh]'> login </div>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(

  <Authprovider>
    <RouterProvider router={router}>
      <Root />
    </RouterProvider>
  </Authprovider>

)
