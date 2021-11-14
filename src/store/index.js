import { configureStore } from '@reduxjs/toolkit';
import Auth from './reducers/Auth';
import Books from './reducers/Books';

export default configureStore({
    reducer: {books: Books, auth: Auth}
})