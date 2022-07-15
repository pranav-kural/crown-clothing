import { takeLatest, put, all, call, takeEvery } from 'redux-saga/effects';
import {
  authSignInWithEmailAndPassword,
  createAuthUserWithEmailAndPassword,
  getCurrentUser,
  getReduxPersistKey,
  getUserSnapshot,
  signInWithGooglePopup,
  signOutUser,
} from '../../../utils/firebase/firebase-utils';
import {
  authFailure,
  setCurrentUser,
  setReduxPersistKeySuccess,
  signInSucess,
  USER_ACTION_TYPES,
} from './user-actions';

export function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
  try {
    const userSnapshot = yield call(
      getUserSnapshot,
      userAuth,
      additionalDetails
    );
    yield put(signInSucess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(authFailure(error));
  }
}

/*******************************
 *   Sign In Handlers
 */

export function* signInWithEmailAndPassword({ payload }) {
  const { email, password } = payload;
  try {
    const { user } = yield call(
      authSignInWithEmailAndPassword,
      email,
      password
    );
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(authFailure(error));
  }
}

export function* onSignInWithEmailAndPassword() {
  yield takeLatest(
    USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
    signInWithEmailAndPassword
  );
}

export function* signInWithGoogle() {
  try {
    const { user } = yield call(signInWithGooglePopup);
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(authFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

function* signUserOut() {
  try {
    yield call(signOutUser);
    yield put(setCurrentUser(null));
  } catch (error) {
    yield put(authFailure(error));
  }
}

export function* onUserSignOut() {
  yield takeLatest(USER_ACTION_TYPES.USER_SIGN_OUT, signUserOut);
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield put(authFailure(error));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

/*******************************
 *   Sign Up Handlers
 */

export function* createUserWithEmailAndPassword({
  payload: { name, email, password },
}) {
  console.log(email);
  try {
    const { user } = yield call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );
    // update display name
    user.displayName = user.displayName ? user.displayName : name;
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(authFailure(error));
  }
}

export function* onCreateUserWithEmailAndPassword() {
  yield takeLatest(
    USER_ACTION_TYPES.SIGN_UP_EMAIL_PASSWORD,
    createUserWithEmailAndPassword
  );
}

function* handleAuthFailure({ payload: error }) {
  yield console.error(error);
}

export function* onAuthFailure() {
  yield takeEvery(USER_ACTION_TYPES.AUTH_FAILURE, handleAuthFailure);
}

export function* setReduxPersistKeyFromFirebase() {
  const { seckey } = yield call(getReduxPersistKey);
  if (seckey) yield put(setReduxPersistKeySuccess(seckey));
  else yield put(setReduxPersistKeySuccess('NON_SECURE_STATIC_KEY'));
}

export function* onSetReduxPersistKey() {
  yield takeLatest(
    USER_ACTION_TYPES.SET_REDUX_PERSIST_KEY_START,
    setReduxPersistKeyFromFirebase
  );
}

export function* userSagas() {
  yield all([
    call(onCheckUserSession),
    call(onSignInWithEmailAndPassword),
    call(onGoogleSignInStart),
    call(onUserSignOut),
    call(onCreateUserWithEmailAndPassword),
    call(onAuthFailure),
    call(onSetReduxPersistKey),
  ]);
}
