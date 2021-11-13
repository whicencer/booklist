import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.scss';

const Navigation = () => {
    return (
        <nav className="nav">
            <NavLink className="nav-link" to='/'>Home</NavLink>
            <NavLink className="nav-link" to='/read-books'>Read books</NavLink>
            <NavLink className="nav-link" to='/add-book'>Add book</NavLink>
        </nav>
    )
}

export default Navigation