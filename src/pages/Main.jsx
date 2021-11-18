import React, {useEffect} from 'react';
import BooksList from '../components/BooksList/BooksList';

import { app } from '../firebase';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth } from '@firebase/auth';

import { useDispatch } from 'react-redux';
import { setBooks } from '../store/reducers/Books';
import { useSelector } from 'react-redux';

const Main = () => {
    const db = getFirestore(app);
    const books = useSelector(state => state.books.books)
    const dispatch = useDispatch()

    useEffect(async () => {
        const user = collection(db, `user_${getAuth().currentUser.uid}`);
        const bookSnapshot = await getDocs(user);
        const booksList = bookSnapshot.docs.map(doc => doc.data());
        
        dispatch(setBooks(booksList))
    }, [])

    return (
        <>
            <BooksList />
        </>
    )
}

export default Main