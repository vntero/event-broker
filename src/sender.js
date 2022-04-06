//require relevant library
const amqp = require ('amqplib/callback_api')

//relevant VARIABLES -> possibly environment in the future
let exchange = 'countries'
let args = process.argv.slice(2)
let msg = args.slice(1).join(' ') || 'Aeler is an EUROPEAN company'
let msg2 = args.slice(1).join(' ') || 'Aeler is an AFRICAN brand'
let msg3 = args.slice(1).join(' ') || 'Aeler is an ASIAN firm'
let severity = (args.length > 0) ? args[0] : 'europe'
let severity2 = (args.length > 0) ? args[0] : 'africa'
let severity3 = (args.length > 0) ? args[0] : 'asia'


//the CONNECTION and EXECUTION
amqp.connect('amqp://localhost', function(error1, connection) {
    if (error1) {throw error1}
    connection.createChannel(function(error2, channel) {
        if (error2) {throw error2}
        channel.assertExchange(exchange, 'direct', {durable: true})
        channel.publish(exchange, severity, Buffer.from(msg))
        channel.publish(exchange, severity2, Buffer.from(msg2))
        channel.publish(exchange, severity3, Buffer.from(msg3))
        console.log('Sent to', severity, severity2, severity3)
    })
    setTimeout(function() {
        connection.close()
        process.exit(0)
    }, 500)
})