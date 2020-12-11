// Dependencies
var orm = require("../config/orm.js");

// burger object
var burger = {
    // select all burgers from database
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    // Insert new burger in the database
    insertOne: function(cols, vals, cb){
        orm.insertOne("burgers", cols, vals, function(res){
            cb(res);
        });
    },
    // Update an existing burger from database
    updateOne: function(objColVals, condition, cb){
        orm.updateOne("burgers", objColVals, condition, function(res){
            cb(res);
        });
    }

};

// Export the database functions for the controller
module.exports = burger;