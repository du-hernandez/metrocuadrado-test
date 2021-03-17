import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLogin: false,
    loading: false,
    error: null,
    user: null,
    email: null,
    googleAuth: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signIn(state) {
            state.loading = true
            state.isLogin = true
        },
        signInSuccess(state, { payload: { user } }) {
            state.user = user
            state.loading = false

        },
        signInFail(state, { payload: { error } }) {
            state.error = error
            state.loading = false
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