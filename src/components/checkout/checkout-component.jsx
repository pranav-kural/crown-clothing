import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/cart-context';
import Button from '../button/button-component';
import './styles/checkout-styles.scss';

const CheckoutComponent = () => {
  const {
    cartItems,
    increaseItemQuantity,
    removeItemFromCart,
    decreaseItemQuantity,
  } = useContext(CartContext);
  // const { cartItems, removeItemFromCart } = useContext(CartContext);

  return (
    <div className="checkout">
      <div className="orders-container">
        <div className="orders-container-row">
          <span>Product</span>
          <span>Description</span>
          <span>Quantity</span>
          <span>Price</span>
          <span>Remove</span>
        </div>
        {cartItems.length !== 0 ? (
          cartItems.map(({ id, imageUrl, name, quantity, price }) => (
            <div className="orders-container-row" key={id}>
              <span>
                <img
                  className="checkout-product-image"
                  src={imageUrl}
                  alt={name}
                />
              </span>
              <span>{name}</span>
              <span>
                <Button
                  buttonType="unstyled"
                  onClick={() => decreaseItemQuantity(id)}
                >
                  {'❮'}
                </Button>
                {quantity}
                <Button
                  buttonType="unstyled"
                  onClick={() => increaseItemQuantity(id)}
                >
                  {'❯'}
                </Button>
              </span>
              <span>${price}</span>
              <span>
                <Button
                  buttonType="unstyled"
                  onClick={() => removeItemFromCart(id)}
                >
                  X
                </Button>
              </span>
            </div>
          ))
        ) : (
          <div className="orders-container-empty-cart-message">
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
