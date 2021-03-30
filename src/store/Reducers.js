import { combineReducers } from 'redux'
import { authReducer } from '../services/Auth/AuthSlice'
import { homeReducer } from '../services/Home/HomeSlice'
import { loadingReducer } from '../services/common/Loading/LoadingSlice'
import { errorReducer } from '../services/common/Error/ErrorSlice'

export default combineReducers({
    home: homeReducer,
    auth: authReducer,
    loading: loadingReducer,
    error: errorReducer
})