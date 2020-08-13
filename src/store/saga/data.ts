import { takeEvery, call, put, all } from 'redux-saga/effects';
import { ASYNCCREMENT, SETCREMENT } from '@/store/constants/data';
import { I_SETCREMENT_ACTION } from '@/store/interface/data';
const request = (times: number, count: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(count)
    }, times)
  })
}
function* setCrementSaga(action: I_SETCREMENT_ACTION) {
  const count = yield call(request, 2000, action.count);
  yield put({type: SETCREMENT, count});
}

export function* watcheCrementSaga() {
  yield takeEvery(ASYNCCREMENT, setCrementSaga);
}

export default function* dataSagas() {
  yield all([
    watcheCrementSaga()
  ])
}