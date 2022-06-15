import { useContext } from 'react';
import SignInForm from '../../components/sign-in-form/sign-in-form-component';
import SignUpForm from '../../components/sign-up-form/sign-up-form-component';
import { UserContext } from '../../contexts/user-context';
import { auth, signOutUser } from '../../utils/firebase/firebase-utils';
import './authentication-styles.scss';

const Authentication = ({ action }) => {
  // if action is logout and user is already logged in, then logout user
  // for all other cases just display the signin/signup page
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(auth.currentUser);
  };

  if (currentUser && action === 'logout') {
    console.log('user signed out');
    signOutHandler();
  }

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
