import { createSlice } from "@reduxjs/toolkit";

const Auth = createSlice({
    name: 'Auth',
    initialState: {
        email: null,
        id: null,
        token: null,
        isAuth: false
    },
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email,
            state.id = action.payload.id,
            state.token = action.payload.token
            state.isAuth = true
        },
        removeUser(state, action) {
            state.email = null,
            state.id = null,
            state.token = null,
            state.isAuth = false
        }
    }
})

export const { setUser, removeUser } = Auth.actions
export default Auth.reducer