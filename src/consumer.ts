//require/import the relevant library
const amqp = require('amqplib/callback_api')

//connect to server
amqp.connect('amqp://localhost', function(error0, connection) {
    if (error0) {
        throw error0
    }
    //create channel
    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1
        }
        //specify the name of the queue we'll be getting our message from
        let queue = 'crypto'

        channel.assertQueue(queue, {
            durable: true
        })
        console.log('[*] Waiting for messages in &s. To exit press CTRL+C', queue);
        //consume the message that is waiting in the queue
        channel.consume(queue, function(msg) {
            var secs = msg.content.stoString().split('.').length - 1
            console.log('[x] Received %s', msg.content.toString())
            setTimeout(function() {
                console.log(" [x] Done")
            }, secs * 1000)
        }, {
            noAck: true
        })
    })
}) 