import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

export const selectCartData = createSelector([selectCart], (cart) => ({
  cartItems: cart?.cartItems,
  isCartOpen: cart?.isCartOpen,
  cartCount: cart?.cartCount,
  cartTotal: cart?.cartTotal,
}));

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart?.cartItems
);

export const selectIsCartOpen = createSelector(
  [selectCart],
  (cart) => cart?.isCartOpen
);

export const selectCartCount = createSelector(
  [selectCart],
  (cart) => cart?.cartCount
);

export const selectCartTotal = createSelector(
  [selectCart],
  (cart) => cart?.cartTotal
);
