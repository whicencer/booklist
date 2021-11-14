import React from 'react';
import Form from '../Form/Form';
import { useHistory } from 'react-router';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/reducers/Auth';

const Login = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const handleLogin = (email, password) => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                    isAuth: true
                }))
                history.push('/')
            })
            .catch(e => console.log(e))
    }
    return (
        <Form btnTitle="Sign In" handleClick={handleLogin} />
    )
}

export default Login