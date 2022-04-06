const amqp = require('amqplib/callback_api')

//relevant VARIABLES for retrieving the message
let exchange = 'crypto'
let args = process.argv.slice(2)
if (args.length == 0) {
    console.log("Usage: receiver.js <facility>.<severity>")
    process.exit(1)
}

amqp.connect('amqp://localhost', function(error1, connection) {
    if (error1) {throw error1}
    connection.createChannel(function(error2, channel) {
        if (error2) {throw error2}
        channel.assertExchange(exchange, 'topic', {durable: false})
        channel.assertQueue('', {exclusive: true}, function(error3, q) {
            if (error3) {throw error3}
            console.log(' [x] Waiting for logs. To exit press CTRL+C')
            args.forEach(function(key) {channel.bindQueue(q.queue, exchange, key)})
            channel.consume(q.queue, function(incomingMsg) {
                console.log(" [x] %s:'%s'", incomingMsg.fields.routingKey, incomingMsg.content.toString())
            }, {Ack: false})
        })
    })
})