import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation () {
    return (
        <div className='bg-[#B06842] '>
            <ul className="flex justify-evenly NavigationUL">
                <NavLink to='/'>
                    <li>Home</li>
                </NavLink>
                <NavLink to='/furnitures'>
                    <li>Furnitures</li>
                </NavLink>
                <NavLink to='/outdoor'>
                    <li>Outdoor</li>
                </NavLink>
                <NavLink to='/indoor'>
                    <li>Indoor</li>
                </NavLink>
                <NavLink to='/add'>
                    <li>Add article</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;

// shadow-slate-400 shadow-xl rounded-lg h-12 m-1