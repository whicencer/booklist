import React, { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import './form.scss';

const Login = ({btnTitle, handleClick}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div className="form">
            <h2 className="title">{btnTitle}</h2>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <Button btnTitle={btnTitle} handleClick={() => handleClick(email, password)} />
        </div>
    )
}

export default Login