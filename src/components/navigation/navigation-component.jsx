import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/reducers/user/user-selector';

import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import { CartContext } from '../../contexts/cart-context';
import CartIcon from '../cart-icon/cart-icon-component';
import CartDropdown from '../cart-dropdown/cart-dropdown-component';

import {
  LogoContainer,
  NavigationContainer,
  NavLink,
  NavLinksContainer,
} from './styles/navigation-styles';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  // const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <NavigationContainer>
      <LogoContainer to="/">
        <CrownLogo className="logo" />
      </LogoContainer>
      <NavLinksContainer>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        {!currentUser ? (
          <NavLink to="/login">Login</NavLink>
        ) : (
          <NavLink to="/logout">Logout</NavLink>
        )}
        <CartIcon />
      </NavLinksContainer>
      {isCartOpen && <CartDropdown />}
    </NavigationContainer>
  );
};

export default Navigation;
