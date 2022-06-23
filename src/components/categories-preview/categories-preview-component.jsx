import { Link } from 'react-router-dom';
import ProductCardComponent from '../products-preview/product-card-component';
import './categories-preview-styles.scss';
const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link to={title}>
          <span className="category-preview-title">{title.toUpperCase()}</span>
        </Link>
      </h2>
      <div className="category-preview-products">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCardComponent product={product} key={product.id} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
