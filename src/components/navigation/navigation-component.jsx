import { Link } from 'react-router-dom';
import './styles/navigation-styles.scss';

import { ReactComponent as CrownLogo } from '../../assets/crown.svg';

const Navigation = () => (
  <nav className="navigation">
    <Link className="logo-container" to="/">
      <CrownLogo className="logo" />
    </Link>
    <div className="nav-links-container">
      <Link className="nav-link" to="/">
        Home
      </Link>
      <Link className="nav-link" to="/home">
        Products
      </Link>
      <Link className="nav-link" to="/shop">
        Shop
      </Link>
    </div>
  </nav>
);

export default Navigation;
