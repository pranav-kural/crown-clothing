import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from '../../store/reducers/categories/categories-selector';
import ProductCardComponent from '../products-card/product-card-component';
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
    <div className="category-products">
      <h2>{category.toUpperCase()}</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <Grid
          container
          direction="row"
          spacing={{ xs: 2, md: 3 }}
          rowSpacing={4}
          alignContent="center"
          justifyContent="center"
        >
          {products &&
            products.map((product) => (
              <Grid item xs={12} sm={12} md={6} lg={3} xl={2}>
                <ProductCardComponent product={product} key={product.id} />
              </Grid>
            ))}
        </Grid>
      )}
    </div>
  );
};

export default CategoryProducts;
