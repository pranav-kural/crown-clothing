import { useDispatch } from 'react-redux';
import {
  decreaseItemQuantity,
  increaseItemQuantity,
  removeItemFromCart,
} from '../../store/reducers/cart/cart-action';
import Button, { BUTTON_TYPES } from '../button/button-component';

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
          variant={BUTTON_TYPES.unstyled}
          onClick={() => dispatch(decreaseItemQuantity(id))}
        >
          {'❮'}
        </Button>
        {quantity}
        <Button
          variant={BUTTON_TYPES.unstyled}
          onClick={() => dispatch(increaseItemQuantity(id))}
        >
          {'❯'}
        </Button>
      </span>
      <span>${price}</span>
      <span>
        <Button
          variant={BUTTON_TYPES.unstyled}
          onClick={() => dispatch(removeItemFromCart(id))}
        >
          &#10005;
        </Button>
      </span>
    </div>
  ));
};
export default CheckoutProductListing;
