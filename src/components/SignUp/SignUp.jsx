import React from 'react';
import Form from '../Form/Form';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/reducers/Auth';

export const SignUp = () => {
    const dispatch = useDispatch()
    const handleLogin = (email, password) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                    isAuth: true
                }))
                console.log(user)
            })
            .catch(e => console.log(e))
    }
    return (
        <Form btnTitle="Sign In" handleClick={handleLogin} />
    )
}
