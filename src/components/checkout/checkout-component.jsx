import { useContext } from 'react';
import { CartContext } from '../../contexts/cart-context';
import Button from '../button/button-component';
import './styles/checkout-styles.scss';

const CheckoutComponent = () => {
  // const { cartItems, addItemToCart, removeItemFromCart, decreaseItemQuantity } =
  //   useContext(CartContext);
  const { cartItems, removeItemFromCart } = useContext(CartContext);

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
        <div className="orders-container-row">
          <span>Hello</span>
          <span>Shirt</span>
          <span>4</span>
          <span>$20</span>
          <span>X</span>
        </div>
        {cartItems.map(({ id, imageUrl, name, quantity, price }) => (
          <div className="orders-container-row" key={id}>
            <span>
              <img
                className="checkout-product-image"
                src={imageUrl}
                alt={name}
              />
            </span>
            <span>{name}</span>
            <span>{quantity}</span>
            <span>{price}</span>
            <span>
              <Button buttonType="unstyled" onClick={()=> removeItemFromCart(id)}>
                X
              </Button>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckoutComponent;
