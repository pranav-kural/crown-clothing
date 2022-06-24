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
        <p>Shop Now</p>
      </CategoryCartBody>
    </CategoryCardDiv>
  );
};
export default CategoryCard;
