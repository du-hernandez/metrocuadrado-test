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

  console.log('login de la saga')

  yield firebase.auth().signInWithEmailAndPassword(correo, password)
    .then(res => {
      put(authActions.loginSuccess({ user: res }))
    })
    .catch(error => put(authActions.loginFail({ error })))
}

function* register({ payload }) {
  const { correo, password } = payload
  yield firebase.auth().createUserWithEmailAndPassword(correo, password)
    .then(res => {
      console.log('register: ', res.user.email)
      console.log('register: ', res.user.uid)
    })
    .catch(err => console.error('register: ', err))
}

function* listener(payload) {
  const { type } = payload
  const matches = /(Request|Success|Fail)/.test(type);
  console.log('matches >>>: ', matches)
  console.log('type >>>: ', type)
  console.log('payload >>> ', payload)
  if (matches) { yield put(loadingActions.getLoading(type)) }
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