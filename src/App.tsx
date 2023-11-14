// import * as ReactDom from 'react-dom/client'
import Register from './pages/Register/Register'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login/Login'
import Workouts from './pages/Workouts/Workouts'
import Exercises from './pages/Exercises/Exercises'
import WorkoutEdit from './pages/Edits/WorkoutEdit'

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
    },
    {
      path: '/workout/edit/:id',
      element: <WorkoutEdit />
    }
  ])

  return <RouterProvider router={router} />
}

export default App
