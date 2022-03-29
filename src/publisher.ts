export {}

//require the Advance Message Queue Protocol Library
const amqp = require('amqplib/callback_api');

//establish a CONNECTION to the server
amqp.connect('amqp://localhost', function(error0, connection) {
        if (error0) {throw error0}
    //create a CHANNEL, which is where most of the api for getting things done resides
    connection.createChannel(function(error1, channel) {
        if (error1) {throw error1}
    //declare a QUEUE for us to send to
    let queue = "crypto"
    //what's the MESSAGE?
    let msg = process.argv.slice(2).join(' ') || "Bitcoin is freedom! Ethereum is decentralisation!"
    //then PUBLISH a message to the queue and console.log it
    channel.assertQueue(queue, {durable: true})
    channel.sendToQueue(queue, Buffer.from(msg), {persistent: true})
    console.log("[x] Sent %s", msg)
    //CLOSE the connection and EXIT
    setTimeout(function() {
        connection.close()
        process.exit(0)
    }, 500)
    })
})





