import { Route, Routes } from 'react-router-dom';
import ProductsPreview from '../../components/products-preview/products-preview-component';

const Shop = () => {
  return (
    <Routes>
      <Route index element={<ProductsPreview />} />
    </Routes>
  );
};

export default Shop;
