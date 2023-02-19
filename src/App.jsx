import React from 'react'
import { createRoutesFromElements,Route,createBrowserRouter,RouterProvider  } from 'react-router-dom'
import { HomePage,About,ContactPage,TourPage } from './pages'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' >
      <Route index element={<HomePage/>}/>
      <Route path='about' element={<About/>} />
      <Route path='tour' element={<TourPage/>} />
      <Route path='contact' element={<ContactPage/>} />

    </Route>
  )
)

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
