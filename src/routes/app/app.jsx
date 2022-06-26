import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Navigation from '../../components/navigation/navigation-component';
import { appSetup } from './app-setup';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // initial app setup
    return appSetup(dispatch);
  }, [dispatch]);

  return (
    <div className="app-container">
      <Navigation />
      <Outlet />
    </div>
  );
};

export default App;
