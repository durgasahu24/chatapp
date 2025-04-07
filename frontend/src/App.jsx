import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
import Login from "./components/Login.jsx";
import SignUp from "./components/SignUp.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import io from "socket.io-client";
import { setSocket } from "./redux/socketSlice.js";
import { setOnlineUsers } from "./redux/userSlice.js";

// Define routes
const router = createBrowserRouter([
  {
    path: "/",
    element: (
        <HomePage />
    ),
  },
  {
    path: "/register",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);



function App() {
  const { authUser } = useSelector((store) => store.user);
  const { socket } = useSelector((store) => store.socket);
  const dispatch = useDispatch();


  useEffect(() => {
    console.log("authUser : ", authUser);

    if (authUser) {
      const socketio = io(`http://localhost:8000`, {
        query: {
          userId: authUser._id,
        },
      });
      dispatch(setSocket(socketio));

      socketio?.on("getOnlineUsers", (onlineUsers) => {
        dispatch(setOnlineUsers(onlineUsers));
      });

      return () => socketio.close();
    } else {
      if (socket) {
        socket.close();
        dispatch(setSocket(null));
      }
    }
  }, [authUser]);

  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

