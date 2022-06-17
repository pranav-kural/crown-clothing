import Button from '../button/button-component';
import './products-styles.scss';

const ProductCardComponent = ({ product }) => (
  <div className="product-card-container">
    <img src={product.imageUrl} alt={product.name} />
    <div className="footer">
      <span className="name">{product.name}</span>
      <span className="price">{product.price}</span>
    </div>
    <Button buttonType="inverted">Add to cart</Button>
  </div>
);

export default ProductCardComponent;
