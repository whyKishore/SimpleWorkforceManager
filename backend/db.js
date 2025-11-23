require("dotenv").config();
const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  // Connection pool configuration for optimal performance
  max: 20, // Maximum number of clients in the pool
  idleTimeoutMillis: 30000, // Close idle clients after 30 seconds
  connectionTimeoutMillis: 2000, // Return error after 2 seconds if no connection available
  min: 5, // Minimum number of clients to keep in the pool
});

pool.on("error", (err) => {
  console.error("Unexpected database error:", err);
});

module.exports = {
  pool,
  query: (text, params) => pool.query(text, params),
};
