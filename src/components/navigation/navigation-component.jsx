import { useContext } from 'react';
import { Link } from 'react-router-dom';
import './styles/navigation-styles.scss';
import { UserContext } from '../../contexts/user-context';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon-component';
import CartDropdown from '../cart-dropdown/cart-dropdown-component';
import { CartContext } from '../../contexts/cart-context';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <nav className="navigation">
      <Link className="logo-container" to="/">
        <CrownLogo className="logo" />
      </Link>
      <div className="nav-links-container">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/shop">
          Shop
        </Link>
        {!currentUser ? (
          <Link className="nav-link" to="/login">
            Login
          </Link>
        ) : (
          <Link className="nav-link" to="/logout">
            Logout
          </Link>
        )}
        <CartIcon />
      </div>
      {isCartOpen && <CartDropdown />}
    </nav>
  );
};

export default Navigation;
