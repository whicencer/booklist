import { createSlice } from '@reduxjs/toolkit'

const Books = createSlice({
    name: 'Books',
    initialState: {
        books: [
            {bookTitle: 'Harry Potter', author: 'Daniel H. Nexon, Iver B. Neumann', year: '2006'}
        ]
    },
    reducers: {
        setBooks(state, action) {
            state.books.push(action.payload)
        },
    }
})

export const {setBooks} = Books.actions
export default Books.reducer