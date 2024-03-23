import { useState } from 'react'
import {} from 'react-router-dom'

import { RouterProvider ,createBrowserRouter } from 'react-router-dom'
import Login from './components/Auth/Login'
import './App.css'
import Home from './components/HomePage/Home'
import SignUp from './components/Auth/SignUp'

function App() {


  const router = createBrowserRouter([
{
  path:'/login',
  element: <Login/>
},
{
  path:'/SignUp',
  element: <SignUp />
},
{
  path:'/Home',
  element:<Home/>
}
]);
  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
