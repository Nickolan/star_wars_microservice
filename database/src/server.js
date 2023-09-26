const express = require('express');
const server = express();
const morgan = require('morgan')

server.use(express.json());
server.use(morgan('dev'))
server.use(require('./routes'))

module.exports = server;