var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "jm2ov1zf76n8dmk1",
  password: "v9bgxz5ygpz2ak98",
  database: "Warehouse_db"
})

connection.connect(function(err){
  if (err){
      console.error('error connecting: ' + err.stack);
      return;
  }
  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
