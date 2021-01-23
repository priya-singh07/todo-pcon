const mysql = require('mysql');
const util = require('util');

const pool = mysql.createPool({
    host: 'bsejnpna1fluifgepn9d-mysql.services.clever-cloud.com',
    user: 'uvwkddiwepha8lxw',
    password: 'DxwDoGpTo1n4gdRUhG1X',
    database: 'bsejnpna1fluifgepn9d'
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
