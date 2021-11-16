import React from 'react';
import './button.scss'

const Button = ({btnTitle, handleClick}) => {
    return (
        <button className="btn" onClick={handleClick}>{btnTitle}</button>
    )
}

export default Button