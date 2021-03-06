import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import ProductCardComponent from '../../products-card/product-card-component';
import './categories-preview-styles.scss';
const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link to={title}>
          <span className="category-preview-title">{title.toUpperCase()}</span>
        </Link>
      </h2>
      <Stack
        direction={{ xs: 'column', sm: 'column', md: 'row' }}
        justifyContent="space-evenly"
        spacing={2}
      >
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCardComponent product={product} key={product.id} />
          ))}
      </Stack>
    </div>
  );
};

export default CategoryPreview;
