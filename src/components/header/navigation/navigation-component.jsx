import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../store/reducers/user/user-selector';
import CartIcon from './cart-icon/cart-icon-component';
import CartDropdown from './cart-dropdown/cart-dropdown-component';

import { NavLink } from './styles/navigation-styles';
import { selectIsCartOpen } from '../../../store/reducers/cart/cart-selector';
import { Box, Stack } from '@mui/material';
import Button, { BUTTON_TYPES } from '../../button/button-component';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <Box
      backgroundColor="rgba(217, 217, 217, 0.3)"
      marginY="2vh"
      paddingY="0.5vh"
    >
      <Stack
        direction="row"
        width="100%"
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack direction="row" alignItems="center" justifyContent="flex-start">
          <NavLink to="/">
            <Button buttonType={BUTTON_TYPES.DefaultBtn} sx={{ margin: '0' }}>
              Home
            </Button>
          </NavLink>
          <NavLink to="/shop">
            <Button buttonType={BUTTON_TYPES.DefaultBtn} sx={{ margin: '0' }}>
              Shop
            </Button>
          </NavLink>
          {!currentUser ? (
            <NavLink to="/login">
              <Button buttonType={BUTTON_TYPES.DefaultBtn} sx={{ margin: '0' }}>
                Login
              </Button>
            </NavLink>
          ) : (
            <NavLink to="/logout">
              <Button buttonType={BUTTON_TYPES.DefaultBtn} sx={{ margin: '0' }}>
                Logout
              </Button>
            </NavLink>
          )}
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent="flex-end">
          <Button
            buttonType={BUTTON_TYPES.DefaultBtn}
            sx={{ margin: '0', padding: '0' }}
          >
            <CartIcon />
          </Button>
        </Stack>
      </Stack>
      {isCartOpen && <CartDropdown />}
    </Box>
  );
};

export default Navigation;
