import { Divider, Stack } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/reducers/categories/categories-selector';
import CategoryPreview from './categories-preview/categories-preview-component';

const ProductsPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  return (
    <Stack
      direction="column"
      divider={<Divider orientation="horizontal" flexItem />}
    >
      {Object.entries(categoriesMap).map(([title, items]) => (
        <CategoryPreview title={title} products={items} key={title} />
      ))}
    </Stack>
  );
};

export default ProductsPreview;
