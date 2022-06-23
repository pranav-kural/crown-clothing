import { useContext } from 'react';
import { CategoriesContext } from '../../contexts/categories-context';
import CategoryPreview from '../category-preview/category-preview-component';

const ProductsPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <>
      {Object.entries(categoriesMap).map(([title, items]) => (
        <CategoryPreview title={title} products={items} key={title} />
      ))}
    </>
  );
};

export default ProductsPreview;
