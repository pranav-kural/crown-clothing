import { useState } from 'react';
import {
  authSignInWithEmailAndPassword,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase-utils';
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    // retrieve values
    const formData = Object.fromEntries(new FormData(event.target));
    const { email, password } = formData;

    if (!email || !password) return alert('Invalid credentials!');

    try {
      // see if auth user
      await authSignInWithEmailAndPassword(email, password);
      resetFormFields();

      alert('Signed in successfully!');
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

  const signInWithGoogle = async () => {
    try {
      await signInWithGooglePopup();
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

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
