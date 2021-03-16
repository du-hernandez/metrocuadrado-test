import { fork, all } from 'redux-saga/effects'
import homeSaga from '../services/Home/HomeSaga'

export default function* rootSaga() {
    yield all([
        fork(homeSaga)
    ])
}
