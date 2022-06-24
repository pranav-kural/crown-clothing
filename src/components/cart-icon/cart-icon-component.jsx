import { useContext } from 'react';
import { CartContext } from '../../contexts/cart-context';
import {
  CartIconContainer,
  CartIconSVG,
  CartItemCount,
} from './cart-icon-styles';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const { cartCount } = useContext(CartContext);

  return (
    <CartIconContainer onClick={() => setIsCartOpen(!isCartOpen)}>
      <CartIconSVG />
      <CartItemCount>{cartCount}</CartItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
