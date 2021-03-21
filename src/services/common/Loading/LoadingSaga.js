import { all, put, takeEvery } from "redux-saga/effects";
import { loadingActions } from "./LoadingSlice";

function* listener(payload) {

  const { type } = payload
  
  if (/getLoading/.test(type)) return;
  const matches = /(Request|Success|Fail)/.test(type);
  if (!matches) return
  console.log(type)
  yield put(loadingActions.setLoading(type))
}

function* actionWatcher() {
  yield takeEvery('*', listener)
}

export default function* loadingSaga() {
  yield all([actionWatcher()])
}