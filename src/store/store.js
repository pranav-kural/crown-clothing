import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from 'redux';
// import logger from 'redux-logger';
import { rootReducer } from './root-reducer';

// middlewares
const loggerMiddleware = (store) => (next) => (action) => {
  if (!action?.type) return next(action);

  console.log('type: ', action.type);
  console.log('payload: ', action.payload);
  console.log('current state: ', store.getState());

  next(action);

  console.log('next state: ', store.getState());
};

const middleWares = [loggerMiddleware];

const composedEnhancers = compose(applyMiddleware(...middleWares));

// create store
export const store = createStore(rootReducer, undefined, composedEnhancers);
