import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getBooks = createAsyncThunk(
    'Books/getBooks',
    async (query) => {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
        const data = await response.json()
        return data
    }
)

const Books = createSlice({
    name: 'Books',
    initialState: {
        books: [],
        foundBooks: []
    },
    reducers: {
        setBooks(state, action) {
            state.books = action.payload
        },
        deleteBooks(state, action) {
            state.books.filter(el => el.id !== action.payload)
        }
    },
    extraReducers: {
        [getBooks.fulfilled]: (state, action) => {state.foundBooks = [...action.payload.items]}
    }
})

export const {setBooks, deleteBooks} = Books.actions
export default Books.reducer