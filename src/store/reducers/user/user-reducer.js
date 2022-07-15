import { USER_ACTION_TYPES } from './user-actions';

const INITIAL_USER_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
  reduxPersistKey: '',
};

export const userReducer = (state = INITIAL_USER_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    case USER_ACTION_TYPES.GOOGLE_SIGN_IN_START:
      return { ...state, isLoading: true };
    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
      return { ...state, currentUser: payload, isLoading: false };
    case USER_ACTION_TYPES.AUTH_FAILURE:
      return { ...state, error: payload };
    case USER_ACTION_TYPES.SET_REDUX_PERSIST_KEY_SUCCESS:
      return { ...state, reduxPersistKey: payload };
    default:
      return state;
  }
};
