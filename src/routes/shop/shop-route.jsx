import { Route, Routes } from 'react-router-dom';
import CategoryProducts from '../../components/category-products/category-products-component';
import ProductsPreview from '../../components/products-preview/products-preview-component';

const Shop = () => {
  return (
    <Routes>
      <Route index element={<ProductsPreview />} />
      <Route path=":category" element={<CategoryProducts />} />
    </Routes>
  );
};

export default Shop;
