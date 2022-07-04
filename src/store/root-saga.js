// import { all, call } from 'redux-saga/effects'

import { all, call } from 'redux-saga/effects';
import { categoriesSaga } from './reducers/categories/categories-saga';

export function* rootSaga() {
  yield all([call(categoriesSaga)]);
}
