import { all, put, call, takeLatest, takeEvery } from 'redux-saga/effects'
import { authActions } from './AuthSlice'
import { firebase } from '../../common/config'
import 'firebase/auth'
import { loadingActions } from '../LoadingSlice'

function* setGoogleAuth({ payload }) {
  yield put(authActions.loginSuccess({ user: payload.profileObj }))
}

function* login({ payload }) {
  const { correo, password } = payload
  try {
    const response = yield firebase.auth().signInWithEmailAndPassword(correo, password)
    yield put(authActions.loginSuccess({ user: { email: correo } }))
  } catch (error) {
    yield put(authActions.loginFail({ error }))
  }
}

function* register({ payload }) {
  const { correo, password } = payload
  try {
    const response = yield firebase.auth().createUserWithEmailAndPassword(correo, password)
    yield put(authActions.registerSuccess({ user: { email: correo } }))
  } catch (error) {
    yield put(authActions.registerFail({ error }))
  }
}

function* listener(payload) {
  const { type } = payload
  if (/getLoading/.test(type)) return;
  const matches = /(Request|Success|Fail)/.test(type);
  if (matches) { yield put(loadingActions.setLoading(type)) }
  return;
}

function* actionWatcher() {
  yield takeLatest(authActions.setGoogleAuth, setGoogleAuth)
  yield takeLatest(authActions.loginRequest, login)
  yield takeLatest(authActions.registerRequest, register)
  yield takeEvery('*', listener)
}

export default function* authSaga() {
  yield all([actionWatcher()])
}