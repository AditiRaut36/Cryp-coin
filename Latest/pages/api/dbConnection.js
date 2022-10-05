const mysql = require('mysql2');

const dbConnection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'aditimysql',
  database: 'nodejs'
});

module.exports = dbConnection.promise();