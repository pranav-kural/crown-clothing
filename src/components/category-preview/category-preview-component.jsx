import ProductCardComponent from '../products/product-card-component';
import './category-preview-styles.scss';
const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <span className="category-preview-title">{title.toUpperCase()}</span>
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
