import { Routes, Route } from 'react-router-dom';
import App from './routes/app/app-route.jsx';
import Home from './routes/home/home-route';
import Shop from './routes/shop/shop-route';
import Checkout from './routes/shop/checkout-route';
import Authentication from './routes/authentication/authentication-route';
import { useEffect } from 'react';
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from './utils/firebase/firebase-utils.js';
import { setCurrentUser } from './store/reducers/user/user-actions.js';
import { useDispatch } from 'react-redux';

const AppRoutes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      // create user doc in DB if it doesn't exists
      // returns userDocRef
      if (user) createUserDocumentFromAuth(user);
      // update context
      dispatch(setCurrentUser(user));
    });
    // unsubscribe when component umount
    return unsubscribe;
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Authentication action="login" />} />
        <Route path="logout" element={<Authentication action="logout" />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
