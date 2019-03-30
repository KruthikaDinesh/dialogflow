'use strict';

const {dialogflow} = require('actions-on-google');

const functions = require('firebase-functions');

const app = dialogflow({debug: true});

   app.intent('create_location', (conv, {fromLocation, toLocation}) => {

//Construct the conversational response//

    conv.ask('You will be provided with the fastest and safest routes. Are you ready?');
});

//Set the DialogflowApp object to handle the HTTPS POST request//

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
