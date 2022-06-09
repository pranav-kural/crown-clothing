import CategoryCard from './category-card-component';

import './styles/categories-listing-styles.scss';

const CategoriesListing = ({ categories }) => (
  <div className="categories-container">
    {categories.map((category) => (
      <CategoryCard title={category.title} key={category.id} />
    ))}
  </div>
);

export default CategoriesListing;
