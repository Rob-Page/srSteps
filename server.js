var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var fs = require('fs');
var path = require("path");

var port = 3000;

var app = express();

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Serve static content for the app from the "public" directory in the application directory.
app.use("/public", express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var apiRoutes = require("./controllers/apiRoutes.js");
var htmlRoutes = require("./controllers/htmlRoutes.js");

//implements routes into the application
app.use("/", apiRoutes);
app.use("/", htmlRoutes);


app.listen(port);