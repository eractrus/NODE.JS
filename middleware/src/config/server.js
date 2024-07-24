const express = require('express');
const server = express();
const bodyParser = require('body-parser');

server.use(express.json());
server.use(bodyParser.urlencoded({ extended: true }));

const userRoutes = require('../routes/userRouter');
server.use('/user', userRoutes);

module.exports = server;