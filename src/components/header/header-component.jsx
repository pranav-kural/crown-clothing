import { Divider, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import CCLogo from './cc-logo';
import Navigation from './navigation/navigation-component';

const Header = () => {
  return (
    <Stack
      direction="column"
      alignContent="center"
      backgroundColor="rgba(255, 255, 255, 0.7)"
      borderRadius="0.75rem 0.75rem 0 0"
    >
      <Stack alignItems="center">
        <Link to="/" style={{ display: 'contents' }}>
          <Stack height="15vh" width="fit-content">
            <CCLogo />
            <Typography
              variant="subtitle2"
              color="text.secondary"
              align="center"
              fontFamily="Montserrat, sans-serif"
            >
              <Divider />
              CROWN ⦿ CLOTHING
            </Typography>
          </Stack>
        </Link>
      </Stack>
      <Navigation />
    </Stack>
  );
};

export default Header;
