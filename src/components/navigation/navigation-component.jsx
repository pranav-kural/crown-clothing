import { useContext } from 'react';
import { UserContext } from '../../contexts/user-context';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon-component';
import CartDropdown from '../cart-dropdown/cart-dropdown-component';
import { CartContext } from '../../contexts/cart-context';

import {
  LogoContainer,
  NavigationContainer,
  NavLink,
  NavLinksContainer,
} from './styles/navigation-styles';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
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
