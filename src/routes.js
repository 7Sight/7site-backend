const express = require('express');

const routes = express.Router();

const SendEmail = require('./controllers/SendEmail');

routes.get('/', SendEmail.teste);


routes.post('/sendEmail', SendEmail.send);

module.exports = routes;