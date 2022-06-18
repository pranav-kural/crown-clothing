import './button-styles.scss';

const Button = ({ children, buttonType, ...otherProps }) => {
  const BUTTON_TYPE_CLASSES = {
    google: 'button-container google-sign-in',
    inverted: 'button-container inverted',
    unstyled: 'button-unstyled',
  };

  return (
    <button
      className={`${
        buttonType ? BUTTON_TYPE_CLASSES[buttonType] : 'button-container'
      }`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
