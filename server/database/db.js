/* Configure postgres and export it so that EVERY file in our project can use our database connection */

const pg = require("pg");
const url = require("url");

let config = {};

if (process.env.DATABASE_URL) {
  // Heroku gives a url, not a connection object
  // https://github.com/brianc/node-pg-pool
  const params = url.parse(process.env.DATABASE_URL);
  const auth = params.auth.split(":");

  config = {
    user: auth[0],
    password: auth[1],
    host: params.hostname,
    port: params.port,
    database: params.pathname.split("/")[1],
    ssl: { rejectUnauthorized: false },
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
  };
} else {
  config = {
    user: "postgres",
    password: "password",
    host: "localhost",
    port: 5432,
    database: "react_gallery",
  };
}
const Pool = pg.Pool;

const pool = new Pool(config);

pool.on("connect", (client) => {
  console.log("PostgreSQL is connected");
});
pool.on("error", (err, client) => {
  console.log("Unexpected error on client", err);
});

module.exports = pool;
