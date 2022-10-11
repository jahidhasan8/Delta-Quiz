import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Main from '../layouts/Main'
import Quiz from '../components/Quiz/Quiz'
import Statistics from '../components/Statistics/Statistics'
import Blog from "../components/Blog/Blog";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
             {
                path:'/',
                element:<Home></Home>
             },
             {
                path:'/quiz',
                element:<Quiz></Quiz>
             },
             {
                path:'/statistics',
                element:<Statistics></Statistics>
             },
             {
                path:'/blog',
                element:<Blog></Blog>
             }
        ]
    }
])