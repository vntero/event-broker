# event-broker
An Event Broker created with TypeScript and Node using a RabbitMQ server on top of a Docker container.

# It will be called: Async Job Exectution Engine
A publisher will publish jobs/tasks and there will be consumers that will take a job and start executing it.

# Abstractions
* RabbitMQ server listens to 5672 port as default;
* A publisher and a consumer;
* A Connection with TCP as the underlying protocol, Advanced Message Queue Protocol will have it's own format;
* A Channel is a logical connection within the server, Multiplexing will be applied; 
* The Queue will receive the information and organize it;
* There is an Exchange, the exchange receives the information and porpagates it to the Queue;

# Environment setup
* install Docker
* docker run --name rabbitmq -p 5672:5672 rabbitmq
