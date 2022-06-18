import './cart-item-styles.scss';

const CartItem = ({ cartItem }) => {
  const { name, quantity } = cartItem;
  return (
    <div className="cart-item-container">
      <h2 className="name">{name}</h2>
      <span className="item-details">{quantity}</span>
    </div>
  );
};

export default CartItem;
