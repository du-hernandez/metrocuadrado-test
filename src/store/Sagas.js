import { fork, all } from 'redux-saga/effects'
import homeSaga from '../services/Home/HomeSaga'
import authSaga from '../services/Auth/AuthSaga'

export default function* rootSaga() {
    yield all([
        fork(homeSaga),
        fork(authSaga),
    ])
}
