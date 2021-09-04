const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51JTq1wSFXfBk6YJLooQllrzgmjaPiQot06sk8pTAdGyX5yTMPsxQLUxYoumqOB4F93LOAvdt4SOwAgA7ItunYO8F006LvFWnJm"
);

//API

//App config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());
//API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

// app.get("/siddhant", (request, response) =>
//   response.status(200).send("Whats up Siddhant !")
// );

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment request recieved!", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "inr",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen command
exports.api = functions.https.onRequest(app);
