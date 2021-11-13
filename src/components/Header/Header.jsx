import React from 'react';
import Navigation from '../Navigation/Navigation';
import './header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="header-inner wrapper">
                <img width="50" src="https://www.adazing.com/wp-content/uploads/2019/02/stacked-book-clipart-04-300x300.png" alt="logo" />
                <Navigation />
            </div>
        </header>
    )
}

export default Header