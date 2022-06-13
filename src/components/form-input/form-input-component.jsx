import './form-styles.scss';

const FormInput = ({ label, ...otherProps }) => (
  <div className="group">
    <input className="form-input" {...otherProps} />
    {label && (
      <label
        className={`${
          otherProps.value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </label>
    )}
  </div>
);
export default FormInput;
