import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from 'redux';
import { rootReducer } from './root-reducer';
// access to localStorage
import storage from 'redux-presist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

// middlewares
const loggerMiddleware = (store) => (next) => (action) => {
  if (!action?.type) return next(action);

  console.log('type: ', action.type);
  console.log('payload: ', action.payload);
  console.log('current state: ', store.getState());

  next(action);

  console.log('next state: ', store.getState());
};

const persistConfig = {
  key: 'root', // whole reducer
  storage,
  blacklist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [loggerMiddleware];

const composedEnhancers = compose(applyMiddleware(...middleWares));

// create store
export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);
