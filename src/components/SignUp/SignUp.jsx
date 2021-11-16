import React from 'react';
import Form from '../UI/Form/Form';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/reducers/Auth';

export const SignUp = () => {
    const dispatch = useDispatch()
    const handleRegister = (email, password) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                    isAuth: true
                }))
            })
            .catch(() => alert('Some Error occured.'))
    }
    return (
        <Form btnTitle="Sign Up" handleClick={handleRegister} />
    )
}
