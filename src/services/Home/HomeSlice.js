import { createSlice } from '@reduxjs/toolkit'
import { enabled_categories, enabled_languages } from './HomeConstants'

const initialState = {
    id: null,
    image_type: 'photo',
    category: 'fashion',
    lang: 'en',
    q: 'shirt',
    page: 1,
    per_page: 40,

    enabled_lan: enabled_languages,
    enabled_cat: enabled_categories,
    clothe: [],
    error: null,
    loading: false,
    total_pages: 0,
}

const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        getClotheRequest(state, { payload: { q } }) {
            state.q = q
            state.loading = true
        },
        getClotheSuccess(state, { payload: { clothe } }) {
            state.loading = false
            state.clothe = clothe
        },
        getClotheFail(state, { payload: { error } }) {
            state.loading = false
            state.error = error
        },
        setPage(state, { payload: { page } }) {
            state.page = page
        },
        setLanguage(state, { payload: { lan } }) {
            state.selected_lan = lan
        },
        setCategory(state, { payload: { category } }) {
            state.category = category
        },
        dismisError(state) {
            state.error = null
        }
    }
})

const homeActions = homeSlice.actions
const homeReducer = homeSlice.reducer

export { homeActions, homeReducer }