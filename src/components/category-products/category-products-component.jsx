import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../contexts/categories-context';
import ProductCardComponent from '../products-preview/product-card-component';
import './category-products-styles.scss';

const CategoryProducts = () => {
  // get category from URL
  const { category } = useParams();
  // if valid category
  const { categoriesMap } = useContext(CategoriesContext);
  // set products
  const [products, setProducts] = useState(categoriesMap[category]);

  // update products only if categoriesMap change
  useEffect(() => {
    // check if valid category
    if (!category && Object.keys(categoriesMap).includes(category)) return;
    // update products
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <div className="category-products-container">
      {products &&
        products.map((product) => (
          <ProductCardComponent product={product} key={product.id} />
        ))}
    </div>
  );
};

export default CategoryProducts;
