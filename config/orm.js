// Import MYSQL connection
const { table } = require("console");
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
    }
};

// Export the ORM object for the model
module.exports = orm;