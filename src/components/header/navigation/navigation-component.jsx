import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../store/reducers/user/user-selector';
import CartIcon from './cart-icon/cart-icon-component';
import CartDropdown from './cart-dropdown/cart-dropdown-component';

import { NavLink } from './styles/navigation-styles';
import { selectIsCartOpen } from '../../../store/reducers/cart/cart-selector';
import { Stack } from '@mui/material';
import Button, { BUTTON_TYPES } from '../../button/button-component';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <Stack direction="row" alignItems="center">
      <Stack
        direction="row"
        width="100%"
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack direction="row" alignItems="center" justifyContent="flex-start">
          <NavLink to="/">
            <Button buttonType={BUTTON_TYPES.DefaultBtn}>Home</Button>
          </NavLink>
          <NavLink to="/shop">
            <Button buttonType={BUTTON_TYPES.DefaultBtn}>Shop</Button>
          </NavLink>
          {!currentUser ? (
            <NavLink to="/login">
              <Button buttonType={BUTTON_TYPES.DefaultBtn}>Login</Button>
            </NavLink>
          ) : (
            <NavLink to="/logout">
              <Button buttonType={BUTTON_TYPES.DefaultBtn}>Logout</Button>
            </NavLink>
          )}
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent="flex-end">
          <Button buttonType={BUTTON_TYPES.DefaultBtn}>
            <CartIcon />
          </Button>
        </Stack>
      </Stack>
      {isCartOpen && <CartDropdown />}
    </Stack>
  );
};

export default Navigation;
