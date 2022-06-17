import { useContext } from 'react';
import { ProductsContext } from '../../contexts/products-context';
import ProductCardComponent from './product-card-component';
import './products-styles.scss';

const ProductsComponent = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCardComponent product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductsComponent;
