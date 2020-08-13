import { all } from 'redux-saga/effects';
import dataSagas from './saga/data';
export default function* rootSaga() {
  yield all([
    dataSagas()
  ])
}