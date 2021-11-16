import React, { useState } from 'react';
import Input from '../components/UI/Input/Input';
import Button from '../components/UI/Button/Button'

const addBook = () => {
    const [controlInput, setControlInput] = useState('')
    return (
        <div style={{maxWidth: '80%', margin: '20px auto'}}>
            <Input type="text" placeholder="Enter the title of the book" value={controlInput} onChange={(e) => setControlInput(e.target.value)} />
            <Button btnTitle="Search" />
        </div>
    )
}

export default addBook