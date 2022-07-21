import { Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import CCLogo from './cc-logo';
import Navigation from './navigation/navigation-component';

const Header = () => {
  return (
    <Stack direction="column" alignContent="center">
      <Stack alignItems="center">
        <Link to="/" style={{ display: 'contents' }}>
          <Stack height="15vh" width="fit-content">
            <CCLogo />
            <Typography
              variant="subtitle1"
              align="center"
              fontFamily="Montserrat, sans-serif"
            >
              Crown Clothing
            </Typography>
          </Stack>
        </Link>
      </Stack>
      <Navigation />
    </Stack>
  );
};

export default Header;
