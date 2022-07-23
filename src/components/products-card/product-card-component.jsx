import { useDispatch } from 'react-redux';
import { Card } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { addItemToCart } from '../../store/reducers/cart/cart-action';
import Button, { BUTTON_TYPES } from '../button/button-component';
import './product-card-styles.scss';

const ProductCardComponent = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const addProductToCart = () => dispatch(addItemToCart(product));

  return (
    <Card variant="outlined">
      <div className="product-card-container">
        <img src={imageUrl} alt={name} />
        <div className="footer">
          <span className="name">{name}</span>
          <span className="price">${price}</span>
        </div>
        <Button
          buttonType={BUTTON_TYPES.AddToCartBtn}
          onClick={addProductToCart}
          size="large"
          className="add-to-cart-button"
          children={
            <>
              Add to cart
              <AddShoppingCartIcon
                fontSize="medium"
                sx={{ marginLeft: '0.5rem' }}
              />
            </>
          }
        />
      </div>
    </Card>
  );
};

export default ProductCardComponent;
