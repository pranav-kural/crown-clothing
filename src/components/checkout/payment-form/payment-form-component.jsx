import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import Button, { BUTTON_TYPES } from '../../button/button-component';
import { FormContainer, PaymentFormContainer } from './payment-form-styles';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      //handler error
      console.error('stripe payment failed');
      return;
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment: </h2>
        <CardElement />
        <Button buttonType={BUTTON_TYPES.google}>Pay now</Button>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
