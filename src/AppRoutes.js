import { Routes, Route } from 'react-router-dom';
import App from './routes/app/app-component';
import Home from './routes/home/home-component';
import Login from './routes/login/login-component';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="shop" element={<h1>Welcome to the shop</h1>} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;