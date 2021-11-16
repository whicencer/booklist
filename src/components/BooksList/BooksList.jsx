import React from 'react'
import { useSelector } from 'react-redux'

const BooksList = () => {
    const books = useSelector(state => state.books.books)
    return (
        <div>
            {
                books.length === 0
                    ? <h2>There are no books here...</h2>
                    : books.map((el, key) => {
                        return(
                            <div key={key}>
                                <span>{el.volumeInfo.title}</span>
                                <hr />
                                <span>{el.volumeInfo.authors[0]}</span>
                            </div>
                        )
                    })
            }
        </div>
    )
}

export default BooksList