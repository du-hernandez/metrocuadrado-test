import { combineReducers } from 'redux'
import { homeReducer } from '../services/Home/HomeSlice'

export default combineReducers({
    home: homeReducer
})