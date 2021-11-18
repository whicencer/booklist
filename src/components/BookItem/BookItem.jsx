import React from 'react';
import './BookItem.scss'

const BookItem = ({handleClick, thumbnail, title, author}) => {
    return (
        <div className="book" onClick={handleClick}>
            <img src={thumbnail} alt="image" />
            <h2>{title}</h2>
            <p>{author}</p>
        </div>
    )
}

export default BookItem