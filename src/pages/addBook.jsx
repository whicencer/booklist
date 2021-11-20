import React, { useState } from 'react';

import { getAuth } from "@firebase/auth";
import { doc, setDoc, getFirestore } from '@firebase/firestore';

import BookItem from '../components/BookItem/BookItem'

import { useDispatch } from 'react-redux';
import Input from '../components/UI/Input/Input';
import Button from '../components/UI/Button/Button'
import { getBooks } from '../store/reducers/Books';
import { useSelector } from 'react-redux';
import '../assets/styles/books.scss';

const addBook = () => {
    const dispatch = useDispatch()
    const foundBooks = useSelector(state => state.books.foundBooks)

    const firestore = getFirestore()
    

    const handleAddBook = async (title, author, thumb, id) => {
        const sureToAdd = confirm('Вы уверены что хотите добавить книгу в список?')
        if(sureToAdd) {
            await setDoc(doc(firestore, `user_${getAuth().currentUser.uid}`, `book_${id}`), {
                title,
                author,
                thumb,
                id
            })
            alert('Книга успешно добавлена в список!')
        }
    }

    const [controlInput, setControlInput] = useState('')

    const clickHandler = () => dispatch(getBooks(controlInput))
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
                            <BookItem
                                key={key}
                                handleClick={() => {
                                    handleAddBook(title, authors[0], imageLinks.smallThumbnail, el.id)
                                }}
                                thumbnail={imageLinks.smallThumbnail}
                                title={title}
                                author={authors[0]}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default addBook