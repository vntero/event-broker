# event-broker
An Event Broker created with TypeScript and Node using a RabbitMQ server on top of a Docker container.

# It will be called: Async Job Exectution Engine
A publisher will publish jobs/tasks and there will be consumers that will take a job and start executing it.
The ideal server will be with Topics, allowing messages to be received based on a pattern.

* Messages sent to a topic exchange can't have an arbitrary routing_key - it must be a list of words, delimited by dots. The words can be anything, but usually they specify some features connected to the message. A few valid routing key examples: "stock.usd.nyse", "nyse.vmw", "quick.orange.rabbit". There can be as many words in the routing key as you like, up to the limit of 255 bytes.

The binding key must also be in the same form. The logic behind the topic exchange is similar to a direct one - a message sent with a particular routing key will be delivered to all the queues that are bound with a matching binding key. However there are two important special cases for binding keys:

    * (star) can substitute for exactly one word.
    # (hash) can substitute for zero or more words.


# Abstractions
* RabbitMQ server listens to 5672 port as default;
* A publisher and a consumer;
* A Connection with TCP as the underlying protocol, Advanced Message Queue Protocol will have it's own format;
* A Channel is a logical connection within the server, Multiplexing will be applied; 
* The Queue will receive the information and organize it;
* There is an Exchange, the exchange receives the information and porpagates it to the Queue;

# Environment setup
* install Docker
* docker run --name event-broker -p 5672:5672 rabbitmq
* npm init -y
* npm i -d typescript
* npm i --save-dev @types/node
* npm i amqplib
* npm i --save-dev @types/amqplib
* npm install --save-dev jest (testing framework)
* add a docker compose test yml file?

