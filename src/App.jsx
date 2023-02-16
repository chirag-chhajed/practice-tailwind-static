import React from 'react'
import { createRoutesFromElements,Route,createBrowserRouter,RouterProvider  } from 'react-router-dom'
import { HomePage } from './pages'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' >
      <Route index element={<HomePage/>}/>

    </Route>
  )
)

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
