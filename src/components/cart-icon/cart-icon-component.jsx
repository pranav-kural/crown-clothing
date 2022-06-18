import { useContext } from 'react';
import { ReactComponent as CartIconSVG } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cart-context';
import './cart-icon-styles.scss';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const { cartCount } = useContext(CartContext);

  return (
    <div
      className="cart-icon-container"
      onClick={() => setIsCartOpen(!isCartOpen)}
    >
      <CartIconSVG className="cart-icon-svg" />
      <span className="cart-item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
