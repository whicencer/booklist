import React from 'react'
import { useSelector } from 'react-redux'
import BookItem from '../BookItem/BookItem'
import '../../assets/styles/books.scss'

import { deleteBooks } from '../../store/reducers/Books'

import { getAuth } from 'firebase/auth'
import {doc, deleteDoc, getFirestore} from 'firebase/firestore'
import { useDispatch } from 'react-redux'

const BooksList = () => {
    const books = useSelector(state => state.books.books)
    const dispatch = useDispatch()
    
    const firestore = getFirestore()
    const handleRemoveBook = async (id) => {
        const sureDelete = confirm('Вы уверены что хотите удалить книгу из списка?')
        if(sureDelete) {
            await deleteDoc(doc(firestore, `user_${getAuth().currentUser.uid}`, `book_${id}`))
            dispatch(deleteBooks(id))
            alert('Вы успешно удалили книгу из списка')
        }
    }

    return (
        <div className="books">
            {
                books.length === 0
                    ? <h2>There are no books here...</h2>
                    : books.map((el, key) => {
                        return(
                            <BookItem
                                key={key}
                                title={el.title}
                                id={el.id}
                                isRead={el.read}
                                thumbnail={el.thumb}
                                author={el.author}
                                handleClick={() => {
                                    handleRemoveBook(el.id)
                                }}
                            />
                        )
                    })
            }
        </div>
    )
}

export default BooksList