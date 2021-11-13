import React from 'react'
import { useSelector } from 'react-redux'

const BooksList = () => {
    const books = useSelector(state => state.books.books)
    return (
        <div>
            {
                books.map((el, key) => {
                    return(
                        <div key={key}>
                            <span>{el.bookTitle}</span>
                            <hr />
                            <span>{el.author}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default BooksList