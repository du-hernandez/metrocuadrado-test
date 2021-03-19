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
        login(state) {
            state.loading = true
        },
        loginSuccess(state, { payload: { user } }) {
            state.user = user
            state.isLogin = true
            state.loading = false

        },
        loginFail(state, { payload: { error } }) {
            console.log('Handled error: ', error)
            state.error = error
            state.loading = false
        },

        register(state) {
            state.loading = true
        },
        registerSuccess(state, { payload: { user } }) {
            state.user = user
            state.isLogin = true
            state.loading = false

        },
        registerFail(state, { payload: { error } }) {
            state.error = error
            state.loading = false
        },

        signOut(state) {
            state.isLogin = false
            state = initialState
        },
        setGoogleAuth(state, { payload }) {
            state.loading = true
            state.googleAuth = payload
        }
    }
})

const authActions = authSlice.actions
const authReducer = authSlice.reducer

export { authActions, authReducer }