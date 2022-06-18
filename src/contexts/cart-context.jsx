import { createContext, useEffect, useState } from 'react';

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

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    setCartCount(cartItems?.reduce((prev, next) => prev + next.quantity, 0));
  }, [cartCount, cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const decreaseItemQuantity = (productToDecrease) => {
    setCartItems(decreaseCartItem(cartItems, productToDecrease));
  };

  const increaseItemQuantity = (productId) =>
    setCartItems(increaseCartItem(cartItems, productId));

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
