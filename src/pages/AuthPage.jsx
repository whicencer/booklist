import React from 'react';
import Login from '../components/Login/Login';
import { useHistory } from 'react-router';
import { SignUp } from '../components/SignUp/SignUp';

const LoginPage = () => {
    const history = useHistory();
    return history.location.pathname === '/booklist/login' ? <Login /> : <SignUp />
}

export default LoginPage