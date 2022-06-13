import SignUpForm from '../../components/sign-up-form/sign-up-form-component';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase-utils';

const Login = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={logGoogleUser}>Sign in With Google</button>
      <SignUpForm />
    </div>
  );
};
export default Login;
