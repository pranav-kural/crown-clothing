import { createContext, useState } from 'react';

const addCartItem = (cartItems, productToAdd) => {
  // find if productToAdd already in cartItems
  const productInCart = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  // if not present in the cartItems
  if (!productInCart) return [...cartItems, { ...productToAdd, quantity: 1 }];
  // if product already in cartItems, increment quantity
  return cartItems.map((cartItem) =>
    cartItem.id === productToAdd.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
  );
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
