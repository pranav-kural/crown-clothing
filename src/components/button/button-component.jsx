import {
  UnstyledButton,
  DefaultButton,
  GoogleSignInButton,
  InvertedButton,
} from './button-styles';

// allowed button types
export const BUTTON_TYPES = {
  default: 'default',
  google: 'google',
  inverted: 'inverted',
  unstyled: 'unstyled',
};

const Button = ({ children, buttonType, ...otherProps }) => {
  const BUTTON_TYPE_CLASSES = {
    default: DefaultButton,
    google: GoogleSignInButton,
    inverted: InvertedButton,
    unstyled: UnstyledButton,
  };

  const CustomButton =
    buttonType && Object.values(BUTTON_TYPES).includes(buttonType)
      ? BUTTON_TYPE_CLASSES[buttonType]
      : BUTTON_TYPE_CLASSES['default'];

  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
