import { combineReducers } from 'redux'
import { authReducer } from '../services/Auth/AuthSlice'
import { homeReducer } from '../services/Home/HomeSlice'

export default combineReducers({
    home: homeReducer,
    auth: authReducer
})