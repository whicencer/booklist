import React from 'react';
import Login from '../components/Login/Login';
import { useHistory } from 'react-router';

const LoginPage = () => {
    const history = useHistory();
    return history.location.pathname === '/login' ? <Login /> : <div>Register</div>
}

export default LoginPage