import { Outlet } from 'react-router-dom';
import Navigation from '../../components/navigation/navigation-component';

const App = () => {
  return (
    <div className="app-container">
      <Navigation />
      <Outlet />
    </div>
  );
};

export default App;
