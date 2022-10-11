import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const NavBar = () => {
    const [open, setOpen]=useState(false)
    return (
        <nav className='bg-slate-500 text-white w-full '>
           
            <div className='flex justify-between mr-12 p-2'>
            <Link className='mx-auto text-white text-2xl' to='/'><h3 >Delta Quiz</h3></Link>

            <div onClick={()=>setOpen(!open)} className="h-6 w-6 md:hidden">
            {
                open ?  <XMarkIcon /> :
                <Bars3Icon />
            }
            </div>
           

                <ul className={`md:flex md:static relative bg-slate-500  ${open ? 'top-6px' : 'top-[-140px]'}`}>
                    <li className='mr-10'>
                        <Link to='/home'>Home</Link>
                    </li>
                    
                    <li className='mr-10'>
                        <Link to='/quiz'>Quiz</Link>

                    </li>
                    <li className='mr-10'>
                        <Link to='/statistics'>Statistics</Link>

                    </li>
                    <li className='mr-10'>
                        <Link to='/blog'>Blog</Link>

                    </li>
                </ul>
            </div>

        </nav>
    );
};

export default NavBar;