const express = require('express');

const routes = express.Router();

const SendEmail = require('./controllers/SendEmail');

routes.post('/sendEmail', SendEmail.send);

module.exports = routes;