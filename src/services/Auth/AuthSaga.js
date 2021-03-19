import { all, put, call, takeLatest } from 'redux-saga/effects'
import { authActions } from './AuthSlice'
import { firebase } from '../../common/config'
import 'firebase/auth'

function* setGoogleAuth({ payload }) {
  yield put(authActions.loginSuccess({ user: payload.profileObj }))
}

function* login({ payload }) {
  const { correo, password } = payload

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

function* actionWatcher() {
  yield takeLatest(authActions.setGoogleAuth, setGoogleAuth)
  yield takeLatest(authActions.login, login)
  yield takeLatest(authActions.register, register)
}

export default function* authSaga() {
  yield all([actionWatcher()])
}