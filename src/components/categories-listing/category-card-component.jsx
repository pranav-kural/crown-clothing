import {
  CategoryCardBodyHeading,
  CategoryCardBodyParagraph,
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
        <CategoryCardBodyHeading>{title}</CategoryCardBodyHeading>
        <CategoryCardBodyParagraph>Shop Now</CategoryCardBodyParagraph>
      </CategoryCartBody>
    </CategoryCardDiv>
  );
};
export default CategoryCard;
