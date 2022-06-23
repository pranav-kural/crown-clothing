import { useContext } from 'react';
import { CartContext } from '../../contexts/cart-context';
import Button from '../button/button-component';

const CheckoutProductListing = () => {
  const {
    cartItems,
    increaseItemQuantity,
    removeItemFromCart,
    decreaseItemQuantity,
  } = useContext(CartContext);

  return cartItems.map(({ id, imageUrl, name, quantity, price }) => (
    <div className="orders-container-product-row" key={id}>
      <span>
        <img className="checkout-product-image" src={imageUrl} alt={name} />
      </span>
      <span>{name}</span>
      <span>
        <Button buttonType="unstyled" onClick={() => decreaseItemQuantity(id)}>
          {'❮'}
        </Button>
        {quantity}
        <Button buttonType="unstyled" onClick={() => increaseItemQuantity(id)}>
          {'❯'}
        </Button>
      </span>
      <span>${price}</span>
      <span>
        <Button buttonType="unstyled" onClick={() => removeItemFromCart(id)}>
          &#10005;
        </Button>
      </span>
    </div>
  ));
};
export default CheckoutProductListing;
