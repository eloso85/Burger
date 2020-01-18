var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Se9ura1928820",
    database: "burger_db"
});

connection.connect(function(err){
    if (err) throw err;
    console.log("connected as id " + connection.threadId+ "\n");
})

connection.query('SELECT * FROM burger_db.burgers', function(err,res){
    if (err) throw err;
    console.table(res);
    connection.end();
})

module.exports = connection;