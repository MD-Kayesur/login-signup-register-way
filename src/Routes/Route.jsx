import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Mainlayour from "../layouts/Mainlayour";
import Register from "../pages/Register";

 
 
  const router = createBrowserRouter([
    {
      path: "/",
      element:  <Mainlayour></Mainlayour>,
      children:[
        {
            path: "/",
            element: <Home></Home>
          },
          {
             path:'/login', 
             element: <Login></Login>
          },
          {
              path: '/signup',
              element:<Signup></Signup>
          },
          {
              path: '/register',
              element:<Register></Register>
          },
          
      ]
    },
    
  ]);

  export default router

 
