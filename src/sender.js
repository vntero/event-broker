const amqp = require ('amqplib/callback_api')

//relevant VARIABLES -> possibly environment in the future
let exchange = 'crypto'
let args = process.argv.slice(2)
let key = (args.length > 0) ? args[0] : 'aeler.com'
let msg = args.slice(1).join(' ') || 'Aeler dot com'

amqp.connect('amqp://localhost', function(error1, connection) {
    if (error1) {throw error1}
    connection.createChannel(function(error2, channel) {
        if (error2) {throw error2}
        channel.assertExchange(exchange, 'topic', {durable: false})
        channel.publish(exchange, key, Buffer.from(msg))
        console.log("[x] Sent %s: '%s'", key, msg)
    })
    setTimeout(function() {
        connection.close()
        process.exit(0)
    }, 500)
})