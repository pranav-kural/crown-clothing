import { styled } from '@mui/material';
import Button from '../button/button-component';

export const AddToCartButton = styled(Button)({
  marginRight: '0.25rem',
  fontSize: '1rem',
  fontFamily: [
    'Montserrat',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  backgroundColor: '#1c313a',
  '&:hover': {
    backgroundColor: '#102027',
    borderColor: '#26434f',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#26434f',
    borderColor: '#102027',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(38, 67, 79,.5)',
  },
});
