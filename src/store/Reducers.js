import { combineReducers } from 'redux'
import { authReducer } from '../services/Auth/AuthSlice'
import { homeReducer } from '../services/Home/HomeSlice'
import { loadingReducer } from '../services/LoadingSlice'

export default combineReducers({
    home: homeReducer,
    auth: authReducer,
    loading: loadingReducer
})