import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './layouts/RootLayout.jsx';
import Home from './components/Home/Home.jsx';
import AuthProvider from './contexts/AuthProvider.jsx';
import Register from './components/Register/Register.jsx';
import AllHabits from './AllHabits/AllHabits.jsx';
import Login from './Login/Login.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/allHabits',
        Component: AllHabits
      }, 
      {
        path: '/register',
        Component: Register
      }, 
      {
        path: '/login',
        Component: Login
      }, 
      // {
      //   path: 'myProducts',
      //   element: <PrivateRoute><MyProducts></MyProducts></PrivateRoute>
      // }, 
      // {
      //   path: 'myBids',
      //   element: <PrivateRoute><MyBids></MyBids></PrivateRoute>
      // },
      // {
      //   path: 'productDetails/:id',
      //   loader: ({params}) => fetch(`http://localhost:3000/products/${params.id}`),
      //   element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>
      // }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
