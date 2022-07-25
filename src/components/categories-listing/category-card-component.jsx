import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import {
  CategoryCardDiv,
  CategoryCardImage,
  CategoryCardBody,
} from './styles/categories-listing-styles';

const CategoryCard = ({ title, imageUrl }) => {
  return (
    <CategoryCardDiv>
      <CategoryCardImage
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <CategoryCardBody>
        <Typography variant="h5" fontFamily="Montserrat, Roboto, san-serif">
          {title.toUpperCase()}
        </Typography>
        <Link to={`shop/${title}`}>
          <Typography variant="p" paddingTop="1rem">
            Shop Now
          </Typography>
        </Link>
      </CategoryCardBody>
    </CategoryCardDiv>
  );
};
export default CategoryCard;
