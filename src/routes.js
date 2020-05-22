const express = require('express');

const routes = express.Router();

const SendEmail = require('./controllers/SendEmail');

routes.post('/', SendEmail.send);

module.exports = routes;