//require/import the relevant library
const amqp = require('amqplib/callback_api')

//connect to server
amqp.connect('amqp://localhost', function(error0, connection) {
    if (error0) {throw error0}
    //create channel
    connection.createChannel(function(error1, channel) {
        if (error1) {throw error1}
        //specify the name of the queue we'll be getting our message from
        let exchange = 'crypto'
        //go check the EXCHANGE
        channel.assertExchange(exchange, 'fanout', {durable: false})
        //after asserting the exchange we need to assert the queue
        channel.assertQueue(
            '', 
            {exclusive: true}, 
            function(error2, q) { 
                if (error2) {throw error2}
                console.log("[*] Waiting for messages in %s. To exit press CTRL+C", q.queue)
        channel.bindQueue(q.queue, exchange, '')
        
        //consume the message that is waiting in the queue
        channel.consume(q.queue, function(msg) {
            if(msg.content){
                console.log('[x] Received %s', msg.content.toString())
            }
          
        }, {
            noAck: true
        })
        })  
    })
})