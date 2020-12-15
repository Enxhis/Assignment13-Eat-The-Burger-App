// Set up SQL connection
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "myloveReni2015",
    database: "burgers_db"
});

// Make connection
connection.connect(function(err){
    if(err){
        console.log("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected as id: " + connection.threadId);
});

// Export connection for ORM to use
module.exports = connection;