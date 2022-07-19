export const handleStripePayment = async (
  stripe,
  elements,
  CardElement,
  { customerName, amount, currency, payment_method_types }
) => {
  try {
    const {
      paymentIntent: { client_secret },
    } = await getPaymentIntent(amount, currency, payment_method_types);
    const paymentData = {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: customerName,
        },
      },
    };
    const paymentResult = await stripe.confirmCardPayment(
      client_secret,
      paymentData
    );

    if (paymentResult.error) {
      console.error(`Oops! payment failed`);
      throw new Error(JSON.stringify(paymentResult.error));
    } else if (paymentResult.paymentIntent.status === 'succeeded')
      console.log(`Successful payment received from ${customerName}`);
  } catch (error) {
    throw error;
  }
};

const getPaymentIntent = async (amount, currency, payment_method_types) => {
  try {
    const responseData = await fetch(
      '/.netlify/functions/create-payment-intent',
      {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          requestType: 'stripe-payment-intent',
          amount,
          currency,
          payment_method_types,
        }),
      }
    );
    return await responseData.json();
  } catch (error) {
    throw error;
  }
};
