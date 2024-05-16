import React from 'react'
import ReactDOM from 'react-dom/client'
import "./main.css"
import router from "./routes/routesPath";
import { RouterProvider } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)



