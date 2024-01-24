// Require the Pool class from the pg module.
const { Pool } = require("pg");

// Require the exported object's properties from db_configuration.js.
const {
  user,
  host,
  database,
  password,
  port,
} = require("../secrets/db_configuration");

// Create an instance with the Pool class.
const pool = new Pool({ user, host, database, password, port });

// Export the pool object.
module.exports = pool;
