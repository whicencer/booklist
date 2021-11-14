import React from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { NavLink } from 'react-router-dom';

export const NavigationMain = () => {
    const user = useAuth()
    return (
        <nav className="nav">
            <NavLink className="nav-link" to='/'>Home</NavLink>
            <NavLink className="nav-link" to='/read-books'>Read books</NavLink>
            <NavLink className="nav-link" to='/add-book'>Add book</NavLink>
            <p>{user.email}</p>
        </nav>
    )
}