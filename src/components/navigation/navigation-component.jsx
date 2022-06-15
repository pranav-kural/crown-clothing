import { useContext } from 'react';
import { Link } from 'react-router-dom';
import './styles/navigation-styles.scss';
import { UserContext } from '../../contexts/user-context';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

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
          <Link className="nav-link" to="/auth">
            Login
          </Link>
        ) : (
          <Link className="nav-link" to="/auth">
            Logout
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
