import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUpEmailPassword } from '../../store/reducers/user/user-actions';
import Button, { BUTTON_TYPES } from '../button/button-component';
import FormInput from '../form-input/form-input-component';
import './styles/sign-up-form-styles.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // retrieve values
    const formData = Object.fromEntries(new FormData(event.target));
    const { displayName, email, password, confirmPassword } = formData;
    // confirm password matches
    if (password !== confirmPassword)
      return alert('Passwords do not match! Try again!');

    try {
      dispatch(signUpEmailPassword(displayName, email, password));
      resetFormFields();
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => setFormFields(defaultFormFields);

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={(e) => handleSubmit(e)}>
        <FormInput
          label="Display Name"
          type="text"
          onChange={handleChange}
          name="displayName"
          value={displayName}
          required
        />
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
        <FormInput
          label="Confirm Password"
          type="password"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
          required
        />
        <Button buttonType={BUTTON_TYPES.DefaultOutlinedBtn} type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
};
export default SignUpForm;
