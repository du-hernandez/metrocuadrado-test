import { all, put, takeLatest } from 'redux-saga/effects'
import { authActions } from './AuthSlice'
import { firebase } from '../../common/config'
import 'firebase/auth'

function* setGoogleAuth({ payload }) {
  yield put(authActions.loginSuccess({ user: payload.profileObj }))
}

function* login({ payload }) {
  const { correo, password } = payload
  try {
    yield firebase.auth().signInWithEmailAndPassword(correo, password)
    yield put(authActions.loginSuccess({ user: { email: correo } }))
  } catch (error) {
    yield put(authActions.loginFail(JSON.parse(JSON.stringify(error))))
  }
}

function* register({ payload }) {
  const { correo, password } = payload
  try {
    yield firebase.auth().createUserWithEmailAndPassword(correo, password)
    yield put(authActions.registerSuccess({ user: { email: correo } }))
  } catch (error) {
    yield put(authActions.registerFail({ error }))
  }
}

function* actionWatcher() {
  yield takeLatest(authActions.setGoogleAuth, setGoogleAuth)
  yield takeLatest(authActions.loginRequest, login)
  yield takeLatest(authActions.registerRequest, register)
}

export default function* authSaga() {
  yield all([actionWatcher()])
}