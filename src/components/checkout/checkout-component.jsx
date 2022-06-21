import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/cart-context';
import CheckoutProductListing from './checkout-product-component';
import './styles/checkout-styles.scss';

const CheckoutComponent = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="checkout">
      <div className="orders-container">
        <div className="orders-container-product-row orders-container-header">
          <span>Product</span>
          <span>Description</span>
          <span>Quantity</span>
          <span>Price</span>
          <span>Remove</span>
        </div>
        {cartItems.length !== 0 ? (
          <>
            <CheckoutProductListing />
            <div className="orders-container-message">
              <span className="orders-total">
                TOTAL: $
                {cartItems.reduce(
                  (currentTotal, cartItem) =>
                    currentTotal + cartItem?.quantity * cartItem?.price,
                  0
                )}
              </span>
            </div>
          </>
        ) : (
          <div className="orders-container-message">
            <span>
              <strong>Your cart is empty! :(</strong>
            </span>
            <span>
              <Link to="/shop">
                <u>Check Products</u>
              </Link>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutComponent;
