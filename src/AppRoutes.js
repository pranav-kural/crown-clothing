import { Routes, Route } from 'react-router-dom';
import App from './routes/app/app-component';
import Home from './routes/home/home-component';
import Shop from './routes/shop/shop-component';
import Authentication from './routes/authentication/authentication-component';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Authentication action="login" />} />
        <Route path="logout" element={<Authentication action="logout" />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
