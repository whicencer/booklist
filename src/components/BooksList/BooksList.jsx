import React from 'react'
import { useSelector } from 'react-redux'
import BookItem from '../BookItem/BookItem'
import '../../assets/styles/books.scss'

const BooksList = () => {
    const books = useSelector(state => state.books.books)
    console.log(books)
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
                            />
                        )
                    })
            }
        </div>
    )
}

export default BooksList