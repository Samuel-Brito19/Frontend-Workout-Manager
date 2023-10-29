
//import * as ReactDom from 'react-dom/client'
import Register from './pages/Register/Register';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/Login/Login';
import Workout from './pages/Workout/Workout';
import Exersices from './pages/Exersices/Exersices';
function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
    {
      path: "/workout",
      element: <Workout/>,
    },
    {
      path: "/exersices",
      element: <Exersices/>,
    },
  ]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App
