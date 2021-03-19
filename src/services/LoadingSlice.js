import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    getLoading(state, { payload }) {
      console.log('------------------------------------ ', payload)
      state[payload] = /Request/.test(payload);
    }
  }
})

const loadingActions = loadingSlice.actions
const loadingReducer = loadingSlice.reducer

console.log(
  'loadingActions.getLoading.toString(): ',
  loadingActions.getLoading.toString()
)

export { loadingActions, loadingReducer }
