const knex = require('knex');
const configuration = require('../../knexfile');

const env = process.env.NODE_ENV;

const connection = knex( env === 'test' ? configuration.test : configuration.development );

module.exports = connection;
