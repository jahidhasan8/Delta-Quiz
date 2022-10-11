import React, { createContext } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';

// export const QuizContext=createContext([])
const Main = () => {
    return (
        <div >
            
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;