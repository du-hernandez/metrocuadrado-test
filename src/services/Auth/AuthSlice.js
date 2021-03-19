import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLogin: false,
    user: null,
    email: null,
    googleAuth: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginRequest() {},

        loginSuccess(state, { payload: { user } }) {
            state.user = user
            state.isLogin = true
        },

        loginFail() {},
        registerRequest() {},

        registerSuccess(state, { payload: { user } }) {
            state.user = user
            state.isLogin = true
        },

        registerFail(state, { payload: { error } }) {
            state.error = error
        },

        signOut(state) {
            state.isLogin = false
            state = initialState
        },

        setGoogleAuth(state, { payload }) {
            state.googleAuth = payload
        }
    }
})

const authActions = authSlice.actions
const authReducer = authSlice.reducer

export { authActions, authReducer }