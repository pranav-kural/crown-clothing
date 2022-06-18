import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/cart-context';
import Button from '../button/button-component';
import CartItem from '../cart-item/cart-item-component';
import './cart-dropdown-styles.scss';

const CartDropdown = () => {
  const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <Link to="/checkout">
        <Button onClick={() => setIsCartOpen(!isCartOpen)}>Checkout</Button>
      </Link>
    </div>
  );
};

export default CartDropdown;
