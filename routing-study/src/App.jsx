import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './Components/Home'
import Dashboard from './Components/Dashboard'
import About from './Components/About'

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<Home />
    },

    {
      path:"/dashboard",
      element:<Dashboard />
    },

    {
      path:"/about",
      element:<About />
    }


  ]
)

function App() {


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
 
export default App
