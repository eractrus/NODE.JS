const express = require('express');
const consign = require('consign');
const path = require('path');
const bodyParser = require('body-parser');

const server = express();

//config default to use ejs
server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, '../src/views'));

server.use(bodyParser.urlencoded({
    extended: true
}));

//Unitização de rotas e acesso ao banco de dados
consign()
    .include('src/routes')
    .then('config/db.js')
    .then('src/model')
    .into(server);

module.exports = server;