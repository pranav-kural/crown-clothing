import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from '../../store/reducers/categories/categories-selector';
import ProductCardComponent from '../products-preview/product-card-component';
import Spinner from '../spinner/spinner-component';
import './category-products-styles.scss';

const CategoryProducts = () => {
  // get category from URL
  const { category } = useParams();
  // if valid category
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
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
    <div className='category-products'>
      <h2>{category.toUpperCase()}</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="category-products-container">
          {products &&
            products.map((product) => (
              <ProductCardComponent product={product} key={product.id} />
            ))}
        </div>
      )}
    </div>
  );
};

export default CategoryProducts;
