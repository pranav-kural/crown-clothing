import { Button, styled } from '@mui/material';
import {
  addToCartButtonStyles,
  defaultContainedButtonStyles,
  defaultOutlinedButtonStyles,
  defaultStyles,
} from './custom-buttons-styles';

export const DefaultButton = styled(Button)(defaultStyles);
export const DefaultButtonContained = styled(Button)(
  defaultContainedButtonStyles
);
export const DefaultOutlinedButton = styled(Button)(
  defaultOutlinedButtonStyles
);
export const AddToCartButton = styled(Button)(addToCartButtonStyles);
