import { CardElement } from '@stripe/react-stripe-js';
import Button, { BUTTON_TYPES } from '../../button/button-component';
import { FormContainer, PaymentFormContainer } from './payment-form-styles';

const PaymentForm = () => {
  return (
    <PaymentFormContainer>
      <FormContainer>
        <h2>Credit Card Payment: </h2>
        <CardElement />
        <Button buttonType={BUTTON_TYPES.google}>Pay now</Button>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
