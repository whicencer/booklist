import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavigationAuth = () => {
    return (
        <nav className="nav">
            <NavLink className="nav-link" to='booklist/login'>Sign In</NavLink>
            <NavLink className="nav-link" to='booklist/register'>Sign Up</NavLink>
        </nav>
    )
}
