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
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './root-saga';
import { getReduxPersistKey } from '../utils/firebase/firebase-utils';

// middlewares
// const loggerMiddleware = (store) => (next) => (action) => {
//   if (!action?.type) return next(action);
//   console.log('type: ', action.type);
//   console.log('payload: ', action.payload);
//   console.log('current state: ', store.getState());
//   next(action);
//   console.log('next state: ', store.getState());
// };

const getSecKey = () => {
  const { seckey } = getReduxPersistKey();
}

const persistConfig = {
  key: 'root', // whole reducer
  storage,
  whitelist: ['cart'],
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_REDUX_PERSIST_STATIC_KEY,
      onError: function (error) {
        console.warn(
          `Persist Secret Key Different.\nFrom: persistConfig->transforms->encryptTransform\n${error}`
        );
      },
    }),
  ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const middleWares = [sagaMiddleware].concat(
  process.env.NODE_ENV !== 'production' ? [logger] : []
);

const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

// create store
export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
