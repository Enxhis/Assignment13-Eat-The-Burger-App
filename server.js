// Dependencies
var express = require("express");

// PORT
var PORT = process.env.PORT || 3030;

// App
var app = express();

// Serve static content for the app from the 'public' directory
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them
// TODOO...
var routes = require("./controllers/burgersController.js");

app.use(routes);

app.listen(PORT, function(){
    console.log("Apllication listening at localhost:" + PORT);
});