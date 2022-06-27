import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../store/reducers/cart/cart-action';
import Button, { BUTTON_TYPES } from '../button/button-component';
import './product-card-styles.scss';

const ProductCardComponent = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const addProductToCart = () => dispatch(addItemToCart(product));

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType={BUTTON_TYPES.inverted} onClick={addProductToCart}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCardComponent;
