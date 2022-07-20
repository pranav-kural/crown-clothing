import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleIsCartOpen } from '../../store/reducers/cart/cart-action';
import { selectCartItems } from '../../store/reducers/cart/cart-selector';
import Button, { BUTTON_TYPES } from '../button/button-component';
import CartItem from '../cart-item/cart-item-component';
import {
  CartDropdownContainer,
  CartItems,
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
            <Button
              buttonType={BUTTON_TYPES.DefaultContainedBtn}
              onClick={() => checkoutBtnClickHandler()}
            >
              Checkout
            </Button>
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
