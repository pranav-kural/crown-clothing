import { useDispatch } from 'react-redux';
import { Card, Stack, Typography } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { addItemToCart } from '../../store/reducers/cart/cart-action';
import Button, { BUTTON_TYPES } from '../button/button-component';
import './product-card-styles.scss';

const ProductCardComponent = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const addProductToCart = () => dispatch(addItemToCart(product));

  return (
    <Card>
      <div className="product-card-container">
        <img src={imageUrl} alt={name} />
        <Stack
          direction="row"
          alignContent="center"
          justifyContent="space-between"
          width="100%"
        >
          <Typography variant="span" padding="0.75rem" fontSize="1.2rem">
            {name}
          </Typography>
          <Typography variant="span" padding="0.75rem" fontSize="1.2rem">
            ${price}
          </Typography>
        </Stack>
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
