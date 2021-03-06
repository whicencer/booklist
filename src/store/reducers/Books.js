import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { app } from '../../firebase';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth } from '@firebase/auth';

export const getBooks = createAsyncThunk(
    'Books/getBooks',
    async (query) => {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
        const data = await response.json()
        return data
    }
)

export const getBooksFromFire = createAsyncThunk(
    'Books/getBooksFromFire',
    async () => {
        const db = getFirestore(app);
        
        const user = collection(db, `user_${getAuth().currentUser.uid}`);
        const bookSnapshot = await getDocs(user);
        const booksList = bookSnapshot.docs.map(doc => doc.data());

        return booksList
    }
)

const Books = createSlice({
    name: 'Books',
    initialState: {
        books: [],
        foundBooks: [],
        readBooks: []
    },
    reducers: {
        setBooks(state, action) {
            state.books = action.payload
        },
        deleteBooks(state, action) {
            state.books.filter(el => el.id !== action.payload)
        },
        addReadBook(state, action) {
            const readBook = state.books.find(el => el.id === action.payload)
            readBook.read = true
            state.readBooks = [...state.books.filter(el => el.read === true)]
        },
        removeReadBook(state, action) {
            state.books.find(el => el.id === action.payload).read = false
            state.readBooks = state.readBooks.filter(el => el.id !== action.payload)
        }
    },
    extraReducers: {
        [getBooks.fulfilled]: (state, action) => {state.foundBooks = [...action.payload.items]},
        [getBooksFromFire.fulfilled]: (state, action) => {
            state.books = [...action.payload]
            state.readBooks = state.books.filter(el => el.read === true)
        }
    }
})

export const {setBooks, deleteBooks, addReadBook, removeReadBook} = Books.actions
export default Books.reducer