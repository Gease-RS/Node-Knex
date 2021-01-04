import knex from 'knex'
const knexfile = require('../../knexfile')
const environment = process.env.DB_ENV || "development";
const connection = knex(knexfile[environment])

export default connection