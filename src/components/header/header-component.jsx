import { Stack, Typography } from '@mui/material';
import Navigation from './navigation/navigation-component';

const Header = () => {
  return (
    <Stack direction="column">
      <Typography variant="h2" align="center">
        Crown Clothing
      </Typography>
      <Navigation />
    </Stack>
  );
};

export default Header;
