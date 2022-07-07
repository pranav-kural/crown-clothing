import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SignInForm from '../../components/sign-in-form/sign-in-form-component';
import SignUpForm from '../../components/sign-up-form/sign-up-form-component';
import { userSignOut } from '../../store/reducers/user/user-actions';
import { selectCurrentUser } from '../../store/reducers/user/user-selector';
import './authentication-styles.scss';

const Authentication = ({ action }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // if action is logout and user is logged in, then logout user
  // for all other cases just display the signin/signup page
  const currentUser = useSelector(selectCurrentUser);

  const loginPageHTML = (
    <div className="auth-container">
      <h1>Authentication Page</h1>
      <div className="form-container">
        <SignInForm />
        <SignUpForm />
      </div>
    </div>
  );

  useEffect(() => {
    // if user logged in & requested action is login, reroute to home
    if (currentUser && action === 'login') {
      navigate('/');
    }
  }, [currentUser, action, navigate]);

  // if user logged in & requested action logout
  if (currentUser && action === 'logout') {
    dispatch(userSignOut());
    return loginPageHTML;
  }
  // if user not logged in
  else if (!currentUser) return loginPageHTML;
};
export default Authentication;
