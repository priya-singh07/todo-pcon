require('dotenv/config');
const mysql = require('mysql');
const util = require('util');

const pool = mysql.createPool({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
});

pool.getConnection((err, connection) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to Database");
  }
  if (connection) connection.release();
  return;
});
  
pool.query = util.promisify(pool.query);
module.exports = pool;
