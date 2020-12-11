// Dependencies
var express = require("express");
var router = express.Router();

// Import the model to use its database
var burger = require("../models/burgers.js");

// Create all our routes and set up logic within routes
// GET route
router.get("/", function(req, res){
    burger.selectAll(function(data){
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});
