import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectCartData } from '../../store/reducers/cart/cart-selector';
import CheckoutProductListing from './checkout-product-component';
import PaymentForm from './payment-form/payment-form-component';
import './styles/checkout-styles.scss';

const CheckoutComponent = () => {
  const { cartItems, cartTotal } = useSelector(selectCartData);

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
            <CheckoutProductListing cartItems={cartItems} />
            <div className="orders-container-message">
              <span className="orders-total">TOTAL: ${cartTotal}</span>
              <PaymentForm />
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
