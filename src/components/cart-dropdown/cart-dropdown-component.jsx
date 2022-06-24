import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/cart-context';
import CartItem from '../cart-item/cart-item-component';
import {
  CartDropdownContainer,
  CartItems,
  CheckoutButton,
  EmptyMessage,
} from './cart-dropdown-styles';

const CartDropdown = () => {
  const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);

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
            <CheckoutButton onClick={() => setIsCartOpen(!isCartOpen)}>
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
