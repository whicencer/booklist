import React from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { NavLink } from 'react-router-dom';
import { signOut, getAuth } from '@firebase/auth';

export const NavigationMain = () => {
    const handleLogout = () => {
        signOut(getAuth())
            .then(() => {
                alert('You have been successfully logged out!')
            })
    }

    const user = useAuth()
    return (
        <nav className="nav">
            <NavLink className="nav-link" to='booklist/'>Home</NavLink>
            <NavLink className="nav-link" to='booklist/read-books'>Read books</NavLink>
            <NavLink className="nav-link" to='booklist/add-book'>Add book</NavLink>
            <p>{user.email} <span className="logout-btn" onClick={handleLogout}>(Logout)</span></p>
        </nav>
    )
}