import { takeLatest, put, all, call } from 'redux-saga/effects';
import {
  getCurrentUser,
  getUserSnapshot,
} from '../../../utils/firebase/firebase-utils';
import { signInFailure, signInSucess, USER_ACTION_TYPES } from './user-actions';

export function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
  console.log('Hrere');
  try {
    const userSnapshot = yield call(
      getUserSnapshot,
      userAuth,
      additionalDetails
    );
    console.log('F---: ', userSnapshot.data());
    yield put(signInSucess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}
export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* userSagas() {
  yield all([call(onCheckUserSession)]);
}
