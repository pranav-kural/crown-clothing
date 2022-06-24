import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SignInForm from '../../components/sign-in-form/sign-in-form-component';
import SignUpForm from '../../components/sign-up-form/sign-up-form-component';
import { UserContext } from '../../contexts/user-context';
import { signOutUser } from '../../utils/firebase/firebase-utils';
import './authentication-styles.scss';

const Authentication = ({ action }) => {
  let navigate = useNavigate();
  // if action is logout and user is already logged in, then logout user
  // for all other cases just display the signin/signup page
  const { currentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
  };

  useEffect(() => {
    // if user logged in & requested action is login, reroute to home
    if (currentUser && action === 'login') {
      navigate('/');
    }
  }, [currentUser, action, navigate]);

  // if user logged in & requested action logout
  if (currentUser && action === 'logout') {
    signOutHandler();
    return;
  }
  // if user not logged in
  else if (!currentUser)
    return (
      <div className="auth-container">
        <h1>Authentication Page</h1>
        <div className="form-container">
          <SignInForm />
          <SignUpForm />
        </div>
      </div>
    );
};
export default Authentication;