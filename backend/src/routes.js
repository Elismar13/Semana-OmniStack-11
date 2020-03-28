const express = require('express');
const { celebrate, Joi, Segments } = require('celebrate');

const SessionController = require('../src/controllers/SessionControlers');
const ongController = require('../src/controllers/ongController');
const IncidentController = require('../src/controllers/IncidentController');
const ProfileController = require('../src/controllers/ProfileController');

const routes = express.Router();


routes.post('/sessions', SessionController.create);

routes.get('/ongs', ongController.index);
routes.post('/ongs', celebrate(), ongController.create);
routes.delete('/ongs', ongController.delete);

routes.get('/profiles', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;