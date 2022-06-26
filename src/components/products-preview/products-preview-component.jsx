import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/reducers/categories/categories-selector';
import CategoryPreview from '../categories-preview/categories-preview-component';

const ProductsPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  return (
    <>
      {Object.entries(categoriesMap).map(([title, items]) => (
        <CategoryPreview title={title} products={items} key={title} />
      ))}
    </>
  );
};

export default ProductsPreview;
