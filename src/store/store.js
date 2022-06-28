import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from 'redux';
import { rootReducer } from './root-reducer';
// access to localStorage
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { encryptTransform } from 'redux-persist-transform-encrypt';
import logger from 'redux-logger';
import { NON_SECURE_STATIC_KEY } from '../config/sensitive-persist-encrypted';

// middlewares
// const loggerMiddleware = (store) => (next) => (action) => {
//   if (!action?.type) return next(action);
//   console.log('type: ', action.type);
//   console.log('payload: ', action.payload);
//   console.log('current state: ', store.getState());
//   next(action);
//   console.log('next state: ', store.getState());
// };

const persistConfig = {
  key: 'root', // whole reducer
  storage,
  blacklist: ['user'],
  transforms: [
    encryptTransform({
      secretKey: NON_SECURE_STATIC_KEY,
      onError: function (error) {
        console.warn(
          `Persist Secret Key Different.\nFrom: persistConfig->transforms->encryptTransform\n${error}`
        );
      },
    }),
  ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = process.env.NODE_ENV === 'development' ? [logger] : [];

const composedEnhancers = compose(applyMiddleware(...middleWares));

// create store
export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);
