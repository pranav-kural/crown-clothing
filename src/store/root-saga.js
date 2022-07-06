// import { all, call } from 'redux-saga/effects'

import { all, call } from 'redux-saga/effects';
import { categoriesSaga } from './reducers/categories/categories-saga';
import { userSagas } from './reducers/user/user.saga';

export function* rootSaga() {
  yield all([call(categoriesSaga), call(userSagas)]);
}
