import CategoryCard from './category-card-component';
import { CategoriesContainer } from './styles/categories-listing-styles';

const CategoriesListing = ({ categories }) => (
  <CategoriesContainer>
    {categories.map((category) => (
      <CategoryCard
        key={category.id}
        title={category.title}
        imageUrl={category.imageUrl}
      />
    ))}
  </CategoriesContainer>
);

export default CategoriesListing;
