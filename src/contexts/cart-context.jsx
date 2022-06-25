import { createContext, useReducer } from 'react';

const addCartItem = (cartItems, productToAdd) => {
  // find if productToAdd already in cartItems
  const productInCart = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  // if not present in the cartItems, return new array containing it
  // if product already in cartItems, increment quantity
  return !productInCart
    ? [...cartItems, { ...productToAdd, quantity: 1 }]
    : increaseCartItem(cartItems, productToAdd.id);
};

const removeCartItem = (cartItems, productId) => {
  return cartItems.filter((item) => item.id !== productId);
};

const increaseCartItem = (cartItems, productId) => {
  return cartItems.map((cartItem) =>
    cartItem.id === productId
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
  );
};

const decreaseCartItem = (cartItems, productId) => {
  // check if product quantity is 1
  const removeProduct =
    cartItems.find((cartItem) => cartItem.id === productId)?.quantity === 1;
  // if product's current quantity 1, remove the product from cart, else
  // decrement the quantity
  return removeProduct
    ? removeCartItem(cartItems, productId)
    : cartItems.map((cartItem) =>
        cartItem.id === productId
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
});

// CartContext state schema
const INITIAL_CART_STATE = {
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
  isCartOpen: false,
};

export const CART_ACTION_TYPES = {
  TOGGLE_IS_CART_OPEN: 'TOGGLE_IS_CART_OPEN',
  UPDATE_CART_ITEMS: 'UPDATE_CART_ITEMS',
};

const checkValidCartActionType = (type) => {
  return type && Object.keys(CART_ACTION_TYPES).includes(type);
};

const cartReducer = (state, action) => {
  const { type, payload } = action;
  // if invalid action requested
  if (!checkValidCartActionType(type)) {
    throw new Error(`cartReducer called with Unhandler action type: ${type}`);
  }

  switch (type) {
    case CART_ACTION_TYPES.TOGGLE_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      };
    case CART_ACTION_TYPES.UPDATE_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    default:
      throw new Error(`cartReducer called with Unhandler action type: ${type}`);
  }
};

const updateCartItems = (newCartItems, dispatch) => {
  const newCartCount = newCartItems?.reduce(
    (prev, next) => prev + next.quantity,
    0
  );

  const newCartTotal = newCartItems.reduce(
    (currentTotal, cartItem) =>
      currentTotal + cartItem?.quantity * cartItem?.price,
    0
  );

  dispatch({
    type: CART_ACTION_TYPES.UPDATE_CART_ITEMS,
    payload: {
      cartItems: newCartItems,
      cartCount: newCartCount,
      cartTotal: newCartTotal,
    },
  });
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_CART_STATE);
  const { isCartOpen, cartItems, cartCount } = state;

  const setIsCartOpen = () =>
    dispatch({ type: CART_ACTION_TYPES.TOGGLE_IS_CART_OPEN });

  const addItemToCart = (productToAdd) =>
    updateCartItems(addCartItem(cartItems, productToAdd), dispatch);

  const removeItemFromCart = (productToRemove) =>
    updateCartItems(removeCartItem(cartItems, productToRemove), dispatch);

  const decreaseItemQuantity = (productId) =>
    updateCartItems(decreaseCartItem(cartItems, productId), dispatch);

  const increaseItemQuantity = (productId) =>
    updateCartItems(increaseCartItem(cartItems, productId), dispatch);

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    increaseItemQuantity,
    removeItemFromCart,
    decreaseItemQuantity,
    cartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
