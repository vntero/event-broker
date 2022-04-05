//this is crucial when using TypeScript. With this export{} we're allowed to use the same variable throughout the project
export {}

//require the Advance Message Queue Protocol Library
const amqp = require('amqplib/callback_api');

//establish a CONNECTION to the server
// export const publish = 
amqp.connect('amqp://localhost', function(error0, connection) {
        if (error0) {throw error0}
//create a CHANNEL, which is where most of the api for getting things done resides
    connection.createChannel(function(error1, channel) {
        if (error1) {throw error1}
//declare an EXCHANGE for us to send to
    let exchange = 'topic_logs'
    //declare ARGS
    let args = process.argv.slice(2)
    //declare a KEY
    let key = (args.length > 0) ? args[0] : 'anonymous.info'
    //what's the MESSAGE?
    let msg = args.slice(1).join(' ') || "Bitcoin is freedom! ETH is king! ADA is queen!"
    //then ASSERT a message to the exchange insted of queue and console.log it
    //when using exchange instead of queue, the second argument is the type of exchange, there are different ones with different characteristics
    channel.assertExchange(exchange, 'topic', {durable: false})
    //when using an exchange we PUBLISH instead of sending, the second parameter is the name of the queue where the message will be sent to.
    //if we attribute '', it means that we're allowing for the server to generate a random queue name
    channel.publish(exchange, key, Buffer.from(msg))
    console.log("[x] Sent %s", key, msg)
    })
    //CLOSE the connection and EXIT
    setTimeout(function() {
        connection.close()
        process.exit(0)
    }, 500)
})





