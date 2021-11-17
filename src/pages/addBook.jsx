import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Input from '../components/UI/Input/Input';
import Button from '../components/UI/Button/Button'
import { getBooks } from '../store/reducers/Books';
import { useSelector } from 'react-redux';
import '../assets/styles/addBook.scss'

const addBook = () => {
    const dispatch = useDispatch()
    const foundBooks = useSelector(state => state.books.foundBooks)

    const [controlInput, setControlInput] = useState('')

    const clickHandler = () => {dispatch(getBooks(controlInput))}
    return (
        <div>
            <div style={{maxWidth: '80%', margin: '20px auto'}}>
                <Input type="text" placeholder="Enter the title of the book" value={controlInput} onChange={(e) => setControlInput(e.target.value)} />
                <Button btnTitle="Search" handleClick={clickHandler} />
            </div>
            <div className="books">
                {
                    foundBooks.map((el, key) => {
                        const {
                                authors = ['No authors'],
                                title='No title',
                                imageLinks={smallThumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNT0xwyLstvC7wH8jYIKur3GTcSq-g6fj2EbL4wk-qaONHYjBswa3rpFsZJeEjuXcG-lw&usqp=CAU'}
                            } = el.volumeInfo
                        return (
                            <div className="book" key={key}>
                                <img src={imageLinks.smallThumbnail} alt="image" />
                                <h2>{title}</h2>
                                <p>{authors[0]}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default addBook