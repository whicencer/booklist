import React from 'react';
import './BookItem.scss';
import Button from '../UI/Button/Button';

import { addReadBook, removeReadBook } from '../../store/reducers/Books'
import { useDispatch } from 'react-redux';

import { getAuth } from "@firebase/auth";
import { doc, updateDoc, getFirestore } from '@firebase/firestore';


const BookItem = ({handleClick, thumbnail, title, author, id, isRead}) => {
    const db = getFirestore()
    const currentUser = getAuth().currentUser

    const dispatch = useDispatch()

    const handleAddReadBook = async () => {
        try {
            dispatch(addReadBook(id))
            await updateDoc(doc(db, `user_${currentUser.uid}`, `book_${id}`), {read: true})
        } catch {
            alert('Для начала добавьте книгу в список')
        }
    }
    const handleRemoveReadBook = async () => {
        dispatch(removeReadBook(id))
        await updateDoc(doc(db, `user_${currentUser.uid}`, `book_${id}`), {read: false})
    }
    

    return (
        <div className="book" onClick={handleClick}>
            <img src={thumbnail} alt="image" />
            <h2><a href={`https://books.google.com.ua/books?id=${id}`} target="_blank" onClick={e => e.stopPropagation()}>{title}</a></h2>
            <p>{author}</p>
            {
                !isRead
                    ? <Button
                            btnTitle="Прочитал"
                            handleClick={(e) => {
                                e.stopPropagation()
                                handleAddReadBook()
                            }}
                        />
                    : <Button
                            btnTitle="Не прочитал"
                            handleClick={(e) => {
                                e.stopPropagation()
                                handleRemoveReadBook()
                            }}
                        />
                }
        </div>
    )
}

export default BookItem