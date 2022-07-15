import { createAction } from '../../../utils/reducers/reducers-utils';

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'user/SET_CURRENT_USER',
  CHECK_USER_SESSION: 'user/CHECK_USER_SESSION',
  GOOGLE_SIGN_IN_START: 'user/GOOGLE_SIGN_IN_START',
  EMAIL_SIGN_IN_START: 'user/EMAIL_SIGN_IN_START',
  SIGN_IN_SUCCESS: 'user/SIGN_IN_SUCCESS',
  AUTH_FAILURE: 'user/AUTH_FAILURE',
  USER_SIGN_OUT: 'user/USER_SIGN_OUT',
  SIGN_UP_EMAIL_PASSWORD: 'user/SIGN_UP_EMAIL_PASSWORD',
  SET_REDUX_PERSIST_KEY: 'user/SET_REDUX_PERSIST_KEY',
};

export const setCurrentUser = (user) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);

export const checkUserSession = () =>
  createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);

export const googleSignInStart = () =>
  createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);

export const emailSignInStart = (email, password) =>
  createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password });

export const signInSucess = (user) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);

export const authFailure = (error) =>
  createAction(USER_ACTION_TYPES.AUTH_FAILURE, error);

export const userSignOut = () => createAction(USER_ACTION_TYPES.USER_SIGN_OUT);

export const signUpEmailPassword = (name, email, password) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_EMAIL_PASSWORD, {
    name,
    email,
    password,
  });

export const setReduxPersistKey = ({ seckey }) =>
  createAction(USER_ACTION_TYPES.SET_REDUX_PERSIST_KEY, seckey);
