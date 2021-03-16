import reduxSaga from 'redux-saga'
import { getDefaultMiddleware, configureStore } from '@reduxjs/toolkit'
import rootSaga from './Sagas'
import rootReducer from './Reducers'

const sagaMiddleware = reduxSaga()

const middleware = [
    ...getDefaultMiddleware({ thunk: false })
        .concat(sagaMiddleware)
]

export const store = configureStore({
    reducer: rootReducer,
    middleware
})

sagaMiddleware.run(rootSaga)