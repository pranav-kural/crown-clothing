import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  emailSignInStart,
  googleSignInStart,
} from '../../store/reducers/user/user-actions';
import Button from '../button/button-component';
import FormInput from '../form-input/form-input-component';
import './styles/sign-in-form-styles.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const dispatch = useDispatch();

  const signInWithGoogle = () => dispatch(googleSignInStart());

  const handleSubmit = async (event) => {
    event.preventDefault();
    // retrieve values
    const formData = Object.fromEntries(new FormData(event.target));
    const { email, password } = formData;

    if (!email || !password) return alert('Invalid credentials!');

    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => setFormFields(defaultFormFields);

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={(e) => handleSubmit(e)}>
        <FormInput
          label="Email"
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
          required
        />
        <FormInput
          label="Password"
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
          required
        />
        <div className="button-group">
          <Button type="submit">Sign In</Button>
          <Button onClick={signInWithGoogle} buttonType="google">
            Sign in With Google
          </Button>
        </div>
      </form>
    </div>
  );
};
export default SignInForm;
