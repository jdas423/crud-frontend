import React from 'react'
import ReactDOM from 'react-dom/client'
import "./main.css"
import {Router} from "./routes/routes";
import { RouterProvider } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={Router} />
)



