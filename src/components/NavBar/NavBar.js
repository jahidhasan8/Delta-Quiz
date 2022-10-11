import React, { useState } from 'react';
import {  NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const NavBar = () => {
    const [open, setOpen] = useState(false)
    return (
        <nav className='bg-indigo-300 text-white w-full '>

            <div className='flex justify-between mr-12 p-2'>
                <NavLink className={`mx-auto text-black font-bold text-2xl`} to='/'><h3 >Delta Quiz</h3></NavLink>

                <div onClick={() => setOpen(!open)} className="h-10 w-10 text-black md:hidden">
                    {
                        open ? <XMarkIcon /> :
                            <Bars3Icon />
                    }
                </div>


                <ul className={`md:flex md:static relative text-black font-semibold bg-indigo-300   ${open ? 'top-6px' : 'top-[-140px]'}`}>

               
                    <li className='mr-10'>
                        <NavLink className={({ isActive }) =>
                            isActive ? 'bg-indigo-400 rounded-sm' : undefined
                        } to='/home'>Home</NavLink>
                    </li>

                    <li className='mr-10'>
                        <NavLink className={({ isActive }) =>
                            isActive ? 'bg-indigo-400 rounded-sm' : undefined
                        } to='/statistics'>Statistics</NavLink>

                    </li>
                    <li className='mr-10'>
                        <NavLink className={({ isActive }) =>
                            isActive ? 'bg-indigo-400 rounded-sm' : undefined
                        } to='/blog'>Blog</NavLink>

                    </li>
                </ul>
            </div>

        </nav>
    );
};

export default NavBar;