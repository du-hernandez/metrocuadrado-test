import { fork, all } from 'redux-saga/effects'
import homeSaga from '../services/Home/HomeSaga'
import authSaga from '../services/Auth/AuthSaga'
import loadingSaga from '../services/common/Loading/LoadingSaga'
import errorSaga from '../services/common/Error/ErrorSaga'

export default function* rootSaga() {
    yield all([
        fork(homeSaga),
        fork(authSaga),
        fork(loadingSaga),
        fork(errorSaga),
    ])
}
