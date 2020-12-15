// Import MYSQL connection
const { table } = require("console");
const { createVerify } = require("crypto");
const { connect } = require("../config/connection.js");
var connection = require("../config/connection.js");

// Hjelper function for SQL syntax
// This function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

// Hjelper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];

    // looop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];

        arr.push(key + "=" + value);
    }
    // translate array of strings to a single comma-separated string
    return arr.toString();
}

// ORM object to perform SQL queries
var ORM = {
    // function that returns all data from burgers table
    selectAll: function (tableInput, cb){
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result){
            if(err){
                throw err;
            }
            // Return response callback
            cb(result);
        });
    },
    // function that inserts new data in burgers table
    insertOne: function(table, cols, vals, cb){
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function(err, result){
            if(err){
                throw err;
            }
            cb(result);
        });
    },
    // function that updates an existing entry in the burgers table
    updateOne: function(table, objColVals, condition, cb){
        var queryString = "UPDATE " + table;

        queryString += " SET";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);

        connection.query(queryString, function(err, result){
            if(err){
                throw err;
            }
            cb(result);
        });
    }

};

// Export the ORM object for the model
module.exports = ORM;