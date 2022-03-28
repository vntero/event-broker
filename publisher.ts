//require/import the relevant library
import amqp from 'amqplib';

//establish a CONNECTION to the server
amqp.connect('amqp://localhost', function(error0, connection) {
    if (error0) {
        throw error0;
    }
    //create a CHANNEL, which is where most of the api for getting things done resides
    connection.createChannel(function(error1, channel) {
    //declare a QUEUE for us to send to
    let queue = "crypto"
    let msg = "Bitcoin is freedom!"
    //then PUBLISH a message to the queue    
    channel.assertQueue(queue, {
        durable:false
    })
    channel.sendToQueue(queue, Buffer.from(msg))
    console.log("[x] Sent %s", msg)
    //CLOSE the connection and EXIT
    setTimeout(function() {
        connection.close()
        process.exit(0)
    }, 500)
    })
})





