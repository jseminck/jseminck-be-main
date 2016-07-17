var express = require("express");

var app = express();
app.use(express.static('dist'));

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;
app.listen(port);
console.log("Server running at http://127.0.0.1:" + port); // eslint-disable-line no-console