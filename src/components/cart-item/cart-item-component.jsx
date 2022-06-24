import {
  CartItemContainer,
  ItemDetails,
  ProductImage,
  ProductName,
} from './cart-item-styles';

const CartItem = ({ cartItem }) => {
  const { name, price, imageUrl, quantity } = cartItem;
  return (
    <CartItemContainer>
      <ProductImage src={imageUrl} alt={name} />
      <ItemDetails>
        <ProductName>{name}</ProductName>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
