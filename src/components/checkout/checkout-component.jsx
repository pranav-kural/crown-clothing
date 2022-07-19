import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { clearCartItems } from '../../store/reducers/cart/cart-action';
import { selectCartData } from '../../store/reducers/cart/cart-selector';
import { selectUserLoggedIn } from '../../store/reducers/user/user-selector';
import Button, { BUTTON_TYPES } from '../button/button-component';
import Spinner from '../spinner/spinner-component';
import CheckoutProductListing from './checkout-product-component';
import PaymentForm from './payment-form/payment-form-component';
import './styles/checkout-styles.scss';

const CheckoutComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems, cartTotal } = useSelector(selectCartData);
  const userLoggedIn = useSelector(selectUserLoggedIn);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState('');

  const tryAgainHandler = (e) => {
    e.preventDefault();
    setIsProcessingPayment(false);
    setPaymentStatus('');
  };

  const freshStartHandler = (e) => {
    tryAgainHandler(e);
    dispatch(clearCartItems());
    navigate('/');
  };

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
              {userLoggedIn ? (
                <>
                  {paymentStatus === '' ? (
                    <>
                      <div
                        className={
                          isProcessingPayment
                            ? 'hidden'
                            : 'payment-form-container'
                        }
                      >
                        <PaymentForm
                          setProcessingPayment={setIsProcessingPayment}
                          setPaymentStatus={setPaymentStatus}
                        />
                      </div>
                      <div
                        className={
                          isProcessingPayment
                            ? 'payment-processing-message'
                            : 'hidden'
                        }
                      >
                        Payment being processed...
                        <Spinner />
                      </div>
                    </>
                  ) : paymentStatus === 'success' ? (
                    <div className="payment-status-container">
                      <div>WooHoo! Payment successful! 🥳</div>
                      <Button
                        buttonType={BUTTON_TYPES.google}
                        onClick={freshStartHandler}
                      >
                        Fresh Start
                      </Button>
                    </div>
                  ) : (
                    <div className="payment-status-container">
                      <div>Oh-no! payment failed! 😧</div>
                      <Button
                        buttonType={BUTTON_TYPES.default}
                        onClick={tryAgainHandler}
                      >
                        Try again!
                      </Button>
                    </div>
                  )}
                </>
              ) : (
                <div className="login-before-checkout">
                  <span>Please login before checkout</span>
                  <Button buttonType={BUTTON_TYPES.google}>
                    <Link to="/login">LOGIN</Link>
                  </Button>
                </div>
              )}
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
