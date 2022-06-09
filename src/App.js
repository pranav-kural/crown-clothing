import CategoriesListing from './components/categories-listing/categories-listing-component';

import CategoriesData from './data/categories.json';

const App = () => {
  const categories = CategoriesData;

  return (
    <div className="app-container">
      <CategoriesListing categories={categories} />
    </div>
  );
};

export default App;
