import { useSelector } from 'react-redux';
import {
  selectCategoryListings,
  selectIsLoadingListings,
} from '../../store/reducers/categories/categories-selector';
import Spinner from '../spinner/spinner-component';
import CategoryCard from './category-card-component';
import { CategoriesContainer } from './styles/categories-listing-styles';

const CategoriesListing = () => {
  const categoryListings = useSelector(selectCategoryListings);
  const isLoadingListings = useSelector(selectIsLoadingListings);
  console.log('categories', categoryListings);
  return isLoadingListings ? (
    <Spinner />
  ) : (
    <CategoriesContainer>
      {categoryListings &&
        categoryListings.map(({ title, imageUrl }) => (
          <CategoryCard key={title} title={title} imageUrl={imageUrl} />
        ))}
    </CategoriesContainer>
  );
};

export default CategoriesListing;
