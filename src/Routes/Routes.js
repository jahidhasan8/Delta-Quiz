import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Main from '../layouts/Main'
import Quiz from '../components/Quiz/Quiz'
import Statistics from '../components/Statistics/Statistics'
import Blog from "../components/Blog/Blog";
import ErrorPage from "../components/ErrorPage/ErrorPage";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
             {
                path:'/',
                loader:()=>fetch('https://openapi.programming-hero.com/api/quiz'),
                element:<Home></Home>
             },
             {
               path:'/home',
               loader:()=>fetch('https://openapi.programming-hero.com/api/quiz'),
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