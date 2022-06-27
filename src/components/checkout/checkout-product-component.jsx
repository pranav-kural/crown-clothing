import { useDispatch } from 'react-redux';
import {
  decreaseItemQuantity,
  increaseItemQuantity,
  removeItemFromCart,
} from '../../store/reducers/cart/cart-action';
import Button from '../button/button-component';

const CheckoutProductListing = ({ cartItems }) => {
  const dispatch = useDispatch();

  return cartItems.map(({ id, imageUrl, name, quantity, price }) => (
    <div className="orders-container-product-row" key={id}>
      <span>
        <img className="checkout-product-image" src={imageUrl} alt={name} />
      </span>
      <span>{name}</span>
      <span>
        <Button
          buttonType="unstyled"
          onClick={() => dispatch(decreaseItemQuantity(id))}
        >
          {'❮'}
        </Button>
        {quantity}
        <Button
          buttonType="unstyled"
          onClick={() => dispatch(increaseItemQuantity(id))}
        >
          {'❯'}
        </Button>
      </span>
      <span>${price}</span>
      <span>
        <Button
          buttonType="unstyled"
          onClick={() => dispatch(removeItemFromCart(id))}
        >
          &#10005;
        </Button>
      </span>
    </div>
  ));
};
export default CheckoutProductListing;
