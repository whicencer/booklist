import React, {useEffect} from 'react';
import BooksList from '../components/BooksList/BooksList';

import { app } from '../firebase';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth } from '@firebase/auth';

import { useDispatch } from 'react-redux';
import { setBooks } from '../store/reducers/Books';
import { useSelector } from 'react-redux';
import { getBooksFromFire } from '../store/reducers/Books';

const Main = () => {
    const books = useSelector(state => state.books.books)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getBooksFromFire())
    }, [])

    return (
        <>
            <BooksList />
        </>
    )
}

export default Main