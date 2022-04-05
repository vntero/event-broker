"use strict";
exports.__esModule = true;
//require the Advance Message Queue Protocol Library
var amqp = require('amqplib/callback_api');
//establish a CONNECTION to the server
// export const publish = 
amqp.connect('amqp://localhost:5672', function (error0, connection) {
    if (error0) {
        throw error0;
    }
    //create a CHANNEL, which is where most of the api for getting things done resides
    connection.createChannel(function (error1, channel) {
        if (error1) {
            throw error1;
        }
        let msg = "Bitcoin is freedom"
        let queueOne = "crypto"
        //connect to the Queue
        channel.assertQueue(queueOne);
        //send a message
        channel.sendToQueue(queueOne, Buffer.from(msg));
        //console log it so that we see in the console what is going on
        console.log("[x] Sent %s");
    });
    //CLOSE the connection and EXIT
    setTimeout(function () {
        connection.close();
        process.exit(0);
    }, 500);
});
