import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavigationAuth = () => {
    return (
        <nav className="nav">
            <NavLink className="nav-link" to='/login'>Sign In</NavLink>
            <NavLink className="nav-link" to='/register'>Sign Up</NavLink>
        </nav>
    )
}
