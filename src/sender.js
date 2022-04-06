const amqp = require ('amqplib/callback_api')

//relevant VARIABLES -> possibly environment in the future
let exchange = 'crypto'
let args = process.argv.slice(2)

let key1 = (args.length > 0) ? args[0] : 'aeler.com'
let key2 = (args.length > 0) ? args[0] : 'aeler.pt'
let key3 = (args.length > 0) ? args[0] : 'aeler.ch'
let key4 = (args.length > 0) ? args[0] : 'aeler.uk'

let msg1 = args.slice(1).join(' ') || 'Aeler dot com'
let msg2 = args.slice(1).join(' ') || 'Aeler dot pt'
let msg3 = args.slice(1).join(' ') || 'Aeler dot ch'
let msg4 = args.slice(1).join(' ') || 'Aeler dot uk'

amqp.connect('amqp://localhost', function(error1, connection) {
    if (error1) {throw error1}
    connection.createChannel(function(error2, channel) {
        if (error2) {throw error2}
        channel.assertExchange(exchange, 'topic', {durable: false})
        
        channel.publish(exchange, key1, Buffer.from(msg))
        console.log("[x] Sent %s: '%s'", key1, msg)

        channel.publish(exchange, key2, Buffer.from(msg))
        console.log("[x] Sent %s: '%s'", key1, msg)

        channel.publish(exchange, key3, Buffer.from(msg))
        console.log("[x] Sent %s: '%s'", key1, msg)

        channel.publish(exchange, key4, Buffer.from(msg))
        console.log("[x] Sent %s: '%s'", key1, msg)
    })
    setTimeout(function() {
        connection.close()
        process.exit(0)
    }, 500)
})