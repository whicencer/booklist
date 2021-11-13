import { configureStore } from '@reduxjs/toolkit';
import Books from './reducers/Books';

export default configureStore({
    reducer: {books: Books}
})