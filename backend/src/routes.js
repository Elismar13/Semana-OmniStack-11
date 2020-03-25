const express = require('express');

const routes = express.Router();

const ongController = require('../src/controllers/ongController');
const IncidentController = require('../src/controllers/IncidentController');

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;