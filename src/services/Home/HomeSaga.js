import { takeLatest, all, put, select } from 'redux-saga/effects'

import { homeActions } from './HomeSlice'
import { Api } from '../../common/config'

function* getClothe({ payload: { q } }) {
    const {
        image_type,
        category,
        lang,
        page,
        per_page
    } = yield select(state => state.home);

    const response = yield Api.get('/', {
        q,
        image_type,
        category,
        lang,
        page,
        per_page
    })

    if (response && response.status === 200) {
        yield put(homeActions.getClotheSuccess({ clothe: response.data.hits }))
    }
}

function* actionWatcher() {
    yield takeLatest(homeActions.getClotheRequest, getClothe)
}

export default function* homeSaga() {
    yield all([actionWatcher()])
}