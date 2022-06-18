import CategoriesListing from '../../components/categories-listing/categories-listing-component';
import CategoriesData from '../../data/categories.json';

const Home = () => {
  const categories = CategoriesData;

  return <CategoriesListing categories={categories} />;
};

export default Home;
