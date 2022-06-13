import { useState } from 'react';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase-utils';
import FormInput from '../form-input/form-input-component';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();
    // retrieve values
    const formData = Object.fromEntries(new FormData(event.target));
    const { displayName, email, password, confirmPassword } = formData;
    // confirm password matches
    if (password !== confirmPassword)
      return alert('Passwords do not match! Try again!');

    try {
      // see if auth user
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      // update display name
      user.displayName = user.displayName ? user.displayName : displayName;
      // create userDoc
      const userDocRef = await createUserDocumentFromAuth(user);
      console.log(userDocRef);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1>Sign up with your email and password</h1>
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};
export default SignUpForm;
