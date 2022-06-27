import { useDispatch, useSelector } from 'react-redux';
import { toggleIsCartOpen } from '../../store/reducers/cart/cart-action';
import { selectCartCount } from '../../store/reducers/cart/cart-selector';
import {
  CartIconContainer,
  CartIconSVG,
  CartItemCount,
} from './cart-icon-styles';

const CartIcon = () => {
  const cartCount = useSelector(selectCartCount);
  const dispatch = useDispatch();
  const onCartIconClickHandler = () => dispatch(toggleIsCartOpen());

  return (
    <CartIconContainer onClick={() => onCartIconClickHandler()}>
      <CartIconSVG />
      <CartItemCount>{cartCount}</CartItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
