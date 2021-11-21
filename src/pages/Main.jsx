import React, {useEffect} from 'react';
import BooksList from '../components/BooksList/BooksList';

import { useDispatch } from 'react-redux';
import { getBooksFromFire, setBooks } from '../store/reducers/Books';

const Main = () => {
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