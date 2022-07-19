require('dotenv').config();
const stripe = require('stripe')(process.env.YEK_TERCES_EPIRTS);

exports.handler = async (event) => {
  const eventBodyData = JSON.parse(event.body);
  if (!('requestType' in eventBodyData)) {
    console.warn('invalid request to backend');
    return;
  }
  const { requestType } = eventBodyData;

  // check if eventBodyData is valid payment data
  if (
    requestType === 'stripe-payment-intent' &&
    isValidPaymentData(eventBodyData)
  ) {
    try {
      const stripeRequest = await stripePaymentIntent(eventBodyData);
      return stripeRequest;
    } catch (error) {
      return error;
    }
  }
};

async function stripePaymentIntent(paymentData) {
  try {
    // things needed to make stripe intent
    // currency info, payment method accepted, amount
    const { amount, currency, payment_method_types } = paymentData;

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      payment_method_types,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    console.error(error);

    return {
      status: 400,
      body: JSON.stringify({ error }),
    };
  }
}

function isValidPaymentData(eventBodyData) {
  return (
    eventBodyData &&
    'amount' in eventBodyData &&
    'currency' in eventBodyData &&
    'payment_method_types' in eventBodyData
  );
}
