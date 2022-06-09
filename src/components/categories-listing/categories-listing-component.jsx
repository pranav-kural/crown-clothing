import CategoryCard from './category-card-component';

import './styles/categories-listing-styles.scss';

const CategoriesListing = ({ categories }) => (
  <div className="categories-container">
    {categories.map((category) => (
      <CategoryCard
        key={category.id}
        title={category.title}
        imageUrl={category.imageUrl}
      />
    ))}
  </div>
);

export default CategoriesListing;
