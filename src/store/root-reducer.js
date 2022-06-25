import { combineReducers } from 'redux';
import { userReducer } from './reducers/user/user-reducer';

export const rootReducer = combineReducers({
  user: userReducer,
});
