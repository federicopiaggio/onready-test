const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Rossignol26#",
  database: "ONREADY_TEST",
});

connection.connect();

module.exports = connection;
