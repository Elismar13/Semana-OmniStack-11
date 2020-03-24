const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
    res.json({
        'Nome':"Hello, World!",
        "A":"sas"
    })
});

module.exports = routes;