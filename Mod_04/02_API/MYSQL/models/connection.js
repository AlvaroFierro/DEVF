const dbConfig = require("../database");
const mysql = require("mysql2");

// create connection to database with mysql2
const connection = mysql.createConnection({
  host: dbConfig.host,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database,
});

// execute the connection with mysql engine
connection.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log("Connected to database");
  }
});

module.exports = connection;
