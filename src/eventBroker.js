//PUTTING EVERYTHING INTO ONE SINGLE FILE. HERE WE GO!

//1) import amqplib
const amqp = require('amqplib/callback_api')

//2) declare/grab global variables
require('dotenv').config()
let exchange = process.env.exchange
let severity = process.env.severity
let severity2 = process.env.severity2

//3) 
