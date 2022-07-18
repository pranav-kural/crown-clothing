import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useSelector } from 'react-redux';
import {
  acceptedCurrencies,
  acceptedPaymentMethods,
} from '../../../config/stripe-config';
import { selectCartTotal } from '../../../store/reducers/cart/cart-selector';
import { selectCurrentUser } from '../../../store/reducers/user/user-selector';
import Button, { BUTTON_TYPES } from '../../button/button-component';
import { FormContainer, PaymentFormContainer } from './payment-form-styles';
import { handleStripePayment } from './payment-handler';

const PaymentForm = () => {
  const amount = useSelector(selectCartTotal);
  const customer = useSelector(selectCurrentUser);
  const stripe = useStripe();
  const elements = useElements();
  const transcationCurrency = acceptedCurrencies[0];

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      //handler error
      console.error('stripe payment failed');
      return;
    }

    handleStripePayment(stripe, elements, CardElement, {
      customerName: customer?.displayName ? customer.displayName : 'Guest',
      amount,
      currency: transcationCurrency,
      payment_method_types: acceptedPaymentMethods,
    });
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
