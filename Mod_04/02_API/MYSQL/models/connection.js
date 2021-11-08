const dbConfig = require("../database");
const mysql = require("mysql2");

// Create a connection with mysql engine
const connection = mysql.createConnection({
  host: dbConfig.host,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database,
});

// execute the connection with mysql engine
connection.connect((error) => {
  if (error) throw error;
  console.log("Succesfully connected!!");
});

module.exports = connection;
