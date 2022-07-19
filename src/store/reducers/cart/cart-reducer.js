import { CART_ACTION_TYPES } from './cart-action';

// initial cart state schema
const INITIAL_CART_STATE = {
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
  isCartOpen: false,
};

export const cartReducer = (state = INITIAL_CART_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.TOGGLE_IS_CART_OPEN:
      return { ...state, isCartOpen: !state.isCartOpen };
    case CART_ACTION_TYPES.UPDATE_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPES.CLEAR_CART_ITEMS:
      return INITIAL_CART_STATE;
    default:
      return state;
  }
};
