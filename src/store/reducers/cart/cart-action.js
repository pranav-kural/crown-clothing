import { createAction } from '../../../utils/reducers/reducers-utils';
import { store } from '../../store';
import {
  addCartItem,
  decreaseCartItem,
  increaseCartItem,
  removeCartItem,
} from './cart-helpers';

export const CART_ACTION_TYPES = {
  TOGGLE_IS_CART_OPEN: 'cart/TOGGLE_IS_CART_OPEN',
  UPDATE_CART_ITEMS: 'cart/UPDATE_CART_ITEMS',
  CLEAR_CART_ITEMS: 'cart/CLEAR_CART_ITEMS',
};

const updateCartItems = (actionFunction, params) => {
  const cartItems = store.getState()?.cart?.cartItems;

  if (!cartItems) return;

  const newCartItems = actionFunction(cartItems, params);

  const newCartCount = newCartItems?.reduce(
    (prev, next) => prev + next.quantity,
    0
  );

  const newCartTotal = newCartItems?.reduce(
    (currentTotal, cartItem) =>
      currentTotal + cartItem?.quantity * cartItem?.price,
    0
  );

  return createAction(CART_ACTION_TYPES.UPDATE_CART_ITEMS, {
    cartItems: newCartItems,
    cartCount: newCartCount,
    cartTotal: newCartTotal,
  });
};

export const toggleIsCartOpen = () =>
  createAction(CART_ACTION_TYPES.TOGGLE_IS_CART_OPEN);

export const addItemToCart = (productToAdd) =>
  updateCartItems(addCartItem, productToAdd);

export const removeItemFromCart = (productToRemove) =>
  updateCartItems(removeCartItem, productToRemove);

export const decreaseItemQuantity = (productId) =>
  updateCartItems(decreaseCartItem, productId);

export const increaseItemQuantity = (productId) =>
  updateCartItems(increaseCartItem, productId);

export const clearCartItems = () =>
  createAction(CART_ACTION_TYPES.CLEAR_CART_ITEMS);
