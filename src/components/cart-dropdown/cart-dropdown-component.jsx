import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleIsCartOpen } from '../../store/reducers/cart/cart-action';
import { selectCartItems } from '../../store/reducers/cart/cart-selector';
import CartItem from '../cart-item/cart-item-component';
import {
  CartDropdownContainer,
  CartItems,
  CheckoutButton,
  EmptyMessage,
} from './cart-dropdown-styles';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const checkoutBtnClickHandler = () => dispatch(toggleIsCartOpen());

  return (
    <CartDropdownContainer>
      {cartItems.length !== 0 ? (
        <>
          <CartItems>
            {cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} cartItem={cartItem} />
            ))}
          </CartItems>
          <Link to="/checkout">
            <CheckoutButton onClick={() => checkoutBtnClickHandler()}>
              Checkout
            </CheckoutButton>
          </Link>
        </>
      ) : (
        <EmptyMessage>
          Cart is empty!
          <Link to="/shop">
            <u>SHOP</u>
          </Link>
        </EmptyMessage>
      )}
    </CartDropdownContainer>
  );
};

export default CartDropdown;
