
const functions = require("firebase-functions");
const express = require('express');
const cors=require('cors');

const stripe=require("stripe")('sk_test_51LJhl1SGvExgRQQCdriQo6G13bGNzazXIOteAvnfFV9rWRnHMtB8RDM1WuxoxanM1EOaxLdBrPyPictklKeZwfgi00hskk0BLd')

//API

//App config
const app=express();

//Middlewares
app.use(cors({origin:true}));
app.use(express.json());

//API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

console.log("hello1")

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
  
    console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency:"inr",
    });
    console.log("paymentIntent: ",paymentIntent);
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
        paymentIntent:paymentIntent,
      });
});

//console.log("hello3")
//listen command
exports.api = functions.https.onRequest(app);


