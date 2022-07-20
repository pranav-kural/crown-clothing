// import MUIButton from '@mui/material/Button';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {
  AddToCartButton,
  DefaultButton,
  DefaultButtonContained,
  DefaultOutlinedButton,
} from './custom-buttons/custom-buttons';

// import {
//   UnstyledButton,
//   DefaultButton,
//   GoogleSignInButton,
//   InvertedButton,
// } from './button-styles';

// allowed button types
const BUTTONS = {
  DefaultBtn: DefaultButton,
  DefaultContainedBtn: DefaultButtonContained,
  DefaultOutlinedBtn: DefaultOutlinedButton,
  AddToCartBtn: AddToCartButton,
};

export const BUTTON_TYPES = {
  DefaultBtn: 'DefaultBtn',
  DefaultContainedBtn: 'DefaultContainedBtn',
  DefaultOutlinedBtn: 'DefaultOutlinedBtn',
  AddToCartBtn: 'AddToCartBtn',
};

const getCustomBtn = (buttonType) => {
  switch (buttonType) {
    case BUTTON_TYPES.AddToCartBtn:
      return { CUSTOM_BTN: BUTTONS.AddToCartBtn, variant: 'contained' };
    case BUTTON_TYPES.DefaultContainedBtn:
      return { CUSTOM_BTN: BUTTONS.DefaultContainedBtn, variant: 'contained' };
    case BUTTON_TYPES.DefaultOutlinedBtn:
      return { CUSTOM_BTN: BUTTONS.DefaultOutlinedBtn, variant: 'outlined' };
    default:
      return { CUSTOM_BTN: BUTTONS.DefaultBtn, variant: 'text' };
  }
};

const Button = ({ buttonType, children, ...otherProps }) => {
  const { CUSTOM_BTN, variant } = getCustomBtn(buttonType);
  return (
    <CUSTOM_BTN variant={variant} {...otherProps}>
      {children}
    </CUSTOM_BTN>
  );
};

export default Button;
