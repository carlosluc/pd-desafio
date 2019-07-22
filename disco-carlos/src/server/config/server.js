var sql = require("./db.js");

var express = require("express"),
  app = express(),
  bodyParser = require("body-parser");
port = process.env.PORT || 4000;

app.listen(port);

console.log("Server started on: " + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE"
  );
  next();
});

var routes = require("../routes/routes");
routes(app);
