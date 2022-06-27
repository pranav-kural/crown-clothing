import { combineReducers } from 'redux';
import { cartReducer } from './reducers/cart/cart-reducer';
import { categoriesReducer } from './reducers/categories/categories-reducer';
import { userReducer } from './reducers/user/user-reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});
