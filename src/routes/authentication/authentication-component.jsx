import SignInForm from '../../components/sign-in-form/sign-in-form-component';
import SignUpForm from '../../components/sign-up-form/sign-up-form-component';
import './authentication-styles.scss';

const Authentication = () => {
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
