import React, { useState } from "react";
import formStyles from './form.module.scss';

const Login = ({btnTitle, handleClick}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div className={formStyles.form}>
            <h2 className={formStyles.title}>{btnTitle}</h2>
            <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className={formStyles.input}
            />
            <input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className={formStyles.input}
            />
            <button className={formStyles.btn} onClick={() => handleClick(email, password)}>{btnTitle}</button>
        </div>
    )
}

export default Login