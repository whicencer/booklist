import React from 'react';
import './navigation.scss';
import { useAuth } from '../../hooks/useAuth';
import { NavigationMain } from './NavigationMain/NavigationMain';
import { NavigationAuth } from './NavigationAuth/NavigationAuth';

const Navigation = () => {
    const { isAuth } = useAuth()
    return (
        <nav className="nav">
            {
                isAuth
                    ? <NavigationMain />
                    : <NavigationAuth />
            }
        </nav>
    )
}

export default Navigation