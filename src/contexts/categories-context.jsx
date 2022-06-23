import { createContext, useEffect, useState } from 'react';
// import { SHOP_DATA } from '../data/shop-data';
import { getCategoriesAndDocuments } from '../utils/firebase/firebase-utils.js';

export const CategoriesContext = createContext({
  categoriesMap: [],
  setCategoriesMap: () => [],
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  const value = { categoriesMap, setCategoriesMap };

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoriesMap);
    };
    getCategoriesMap();
  }, []);

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
