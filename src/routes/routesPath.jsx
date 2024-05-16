import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import Navbaroutlet from "../pages/Navbaroutlet";
import About from "../pages/About";
import Dashboard,{loader as dashboardLoader}from "../pages/Dashboard"
import Newproject from "../pages/New"


 const router = createBrowserRouter([
    {
        path: "/",
        element: <Navbaroutlet />,
        children: [
            {
                index:true,
                element: <Home />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path:"dashboard",
                element: <Dashboard/>,
                loader: dashboardLoader,
            },
            {
                path:"dashboard/new",
                element:<Newproject/>
            }
        ]
    }
])

export default router;