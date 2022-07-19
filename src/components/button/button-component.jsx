import MUIButton from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

// import {
//   UnstyledButton,
//   DefaultButton,
//   GoogleSignInButton,
//   InvertedButton,
// } from './button-styles';

// allowed button types
export const BUTTON_TYPES = {
  default: 'outlined',
  contained: 'contained',
  unstyled: 'text',
};

export const BUTTON_ICONS = {
  AddShoppingCart: AddShoppingCartIcon,
};

const Button = ({ children, variant, icon, ...otherProps }) => {
  return (
    <MUIButton
      variant={variant ? variant : BUTTON_TYPES.default}
      {...otherProps}
    >
      {children}
      {icon ? icon : ''}
    </MUIButton>
  );
};

export default Button;
