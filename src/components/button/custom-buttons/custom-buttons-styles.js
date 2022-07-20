export const defaultStyles = {
  color: '#2b525f',
  margin: '0.5rem',
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
};

export const defaultContainedButtonStyles = {
  ...defaultStyles,
  color: '#fff',
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
    boxShadow: '0 0 0.5rem 0 rgba(38, 67, 79,.5)',
  },
};

export const defaultOutlinedButtonStyles = {
  ...defaultStyles,
  borderColor: '#2b525f',
  '&:hover': {
    borderColor: '#102027',
    color: '#102027',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    color: '#102027',
    borderColor: '#102027',
  },
};

export const addToCartButtonStyles = {
  ...defaultStyles,
  width: '80%',
  opacity: '0.8',
  position: 'absolute',
  top: '30vh',
  marginRight: '0.25rem',
  ...defaultContainedButtonStyles,
};
