import { createBrowserRouter } from "react-router-dom";
import RlPage from "../pages/registration-login-page/RlPage";
import Register from "../pages/registration-login-page/components/register/Register";
import Login from "../pages/registration-login-page/components/login/Login";
import Home from "../pages/home/Home"

export const Router=createBrowserRouter([
    {
        path:"/register",
        element:<RlPage path="register"/>,
        children:[
            {
                index:true,
                element:<Register/>,
            }
        ]
    },
    {
        path:"/login",
        element:<RlPage path="login"/>,
        children:[
            {
                index:true,
                element:<Login/>,
            }
        ]
    },
    {
        path:"/",
        element:<Home/>
    }
])