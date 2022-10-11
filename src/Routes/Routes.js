import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Main from '../layouts/Main'

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
             {
                path:'/',
                element:<Home></Home>
             }
        ]
    }
])