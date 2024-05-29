import React from "react"
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Calendar from './pages/Calendar'
import Root from "./pages/Root"

const routes = createBrowserRouter([{
  path: '/', element: <Root/>, children: [{
    index: true, element: <Calendar/>
  }]
}])

const App = () =>  {
  return <RouterProvider router={routes}/>
}

export default App
