import { Link } from 'react-router-dom';
import {
  CategoryCardDiv,
  CategoryCardImage,
  CategoryCartBody,
} from './styles/categories-listing-styles';

const CategoryCard = ({ title, imageUrl }) => {
  return (
    <CategoryCardDiv>
      <CategoryCardImage
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <CategoryCartBody>
        <h2>{title}</h2>
        <Link to={`shop/${title}`}>
          <p>Shop Now</p>
        </Link>
      </CategoryCartBody>
    </CategoryCardDiv>
  );
};
export default CategoryCard;
