import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './components/HomePage.jsx'
import Login from './components/Login.jsx'
import SignUp from './components/SignUp.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/register",
    element: <SignUp />
  },
  {
    path: "/login",
    element: <Login />
  }
])


function App() {



  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
