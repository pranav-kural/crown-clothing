/**
 * Helper functions for working with the cart
 */

export const addCartItem = (cartItems, productToAdd) => {
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

export const removeCartItem = (cartItems, productId) => {
  return cartItems.filter((item) => item.id !== productId);
};

export const increaseCartItem = (cartItems, productId) => {
  return cartItems.map((cartItem) =>
    cartItem.id === productId
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
  );
};

export const decreaseCartItem = (cartItems, productId) => {
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
