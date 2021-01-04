import knex from 'knex'
const knexfile = require('../knexfile')
const environment = process.env.DB_ENV || "development";
const conn = knex(knexfile[environment])

export default conn