//require/import the relevant library
const amqp = require('amqplib/callback_api')

//declaring ARGS the exact same way as in the publisher
let args = process.argv.slice(2)

//WHAT DOES THIS MEAN?
if (args.length == 0) {
    console.log('Usage: consumer.js <facility>.<severity>')
    process.exit(1)
}

//connect to server and the second argument is a function with two arguments as well
amqp.connect('amqp://localhost', function(error0, connection) {
    if (error0) {throw error0}
    //create channel on has one argument being a function with two arguments
    connection.createChannel(function(error1, channel) {
        if (error1) {throw error1}
        //specify the name of the queue we'll be getting our message from
        let exchange = 'crypto'
        //go check the EXCHANGE
        channel.assertExchange(exchange, 'topic', {durable: false})
        //after asserting the exchange we need to assert the queue
        channel.assertQueue(
            '', 
            {exclusive: true}, 
            function(error2, q) { 
                if (error2) {throw error2}
                console.log("[*] Waiting for messages in %s. To exit press CTRL+C")
                //for EACH args we call a function????? makes some sense but i'm confused
                args.forEach(function(key) {
                    channel.bindQueue(q.queue, exchange, key)
                })
        //consume the message that is waiting in the queue
        channel.consume(q.queue, function(msg) {
            console.log("[x] %s:'%s'", msg.fields.routingKey, msg.content.toString())
        }, {
            noAck: true
        })
        })  
    })
})