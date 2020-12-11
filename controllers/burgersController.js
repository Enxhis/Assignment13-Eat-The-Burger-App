// Dependencies
var express = require("express");
var router = express.Router();

// Import the model to use its database
var burger = require("../models/burgers.js");

// Create all our routes and set up logic within routes
// GET route
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

// POST route
router.post("/burgers", function (req, res) {
    burger.insertOne(["burger_name"], [req.body.burger_name], function(result){
        res.redirect("/");
    });
});

// PUT route
router.put("/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id;

    burger.updateOne({
        devoured: true
    }, condition,
    function(result){
        if(result.changedRows === 0){
            return res.status(404).end();
        }
        res.redirect("/");
    });
});

// Export routes for server.js to use
module.exports = router;
