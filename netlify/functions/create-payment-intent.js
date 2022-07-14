require('dotenv').config();
const stripe = require('stripe')(process.env.YEK_TERCES_EPIRTS);

exports.handler = async (event) => {
  try {
    // things needed to make stripe intent
    // currency info, payment method accepted, amount
    const { amount, currency, payment_method_types } = JSON.parse(event.body);

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
    console.error({ error });

    return {
      status: 400,
      body: JSON.stringify({ error }),
    };
  }
};
