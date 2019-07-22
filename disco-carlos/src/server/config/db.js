var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "@dmin@dmin",
  database: "discocarlos"
});

connection.connect(function(err) {
  if (err) throw err;
  else console.log("Database connected");
});

module.exports = connection;
