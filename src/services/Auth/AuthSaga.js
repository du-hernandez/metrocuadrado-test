import { takeLatest, all, put, select } from 'redux-saga/effects'
import { authActions } from './AuthSlice'
import { Api } from '../../common/config'

function* setGoogleAuth({ payload }) {

  console.log('payload++: ', payload)

  // const {
  //     image_type,
  //     category,
  //     lang,
  //     page,
  //     per_page
  // } = yield select(state => state.home);

  // const response = yield Api.get('/', {
  //     q,
  //     image_type,
  //     category,
  //     lang,
  //     page,
  //     per_page
  // })

  // if (response && response.status === 200) {
  //     yield put(homeActions.getClotheSuccess({ clothe: response.data.hits }))
  // }
}

function* actionWatcher() {
  yield takeLatest(authActions.setGoogleAuth, setGoogleAuth)
}

export default function* authSaga() {
  yield all([actionWatcher()])
}