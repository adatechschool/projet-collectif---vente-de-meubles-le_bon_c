import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation () {
    return (
        <div>
            <ul>
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
            </ul>
        </div>
    );
};

export default Navigation;