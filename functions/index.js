const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
  'sk_test_51Jra2YIEVSdPar5lbyIOQJYCbZ7h2az0YLCq8QmovUKzPRCOvGvPNxnikvwvGPUzfh73TRZPXrv6SvgwgemWWqXB005lflDinS'
);

//API

//  APP CONFIG
const app = express();

//  MIDDLEWARES
app.use(cors({ origin: true }));
app.use(express.json()); // give response in json format

//  API ROUTES
app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payment/create', async (request, response) => {
  const total = request.query.total;
  console.log('payment req received for amount >> ', total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of currency
    currency: 'usd',
  });

  // OK created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//  LISTEN COMMAND
exports.api = functions.https.onRequest(app);

// Example Endpoints
// http://localhost:5001/clone-8a5ba/us-central1/api
