// import * as ReactDom from 'react-dom/client'
import Register from './pages/Register/Register'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login/Login'
import Workouts from './pages/Workout/Workout'
import Exercises from './pages/Exercises/Exercises'

function App () {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: '/workouts',
      element: <Workouts />
    },
    {
      path: '/workouts/:workoutId/exercises',
      element: <Exercises />
    }
  ])

  return <RouterProvider router={router} />
}

export default App
