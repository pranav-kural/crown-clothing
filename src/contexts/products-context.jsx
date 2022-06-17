import { createContext, useState } from 'react';
import PRODUCTS_DATA from '../data/shop-data.json';

export const ProductsContext = createContext({
  products: [],
  setProducts: () => [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS_DATA);
  const value = { products, setProducts };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
