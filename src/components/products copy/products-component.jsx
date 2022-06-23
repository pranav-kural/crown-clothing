import { useContext } from 'react';
import { CategoriesContext } from '../../contexts/categories-context';
import CategoryPreview from '../categories-preview/category-preview-component';
import './products-styles.scss';

const ProductsComponent = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <div className="shop-container">
      {Object.entries(categoriesMap).map(([title, items]) => (
        <CategoryPreview title={title} products={items} key={title} />
      ))}
    </div>
  );
};

export default ProductsComponent;
