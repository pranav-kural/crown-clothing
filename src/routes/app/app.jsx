import { Container } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Header from '../../components/header/header-component';
import { appSetup } from './app-setup';
import './app.scss';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // initial app setup
    return appSetup(dispatch);
  }, [dispatch]);

  return (
    <Container>
      <Header />
      <div id="app-main">
        <Outlet />
      </div>
    </Container>
  );
};

export default App;
