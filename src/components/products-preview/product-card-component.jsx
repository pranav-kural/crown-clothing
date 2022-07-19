import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../store/reducers/cart/cart-action';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './product-card-styles.scss';
import { AddToCartButton } from './product-card-styles';
import { BUTTON_TYPES } from '../button/button-component';

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
      <AddToCartButton
        variant={BUTTON_TYPES.contained}
        onClick={addProductToCart}
        size="large"
      >
        Add to cart
        <AddShoppingCartIcon fontSize="medium" sx={{ marginLeft: '0.5rem' }} />
      </AddToCartButton>
    </div>
  );
};

export default ProductCardComponent;
