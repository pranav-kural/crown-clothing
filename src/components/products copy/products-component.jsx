import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/reducers/categories/categories-selector';
import CategoryPreview from '../categories-preview/category-preview-component';
import './products-styles.scss';

const ProductsComponent = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  return (
    <div className="shop-container">
      {Object.entries(categoriesMap).map(([title, items]) => (
        <CategoryPreview title={title} products={items} key={title} />
      ))}
    </div>
  );
};

export default ProductsComponent;
