const express = require('express');

const routes = express.Router();

const ongController = require('../src/controllers/ongController');

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

module.exports = routes;