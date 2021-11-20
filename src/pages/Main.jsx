import React, {useEffect} from 'react';
import BooksList from '../components/BooksList/BooksList';

import { getBooksFromFire } from '../store/reducers/Books';

import { useDispatch } from 'react-redux';

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