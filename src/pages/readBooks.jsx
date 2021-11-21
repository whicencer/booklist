import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from '../components/BookItem/BookItem';

import '../assets/styles/books.scss'

const readBooks = () => {
    const readBooks = useSelector(state => state.books.readBooks)

    return (
        <div className="books">
            {
                readBooks.map((el, key) => {
                    return(
                        <BookItem
                            key={key}
                            title={el.title}
                            id={el.id}
                            isRead={el.read}
                            thumbnail={el.thumb}
                            author={el.author}
                        />
                    )
                })
            }
        </div>
    )
}

export default readBooks